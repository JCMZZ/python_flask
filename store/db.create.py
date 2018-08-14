from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:666666@localhost:3306/test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
db = SQLAlchemy(app) #实例化
from db.model import vmdb
vmdb(db)
