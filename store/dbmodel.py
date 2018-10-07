# _*_ coding:UTF-8 _*_

# index api 
from .model import index
import datetime
from . import db

# 创建 ju_user 用户表
class JuUser(db.Model):
  __tablename__ = 'ju_user'
  uid = db.Column(db.Integer, primary_key=True)
  uname = db.Column(db.String(6), unique=True)
  pwd = db.Column(db.String(6))
  email = db.Column(db.String(32))
  phone = db.Column(db.String(24))
  address = db.Column(db.String(64))
  avter = db.Column(db.String(64))
  time = db.Column(db.DateTime,default=datetime.datetime.now)
  is_del = db.Column(db.String(1),default='1')
  def __init__(self, uname, pwd, email, phone, address, avter, is_del):
        self.uname = uname
        self.pwd = pwd
        self.email = email
        self.phone = phone
        self.address = address
        self.avter = avter
        self.is_del = is_del
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
  def __init__(self, cname, price, count, discount, commitment, specification):
      self.cname = cname
      self.price = price
      self.count = count
      self.discount = discount
      self.commitment = commitment
      self.specification = specification
  def __repr__(self):
      return '<Commodity %r>' % self.cname
# 创建商品图片表
class Commpic(db.Model):
  __tablename__ = 'comm_pic'
  pid = db.Column(db.Integer, primary_key=True)
  path = db.Column(db.String(64))
  cid = db.Column(db.Integer, db.ForeignKey('commodity.cid'))
  def __init__(self, path, cid):
      self.path = path
      self.cid = cid
  def __repr__(self):
      return '<Commpic %r>' % self.path
# 创建详情图片表
class Mirror(db.Model):
  __tablename__ = 'mirror'
  mid = db.Column(db.Integer, primary_key=True)
  mpath = db.Column(db.String(64))
  cid = db.Column(db.Integer, db.ForeignKey('commodity.cid'))
  def __init__(self, mpath, cid):
      self.mpath = mpath
      self.cid = cid
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
  def __init__(self, sname, sprice, discount, count, spic, commitment, remark, address, cid, uid):
      self.sname = sname
      self.sprice = sprice
      self.discount = discount
      self.count = count
      self.spic = spic
      self.commitment = commitment
      self.remark = remark
      self.address = address
      self.cid = cid
      self.uid = uid
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
  def __init__(self, price, uname, cname, cid):
      self.price = price
      self.uname = uname
      self.cname = cname
      self.cid = cid
  def __repr__(self):
      return '<Award %r>' % self.uname
      
# db = index.index(db)
# 如果表存在就删除     
# db.drop_all()
# 创建表
# db.create_all()