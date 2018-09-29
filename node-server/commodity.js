'use strict'
// 创建商品表
function commodity (connection) {
  var createComm = `CREATE TABLE commodity(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    cname VARCHAR(24) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    count SMALLINT NOT NULL,
    discount TINYINT,
    commitment VARCHAR(64),
    specification VARCHAR(64)
  )`
  connection.query(createComm, function (err, result) {
    console.log(err)
  })
}
// 向商品表中添加数据
function commodityInsert (connection) {
  var insert = `INSERT INTO commodity VALUES(NULL,'凯撒豪庭',64400.00,255,9,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'良品LIFE',60500.00,351,8,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'蒂美悦',110004.00,25,8.5,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'梵达斯',803300.00,25,8.5,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'蓝驹家居',50560.00,2,7,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'白金宫殿',603320.00,425,5,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'北欧悠歌',60079.00,55,8,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'韩菲尔',60120.00,5,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'纳德威',69000.00,30,8,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'古居',76000.00,250,9,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'木木原',49000.00,223,7,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'达美风情',167999.00,195,5,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'苏美尔',18999.00,233,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'卡富亚',13763.00,22,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'穆娅',14444.00,254,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'梦露风情',10860.00,257,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'颐和缘',13330.00,313,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'法兰西玫瑰',9060.00,111,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'威尔帝诺',17060.00,43,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'广岛之恋',7060.00,61,6,'提供售后服务','长3880*宽1940*高840mm'),
  (NULL,'名爵士',10860.00,42,6,'提供售后服务','长3880*宽1940*高840mm')`
  connection.query(insert, function (err, result) {
    console.log(err)
  })
}
// 创建商品图片表
function picture (connection) {
  var create = `CREATE TABLE comm_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    path VARCHAR(64),
    cid INT,
    FOREIGN KEY(cid)  REFERENCES commodity(cid)  
  )`
  connection.query(create, function (err, result) {
    console.log(err)
  })
}
// 向商品图片表中添加数据
function pictureInsert (connection) {
  var insert = `INSERT INTO comm_pic VALUES(NULL,'/static/img/new/1.jpg',1),
  (NULL,'/static/img/new/2.jpg',2),
  (NULL,'/static/img/new/3.jpg',3),
  (NULL,'/static/img/new/4.jpg',4),
  (NULL,'/static/img/new/5.jpg',5),
  (NULL,'/static/img/new/6.jpg',6),
  (NULL,'/static/img/hot/1.jpg',7),
  (NULL,'/static/img/hot/2.jpg',8),
  (NULL,'/static/img/hot/3.jpg',9),
  (NULL,'/static/img/hot/4.jpg',10),
  (NULL,'/static/img/hot/5.jpg',11),
  (NULL,'/static/img/hot/6.jpg',12),
  (NULL,'/static/img/best/1.jpg',13),
  (NULL,'/static/img/best/2.jpg',14),
  (NULL,'/static/img/best/3.jpg',15),
  (NULL,'/static/img/best/4.jpg',16),
  (NULL,'/static/img/best/5.jpg',17),
  (NULL,'/static/img/best/6.jpg',18)`
  connection.query(insert, function (err, result) {
    console.log(err)
  })
}
// 创建详情图片表
function mirror (connection) {
  var create = `CREATE TABLE mirror(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    mpath VARCHAR(64),
    cid INT,
    FOREIGN KEY(cid) REFERENCES commodity(cid)
  )`
  connection.query(create, function (err, result) {
    console.log(err)
  })
}
// 向详情图片表中添加数据
function mirrorInsert (connection) {
  var insert = `INSERT INTO mirror VALUES(NULL,'/static/img/mirror/1.jpg',1),
  (NULL,'/static/img/mirror/2.jpg',2),
  (NULL,'/static/img/mirror/3.jpg',3),
  (NULL,'/static/img/mirror/4.jpg',4),
  (NULL,'/static/img/mirror/5.jpg',5),
  (NULL,'/static/img/mirror/6.jpg',6),
  (NULL,'/static/img/mirror/7.jpg',7),
  (NULL,'/static/img/mirror/8.jpg',8),
  (NULL,'/static/img/mirror/9.jpg',9),
  (NULL,'/static/img/mirror/10.jpg',10),
  (NULL,'/static/img/mirror/11.jpg',11),
  (NULL,'/static/img/mirror/12.jpg',12),
  (NULL,'/static/img/mirror/13.jpg',13),
  (NULL,'/static/img/mirror/14.jpg',14),
  (NULL,'/static/img/mirror/15.jpg',15),
  (NULL,'/static/img/mirror/16.jpg',16),
  (NULL,'/static/img/mirror/17.jpg',17),
  (NULL,'/static/img/mirror/18.jpg',18)`
  connection.query(insert, function (err, result) {
    console.log(err)
  })
}
function car (connection) {
  var create = `CREATE TABLE shop(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    sname VARCHAR(24) NOT NULL,
    sprice DECIMAL(10,2) NOT NULL,
    discount TINYINT NOT NULL,
    count SMALLINT NOT NULL,
    spic VARCHAR(64) NOT NULL,
    commitment VARCHAR(64),
    remark VARCHAR(64) NOT NULL,
    address VARCHAR(64) NOT NULL,
    time DATETIME NOT NULL DEFAULT now(),
    cid INT,
    FOREIGN KEY(cid) REFERENCES commodity(cid),
    uid INT,
    FOREIGN KEY(uid) REFERENCES ju_user(uid)
  )`
  connection.query(create, function (err, result) {
    console.log(err)
  })
}
function award (connection) {
  var create = `CREATE TABLE award(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    price DECIMAL(8,2) NOT NULL,
    time DATETIME NOT NULL DEFAULT now(),
    uname VARCHAR(6) NOT NULL,
    cname VARCHAR(24) NOT NULL,
    cid INT NOT NULL,
    FOREIGN KEY(cid) REFERENCES commodity(cid)
  )`
  connection.query(create, function (err, result) {
    console.log(err)
  })
}
function awardInsert (connection) {
  var insert = `INSERT INTO award VALUES(
    NULL,'123421.99',now(),'kkkk','凯撒豪庭',1
  )`
  connection.query(insert, function (err, result) {
    console.log(err)
  })
}

module.exports = {
  commodity,
  commodityInsert,
  picture,
  pictureInsert,
  mirror,
  mirrorInsert,
  car,
  award,
  awardInsert
}