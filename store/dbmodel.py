# _*_ coding:UTF-8 _*_

# index api 
from .model import index
import datetime
from . import db
# 创建 ju_user 用户表
class JuUser(db.Model):
  __tablename__ = 'ju_user'
  uid = db.Column(db.Integer, primary_key=True)
  uname = db.Column(db.String(6))
  pwd = db.Column(db.String(6))
  email = db.Column(db.String(32))
  phone = db.Column(db.String(24))
  address = db.Column(db.String(64))
  avter = db.Column(db.String(64))
  time = db.Column(db.DateTime,default=datetime.datetime.now)
  is_del = db.Column(db.String(1),default='1')
  # users = db.relationship('User', backref='role', lazy='dynamic')
  def __repr__(self):
      return '<Commodity %r>' % self.cname
# 创建商品表
class Commodity(db.Model):
  __tablename__ = 'commodity'
  cid = db.Column(db.Integer, primary_key=True)
  cname = db.Column(db.String(24))
  price = db.Column(db.DECIMAL(8,2))
  count = db.Column(db.Integer)
  discount = db.Column(db.Integer)
  commitment = db.Column(db.String(64))
  specification = db.Column(db.String(64))
  # users = db.relationship('User', backref='role', lazy='dynamic')
  def __repr__(self):
      return '<Commodity %r>' % self.cname
# 创建商品图片表
class Commpic(db.Model):
  __tablename__ = 'comm_pic'
  pid = db.Column(db.Integer, primary_key=True)
  path = db.Column(db.String(64))
  cid = db.Column(db.Integer, db.ForeignKey('commodity.cid'))
  # userInfo = db.relationship('UserInfo', backref='role', lazy='dynamic', uselist=False)
  def __repr__(self):
      return '<Commpic %r>' % self.path
# 创建详情图片表
class Mirror(db.Model):
  __tablename__ = 'mirror'
  mid = db.Column(db.Integer, primary_key=True)
  mpath = db.Column(db.String(64))
  cid = db.Column(db.Integer, db.ForeignKey('commodity.cid'))
  def __repr__(self):
      return '<Mirror %r>' % self.mpath
# 创建购物车表
class Shop(db.Model):
  __tablename__ = 'shop'
  sid = db.Column(db.Integer, primary_key=True)
  sname = db.Column(db.String(24))
  sprice = db.Column(db.DECIMAL(10,2))
  discount = db.Column(db.Integer)
  count = db.Column(db.Integer)
  spic = db.Column(db.String(64))
  commitment = db.Column(db.String(64))
  remark = db.Column(db.String(64))
  address = db.Column(db.String(64))
  time = db.Column(db.DateTime,default=datetime.datetime.now)
  cid = db.Column(db.Integer, db.ForeignKey('commodity.cid'))
  uid = db.Column(db.Integer, db.ForeignKey('ju_user.uid'))
  def __repr__(self):
      return '<Shop %r>' % self.sname

# 抽奖表
class Award(db.Model):
  __tablename__ = 'Award'
  aid = db.Column(db.Integer, primary_key=True)
  price = db.Column(db.DECIMAL(8,2))
  time = db.Column(db.DateTime,default=datetime.datetime.now)
  uname = db.Column(db.String(6))
  cname = db.Column(db.String(24))
  cid = db.Column(db.Integer, db.ForeignKey('commodity.cid'))
  def __repr__(self):
      return '<Award %r>' % self.uname
      
# db = index.index(db)
# 如果表存在就删除     
db.drop_all()
# 创建表
db.create_all()