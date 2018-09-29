from flask_sqlalchemy import SQLAlchemy

from . import dbmodel
# from .model import model_init
def vmcreate(app):
    app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:666666@localhost:3306/jiaju'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
    
    db = SQLAlchemy(app) #实例化
    # 创建数据表
    dbmodel.vmdb(db)
    # init数据
    # model_init.init(db)