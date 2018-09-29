# _*_ coding:UTF-8 _*_
from .. import dbmodel
def init(db):
  juuser = dbmodel.vmdb(db).juuser(None, '蒋春明', '666666', '127@qq.com', '13426238781', '通州区张家湾镇', '/static/img/vue/avter/avter.jpg')
  db.add(juuser)