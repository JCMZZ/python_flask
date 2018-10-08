
import random, math
from flask import Blueprint, jsonify, request
from .. import dbmodel, db
from ..mypackage import index as indexPackage
index = Blueprint('index',__name__)

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
    parmars = request.form
    print(parmars)
    # randomInt = math.floor(random.random() * 1) * 10
    # Mirror = dbmodel.Mirror
    # Commodity = dbmodel.Commodity
    # Commpic = dbmodel.Commpic
    # mirrorResult = db.session.query(Mirror).limit(10).offset(randomInt).all()
    # newResult = {
    #     "mirror": [],
    #     "commodity": []
    # }
    # for item in mirrorResult:
    #     row = {
    #         "mid": item.mid,
    #         "mpath": item.mpath,
    #         "cid": item.cid
    #     }
    #     newResult['mirror'].append(row)
    # commodityCommpicResult = db.session.query(Commodity,Commpic.path).filter(Commodity.cid == parmars,Commodity.cid == Commpic.cid).all()
    # for item in commodityCommpicResult:
    #     row = {
    #         "cid": item[0].cid,
    #         "cname": item[0].cname,
    #         "price": fmtDecimal(item[0].price),
    #         "count": item[0].count,
    #         "discount": item[0].discount,
    #         "commitment": item[0].commitment,
    #         "specification": item[0].specification,
    #         "path": item[1]
    #     }
    #     newResult['commodity'].append(row)
    # return jsonify(newResult)
    return '1'

# app.post('/', function (req, res) {
#   let parmars = req.body
#   parmars.address === '' && (parmars.address = '-')
#   connection.query(`INSERT INTO ju_user VALUES(
#     NULL,'${parmars.uname}','${parmars.pwd}','${parmars.email}',
#     '${parmars.phone}','${parmars.address}','/static/img/avter/avter.jpg',now(),'1'
#   )`, function (err, result) {
#     if (err) return
#     if (result.insertId >= 0) {
#       res.send({code: 1, msg: '添加成功'})
#     } else {
#       res.send({code: 0, msg: '添加失败'})
#     }
#   })
# })

# 验证用户输入信息
@index.route('/check', methods=['POST','GET'])
def check():
    parmars = request.form.to_dict().items()
    for item in parmars:
        print('item',item[0])
        print('item',item[1])
    # randomInt = math.floor(random.random() * 1) * 10
    # Mirror = dbmodel.Mirror
    # Commodity = dbmodel.Commodity
    # Commpic = dbmodel.Commpic
    # mirrorResult = db.session.query(Mirror).limit(10).offset(randomInt).all()
    # newResult = {
    #     "mirror": [],
    #     "commodity": []
    # }
    # for item in mirrorResult:
    #     row = {
    #         "mid": item.mid,
    #         "mpath": item.mpath,
    #         "cid": item.cid
    #     }
    #     newResult['mirror'].append(row)
    # commodityCommpicResult = db.session.query(Commodity,Commpic.path).filter(Commodity.cid == parmars,Commodity.cid == Commpic.cid).all()
    # for item in commodityCommpicResult:
    #     row = {
    #         "cid": item[0].cid,
    #         "cname": item[0].cname,
    #         "price": fmtDecimal(item[0].price),
    #         "count": item[0].count,
    #         "discount": item[0].discount,
    #         "commitment": item[0].commitment,
    #         "specification": item[0].specification,
    #         "path": item[1]
    #     }
    #     newResult['commodity'].append(row)
    # return jsonify(newResult)
    return '1'
# app.post('/check', function (req, res) {
#   let key = Object.keys(req.body)[0]
#   let value = req.body[key]
#   connection.query('SELECT * FROM ju_user WHERE ' + key + "='" + value + "'", function (err, results) {
#     if (err) return
#     if (results.length) {
#       res.send('1')
#     } else {
#       res.send('0')
#     }
#   })
# })