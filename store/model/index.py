# _*_ coding:UTF-8 _*_

def index(db):
  # 轮播图
  class Banner(db.Model):
    __tablename__ = 'banner_pic'
    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(64), unique=True)
    alt = db.Column(db.String(64))

    def __repr__(self):
        return '<banner_pic %r>' % self.path

  return db