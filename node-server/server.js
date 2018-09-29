'use strict'
var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')
var urlencodedparser = bodyParser.urlencoded({extended: false})
var cors = require('cors')
var avter = require('multer')({dest: '../static/img/avter/'})
var fs = require('fs')
var WebSocketServer = require('ws').Server
var path = require('path')
var sql = require('./sql')
// sql.createdatabase()//创建数据库 ju
// sql.createtable()//创建ju_user用户表
var connection = sql.connection
// var table = require('./commodity')
// table.commodity(connection)//创建商品表commodity
// table.commodityInsert(connection)//向commodity表中添加数据
// table.picture(connection)//创建商品图片表comm_pic
// table.pictureInsert(connection)//向comm_pic表中添加数据
// table.mirror(connection)//创建详情图片表mirror
// table.mirrorInsert(connection)//向mirror表中添加数据
// table.car(connection)//创建购物车数据表 car
// table.award(connection)//创建中奖数据表 award
// table.awardInsert(connection)//向award表中添加一条数据

// 解决跨域请求
app.use(cors())
// post请求解析请求主体
app.use(urlencodedparser)

// 验证用户输入信息
app.post('/check', function (req, res) {
  let key = Object.keys(req.body)[0]
  let value = req.body[key]
  connection.query('SELECT * FROM ju_user WHERE ' + key + "='" + value + "'", function (err, results) {
    if (err) return
    if (results.length) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})
// socket服务端口监听 异地登录监听
var monitor = new WebSocketServer({port: 60000})
// socket服务连接
// let m = {}
monitor.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('monitor: ', message)
    session['monitor:' + message] = ws
    // console.log(ws._ultron.id)//连接id
    ws.send('monitor:已经连接')
  })
  ws.on('error', function (err) {
    console.log(err)
  })
  ws.on('close', function () {
    // console.log(ws._finalize.__ultron)//结束id
    console.log('monitor:断开连接')
  })
})
// 登录验证
app.post('/login', function (req, res) {
  if (session['user:' + req.body.uname] === req.body.uname) {
    let date = new Date().getTime()
    session['rest:' + req.body.uname] === undefined && (session['rest:' + req.body.uname] = date)
    if (date - session['rest:' + req.body.uname] >= 60000) {
      session['monitor:' + req.body.uname].readyState === 1 && (session['monitor:' + req.body.uname].send('clear'))
      logout(req)
    } else {
      res.send({code: 3, msg: '失败'})
      return
    }
  }
  connection.query("SELECT * FROM ju_user WHERE uname='" + req.body.uname + "'AND pwd='" + req.body.pwd + "'", function (err, results) {
    if (err) return
    if (results.length) {
      session['user:' + req.body.uname] = results[0].uname
      res.send({code: 1, msg: results})
    } else {
      res.send({code: 0, msg: '失败'})
    }
  })
})
// 注册信息入录
app.post('/register', function (req, res) {
  let parmars = req.body
  parmars.address === '' && (parmars.address = '-')
  connection.query(`INSERT INTO ju_user VALUES(
    NULL,'${parmars.uname}','${parmars.pwd}','${parmars.email}',
    '${parmars.phone}','${parmars.address}','/static/img/avter/avter.jpg',now(),'1'
  )`, function (err, result) {
    if (err) return
    if (result.insertId >= 0) {
      res.send({code: 1, msg: '添加成功'})
    } else {
      res.send({code: 0, msg: '添加失败'})
    }
  })
})
// 主页商品信息查询
app.get('/home/card', function (req, res) {
  connection.query(`SELECT c.cid,c.cname,c.price,p.path FROM commodity c,comm_pic p
  WHERE c.cid = p.cid`, function (err, result) {
    if (err) return
    res.send(result)
  })
})
// 放大镜图片索引
app.post('/detail/mirror', function (req, res) {
  let random = Math.floor(Math.random() * 5) * 10
  let pic = `SELECT * FROM mirror LIMIT ${random},10`
  let parmars = req.body.id
  let sql = `SELECT c.*,cp.path FROM commodity c,comm_pic cp WHERE c.cid=${parmars} AND c.cid=cp.cid`
  let data = {}
  connection.query(pic, function (err, result) {
    if (err) return
    data['mirror'] = result
  })
  connection.query(sql, function (err, result) {
    if (err) return
    data['commodity'] = result
    res.send(data)
  })
})
// 购物车入录信息
app.post('/shop', function (req, res) {
  let parmars = req.body
  let sql = `INSERT INTO shop VALUES(NULL,'${parmars.cname}',
  ${parmars.price},${parmars.discount},${parmars.count},'${parmars.spic}',
  '${parmars.commitment}','${parmars.remark}','${parmars.address}',now(),${parmars.cid},${parmars.uid})`
  connection.query(sql, function (err, result) {
    if (err) return
    if (result.insertId >= 0) {
      res.send({code: 1, msg: '添加成功'})
    } else {
      res.send({code: 0, msg: '添加失败'})
    }
  })
})

