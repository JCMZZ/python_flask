from flask_sqlalchemy import SQLAlchemy

from . import dbmodel

def vmcreate(app):
    app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:666666@localhost:3306/test'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
    
    db = SQLAlchemy(app) #实例化

    dbmodel.vmdb(db)
