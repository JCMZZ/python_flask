from flask_sqlalchemy import SQLAlchemy

def vmcreate(app):
    app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:666666@localhost:3306/jiaju'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
    
    db = SQLAlchemy(app) #实例化
    
    return db