import random, math, time
from flask import Blueprint, jsonify, request, session
from .. import dbmodel, db
from ..mypackage import index as indexPackage
index = Blueprint('index',__name__)
ws = Blueprint('ws', __name__)

fmtDecimal = indexPackage.MyPackage.fmtDecimal
@index.route('/home/card', methods=['POST','GET'])
def cards():
    Commodity = dbmodel.Commodity
    Commpic = dbmodel.Commpic
    result = db.session.query(Commodity.cid, Commodity.cname, Commodity.price, Commpic.path).filter(Commodity.cid == Commpic.cid).all()
    newResult = []
    for item in result:
        row = {
            "cid": item[0],
            "cname": item[1],
            "price": fmtDecimal(item[2]),
            "path": item[3]
        }
        newResult.append(row)
    return jsonify(newResult)

# 放大镜图片索引
@index.route('/detail/mirror', methods=['POST','GET'])
def mirror():
    parmars = request.form['id']
    randomInt = math.floor(random.random() * 1) * 10
    Mirror = dbmodel.Mirror
    Commodity = dbmodel.Commodity
    Commpic = dbmodel.Commpic
    mirrorResult = db.session.query(Mirror).limit(10).offset(randomInt).all()
    newResult = {
        "mirror": [],
        "commodity": []
    }
    for item in mirrorResult:
        row = {
            "mid": item.mid,
            "mpath": item.mpath,
            "cid": item.cid
        }
        newResult['mirror'].append(row)
    commodityCommpicResult = db.session.query(Commodity,Commpic.path).filter(Commodity.cid == parmars,Commodity.cid == Commpic.cid).all()
    for item in commodityCommpicResult:
        row = {
            "cid": item[0].cid,
            "cname": item[0].cname,
            "price": fmtDecimal(item[0].price),
            "count": item[0].count,
            "discount": item[0].discount,
            "commitment": item[0].commitment,
            "specification": item[0].specification,
            "path": item[1]
        }
        newResult['commodity'].append(row)
    return jsonify(newResult)

# 注册信息入录
@index.route('/register', methods=['POST','GET'])
def register():
    try:
        parmars = request.form.to_dict()
        insertUser = dbmodel.JuUser(parmars['uname'], parmars['pwd'], parmars['email'], parmars['phone'], parmars['address'], '/static/img/vue/avter/avter.jpg', 1)
        db.session.add(insertUser)
        db.session.commit()
        return jsonify({'code': 1, 'msg': '添加成功'})
    except:
        return jsonify({'code': 0, 'msg': '添加失败'})

# 验证用户输入信息
@index.route('/check', methods=['POST','GET'])
def check():
    parmars = request.form.to_dict()
    key, = tuple(parmars)
    value, = tuple(parmars.values())
    JuUser = dbmodel.JuUser
    result = db.session.query(JuUser).filter(eval('JuUser.%s' % key) == value).all()
    return str(len(result))

# 登录验证
@index.route('/login', methods=['POST','GET'])
def login():
    uname = request.form['uname']
    pwd = request.form['pwd']
    if session.get('user:%s' % uname) == uname:
        date = time.time()
        if session.get('rest:%s' % uname) == None:
            session['rest:%s' % uname] = date
        if date - session.get('rest:%s' % uname) >= 60000:
            if session.get('monitor:%s' % uname).readyState == 1:
                session.get('monitor:%s' % uname).send('clear')
            logout()
        else:
            return jsonify({'code': 3, 'msg': '失败'})
    JuUser = dbmodel.JuUser
    result = db.session.query(JuUser).filter(JuUser.pwd == pwd,JuUser.uname == uname).first()
    newResult = {}
    newResult['uid'] = result.uid 
    newResult['uname'] = result.uname 
    newResult['pwd'] = result.pwd 
    newResult['email'] = result.email 
    newResult['phone'] = result.phone 
    newResult['address'] = result.address 
    newResult['avter'] = result.avter 
    newResult['time'] = result.time 
    newResult['is_del'] = result.is_del 
    if newResult.get('uid') != None:
        session['user:%s' % uname] = result[0].uname
        return jsonify({'code': 1, 'msg': newResult})
    else:
        return jsonify({'code': 0, 'msg': '失败'})
    
# app.post('/login', function (req, res) {
#   if (session['user:' + req.body.uname] === req.body.uname) {
#     let date = new Date().getTime()
#     session['rest:' + req.body.uname] === undefined && (session['rest:' + req.body.uname] = date)
#     if (date - session['rest:' + req.body.uname] >= 60000) {
#       session['monitor:' + req.body.uname].readyState === 1 && (session['monitor:' + req.body.uname].send('clear'))
#       logout(req)
#     } else {
#       res.send({code: 3, msg: '失败'})
#       return
#     }
#   }
#   connection.query("SELECT * FROM ju_user WHERE uname='" + req.body.uname + "'AND pwd='" + req.body.pwd + "'", function (err, results) {
#     if (err) return
#     if (results.length) {
#       session['user:' + req.body.uname] = results[0].uname
#       res.send({code: 1, msg: results})
#     } else {
#       res.send({code: 0, msg: '失败'})
#     }
#   })
# })

# 账户退出登录
@index.route('/logout', methods=['POST','GET'])
def logout_route():
    logout(request)
    return '已经退出'
def logout(request):
    uname = request.form['uname']
    if session.get(uname) != None:
        # w[session[req.body.uname]].close()
        session.pop(uname,None)
    session.pop('user:%s' % uname,None)
    session.pop('rest:%s' % uname,None)
    if session.get('monitor:%s' % uname) == 1:
        session.get('monitor:%s' % uname).close()
    session.pop('monitor:%s' % uname,None)
    

# function logout (req) {
#   if (session[req.body.uname] !== undefined) {
#     
#     delete session[req.body.uname]
#   }
#   console.log('退出:' + req.body.uname)
#   delete session['user:' + req.body.uname]
#   delete session['rest:' + req.body.uname]
#   session['monitor:' + req.body.uname] === 1 && (session['monitor:' + req.body.uname].close())
#   delete session['monitor:' + req.body.uname]
# }

# socket服务端口监听 异地登录监听
@ws.route('/monitor')
def monitor_socket(socket):
    while not socket.closed:
        message = socket.receive()
        print(message)
        socket.send(message)

# // socket服务端口监听 异地登录监听
# var monitor = new WebSocketServer({port: 60000})
# // socket服务连接
# // let m = {}
# monitor.on('connection', function (ws) {
#   ws.on('message', function (message) {
#     console.log('monitor: ', message)
#     session['monitor:' + message] = ws
#     // console.log(ws._ultron.id)//连接id
#     ws.send('monitor:已经连接')
#   })
#   ws.on('error', function (err) {
#     console.log(err)
#   })
#   ws.on('close', function () {
#     // console.log(ws._finalize.__ultron)//结束id
#     console.log('monitor:断开连接')
#   })
# })