# _*_ coding:UTF-8 _*_
from .. import dbmodel
from .. import db

commodity = (('凯撒豪庭',64400.00,255,9,'提供售后服务','长3880*宽1940*高840mm'),
  ('良品LIFE',60500.00,351,8,'提供售后服务','长3880*宽1940*高840mm'),
  ('蒂美悦',110004.00,25,8.5,'提供售后服务','长3880*宽1940*高840mm'),
  ('梵达斯',803300.00,25,8.5,'提供售后服务','长3880*宽1940*高840mm'),
  ('蓝驹家居',50560.00,2,7,'提供售后服务','长3880*宽1940*高840mm'),
  ('白金宫殿',603320.00,425,5,'提供售后服务','长3880*宽1940*高840mm'),
  ('北欧悠歌',60079.00,55,8,'提供售后服务','长3880*宽1940*高840mm'),
  ('韩菲尔',60120.00,5,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('纳德威',69000.00,30,8,'提供售后服务','长3880*宽1940*高840mm'),
  ('古居',76000.00,250,9,'提供售后服务','长3880*宽1940*高840mm'),
  ('木木原',49000.00,223,7,'提供售后服务','长3880*宽1940*高840mm'),
  ('达美风情',167999.00,195,5,'提供售后服务','长3880*宽1940*高840mm'),
  ('苏美尔',18999.00,233,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('卡富亚',13763.00,22,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('穆娅',14444.00,254,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('梦露风情',10860.00,257,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('颐和缘',13330.00,313,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('法兰西玫瑰',9060.00,111,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('威尔帝诺',17060.00,43,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('广岛之恋',7060.00,61,6,'提供售后服务','长3880*宽1940*高840mm'),
  ('名爵士',10860.00,42,6,'提供售后服务','长3880*宽1940*高840mm'))
# for item in commodity:
#   cname, price, count, discount, commitment, specification = item
#   commodityInsert = dbmodel.Commodity(cname, price, count, discount, commitment, specification)
#   db.session.add(commodityInsert)
#   db.session.commit()

mirror = (('/static/img/vue/mirror/1.jpg',1),
  ('/static/img/vue/mirror/2.jpg',2),
  ('/static/img/vue/mirror/3.jpg',3),
  ('/static/img/vue/mirror/4.jpg',4),
  ('/static/img/vue/mirror/5.jpg',5),
  ('/static/img/vue/mirror/6.jpg',6),
  ('/static/img/vue/mirror/7.jpg',7),
  ('/static/img/vue/mirror/8.jpg',8),
  ('/static/img/vue/mirror/9.jpg',9),
  ('/static/img/vue/mirror/10.jpg',10),
  ('/static/img/vue/mirror/11.jpg',11),
  ('/static/img/vue/mirror/12.jpg',12),
  ('/static/img/vue/mirror/13.jpg',13),
  ('/static/img/vue/mirror/14.jpg',14),
  ('/static/img/vue/mirror/15.jpg',15),
  ('/static/img/vue/mirror/16.jpg',16),
  ('/static/img/vue/mirror/17.jpg',17),
  ('/static/img/vue/mirror/18.jpg',18))
# for item in mirror:
#   mpath, cid = item
#   mirrorInsert = dbmodel.Mirror(mpath, cid)
#   db.session.add(mirrorInsert)
#   db.session.commit()

commpic = (('/static/img/vue/new/1.jpg',1),
  ('/static/img/vue/new/2.jpg',2),
  ('/static/img/vue/new/3.jpg',3),
  ('/static/img/vue/new/4.jpg',4),
  ('/static/img/vue/new/5.jpg',5),
  ('/static/img/vue/new/6.jpg',6),
  ('/static/img/vue/hot/1.jpg',7),
  ('/static/img/vue/hot/2.jpg',8),
  ('/static/img/vue/hot/3.jpg',9),
  ('/static/img/vue/hot/4.jpg',10),
  ('/static/img/vue/hot/5.jpg',11),
  ('/static/img/vue/hot/6.jpg',12),
  ('/static/img/vue/best/1.jpg',13),
  ('/static/img/vue/best/2.jpg',14),
  ('/static/img/vue/best/3.jpg',15),
  ('/static/img/vue/best/4.jpg',16),
  ('/static/img/vue/best/5.jpg',17),
  ('/static/img/vue/best/6.jpg',18))
# for item in commpic:
#   path, cid = item
#   commpicInsert = dbmodel.Commpic(path, cid)
#   db.session.add(commpicInsert)
#   db.session.commit()
