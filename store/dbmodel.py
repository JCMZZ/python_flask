# _*_ coding:UTF-8 _*_

# index api 
from .model import index

def vmdb(db):
  # 角色
  class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role', lazy='dynamic')

    def __repr__(self):
        return '<Role %r>' % self.name
  # 用户
  class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    userInfo = db.relationship('UserInfo', backref='role', lazy='dynamic', uselist=False)

    def __repr__(self):
        return '<User %r>' % self.username
  # 用户信息
  class UserInfo(db.Model):
    __tablename__ = 'userInfo'
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer, index=True)
    email = db.Column(db.String(36), index=True)
    phone = db.Column(db.String(18), index=True)
    gender = db.Column(db.String(4), index=True)
    qq = db.Column(db.Integer, index=True)
    create_time = db.Column(db.DateTime)
    user_info_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __repr__(self):
        return '<UserInfo %r>' % self.email
  db = index.index(db)
  # 如果表存在就删除      
  db.drop_all()
  # 创建表
  db.create_all()