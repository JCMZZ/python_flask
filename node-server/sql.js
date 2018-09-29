'use strict'
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ju',
  port: 3306
})
function createdatabase () {
  console.log('调用函数')
  // var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306 })
    // 删除数据库 ju
  var dropDatabase = 'DROP DATABASE IF EXISTS ju'
  connection.query(dropDatabase, function (err, result) {
    console.log(err)
  })
    // 创建数据库 ju
  var createDatabase = 'CREATE DATABASE ju'
  connection.query(createDatabase, function (err, result) {
    console.log(err)
  })
}
function createtable () {
  console.log('调用函数')
    // 更改数据库字符集
  var charset = "ALTER DATABASE CHARACTER SET 'UTF8'"
  connection.query(charset, function (err, result) {
    console.log(err)
  })
// 创建 ju_user 用户表
  var createTable = `CREATE TABLE ju_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(6) NOT NULL DEFAULT '',
    pwd VARCHAR(6) NOT NULL DEFAULT '',
    email VARCHAR(32) NOT NULL DEFAULT '',
    phone VARCHAR(24) NOT NULL DEFAULT '',
    address VARCHAR(64) NOT NULL DEFAULT '',
    avter VARCHAR(64) NOT NULL DEFAULT '',
    time DATETIME  NOT NULL DEFAULT now(),
    is_del char(1) NOT NULL  DEFAULT '1'
)`
  connection.query(createTable, function (err, result) {
    console.log(err)
  })
// ju_user 添加一条数据
  var insert = `INSERT INTO ju_user VALUES(
    null,'jcm','123456','jcm@qq.com','15109893457','朝阳',now(),'1'
  )`
  connection.query(insert, function (err, result) {
    console.log(err)
  })
}
module.exports = {
  createdatabase,
  createtable,
  connection
}