// 上传头像更改数据
function query (req, filename, res) {
  let parmars = req.body
  let str = ''
  let keys = Object.keys(parmars)
  for (let value of keys) {
    if (value === 'uid') {
      continue
    }
    if (value === 'avter') {
      str += value + "='" + '/static/img/avter/' + filename + "',"
      continue
    }
    str += value + "='" + parmars[value] + "',"
  }
  str = ' ' + str.substring(0, str.length - 1) + ' '
  let sql = `UPDATE ju_user SET ${str} WHERE uid=${parmars.uid}`
  connection.query(sql, function (err, results) {
    if (err) {
      res.send({code: 0, msg: '上传失败'})
      return
    }
    if (results.changedRows) {
      let message = 'success'
      req.file && (message = '/static/img/avter/' + filename)
      res.send({code: 1, msg: message})
    } else {
      res.send({code: 0, msg: '上传失败'})
    }
  })
}
// 上传头像图片名称
function random () {
  var collection = 'aBcDeFgHiGkLMnOpQrStUvWxYz'.split('')
  var letter = collection[Math.floor(Math.random() * 26)]
  return letter
}
// 更新入录头像信息
app.post('/update', avter.single('file'), function (req, res) {
  res.header('Content-Type', 'multipart/form-data;charset=utf-8')
  if (req.file) {
    let oldPath = path.join(__dirname, req.file.path)
    let filename = random() + random() + random() + random() + req.file.originalname.substring(req.file.originalname.indexOf('.'))
    let newPath = path.join(__dirname, '../static/img/avter/' + filename)
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
        res.send({code: 0, msg: '上传失败'})
        return
      }
      query(req, filename, res)
    })
  } else {
    query(req, '', res)
  }
})
// 抽奖广告信息查询
app.get('/award/select', function (req, res) {
  connection.query(`SELECT * FROM award ORDER BY time DESC`, function (err, results) {
    if (err) { return }
    if (results.length) {
      res.send({code: 1, msg: results})
    } else {
      res.send({code: 0, msg: '失败'})
    }
  })
})
// socket服务端口监听 抽奖监听
var wss = new WebSocketServer({port: 8800})
let w = {}
// socket服务连接
wss.on('connection', function (ws) {
  w[ws._ultron.id] = ws
  ws.on('message', function (message) {
    console.log('收到消息', message)
    // console.log(ws._ultron.id)//连接id
    session[message] = ws._ultron.id
    ws.send('已经连接')
  })
  ws.on('error', function (err) {
    console.log(err)
  })
  w[ws._finalize.__ultron].on('close', function () {
    // console.log(ws._finalize.__ultron)//结束id
    delete w[ws._finalize.__ultron]
    for (var item in session) {
      session[item] === ws._finalize.__ultron && (delete session[item])
    }
    console.log('断开连接')
  })
})
// 扫码关注抽奖接口
app.get('/socket', function (req, res) {
  let parmars = req.query.uname
  console.log(parmars)
  if (parmars === undefined || w[session[parmars]] === undefined) {
    res.send('请登录扫码领奖')
    return
  }
  let random = Math.floor(Math.random() * 21 + 1)
  let sql = `SELECT c.*,cp.path FROM commodity c,comm_pic cp WHERE c.cid=${random} AND c.cid=cp.cid`
  connection.query(sql, function (err, results) {
    if (err) { return }
    let comm = results[0]
    if (results.length) {
      connection.query(`SELECT * FROM ju_user WHERE uname='${parmars}'`, function (err, result) {
        if (err) { return }
        let user = result[0]
        if (result.length) {
          let shop = `INSERT INTO shop VALUES(NULL,'${comm.cname}',
          ${comm.price},${comm.discount},1,'${comm.path}',
          '${comm.commitment}','抽奖获得','${user.address}',now(),${comm.cid},${user.uid})`
          connection.query(shop, function (err, results) {
            if (err) return
            if (results.insertId >= 0) {
              res.send('请到用户中心查收大奖')
            }
          })
          let award = `INSERT INTO award VALUES( NULL,'${comm.price}',now(),'${user.uname}','${comm.cname}',${comm.cid})`
          connection.query(award, function (err, result) {
            console.log(err)
          })
          w[session[parmars]].send(JSON.stringify(results))
          w[session[parmars]].close()
          delete session[parmars]
        }
      })
    }
  })
})
// 账户退出登录
app.post('/logout', function (req, res) {
  logout(req)
  res.send('已经退出')
})
function logout (req) {
  if (session[req.body.uname] !== undefined) {
    w[session[req.body.uname]].close()
    delete session[req.body.uname]
  }
  console.log('退出:' + req.body.uname)
  delete session['user:' + req.body.uname]
  delete session['rest:' + req.body.uname]
  session['monitor:' + req.body.uname] === 1 && (session['monitor:' + req.body.uname].close())
  delete session['monitor:' + req.body.uname]
}
// 检查账户是否符合抽奖资格
app.post('/check/award', function (req, res) {
  connection.query(`SELECT uname FROM award WHERE uname='${req.body.uname}'`, function (err, result) {
    if (err) {
      res.send({code: 0, msg: '失败'})
      return
    }
    if (result.length > 0) {
      res.send({code: 0})
    } else {
      res.send({code: 1})
    }
  })
})
// 获取购物车数据
app.post('/shop/select', function (req, res) {
  connection.query(`SELECT * FROM shop WHERE uid=${req.body.uid} ORDER BY time DESC`, function (err, results) {
    if (err) {
      res.send({code: 0, msg: '网路不稳定'})
      return
    }
    if (results.length > 0) {
      res.send({code: 1, msg: results})
    } else {
      res.send({code: 0, msg: '数据为空'})
    }
  })
})
// 修改购物车数据
app.post('/shop/update', function (req, res) {
  let keys = Object.keys(req.body)
  connection.query(`UPDATE shop SET ${keys[0]}='${req.body[keys[0]]}' WHERE sid=${req.body.sid}`, function (err, result) {
    if (err) {
      res.send({code: 0, msg: '网络不佳'})
      return
    }
    if (result.changedRows) {
      res.send({code: 1, msg: '更新成功'})
    } else {
      res.send({code: 0, msg: '网络不佳'})
    }
  })
})
// 删除购物车记录
app.post('/shop/del', function (req, res) {
  let dels = [].concat(req.body['id[]'])
  let str = dels.toString()
  connection.query(`DELETE FROM shop WHERE sid IN (${str})`, function (err, result) {
    if (err) {
      res.send({code: 0, msg: '网络不佳'})
      return
    }
    if (result.affectedRows > 0) {
      res.send({code: 1, msg: result.affectedRows})
    } else {
      res.send({code: 0, msg: '网络不佳'})
    }
  })
})
// 服务器监听端口信息
var server = app.listen(8181, function () {
  console.log(server.address().port)
})
