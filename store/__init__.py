# _*_ conding:UTF-8 _*_
import os

from flask import Flask

# 引入数据库表创建方法
from . import dbcreate

# 引入蓝图
from .view import index
from .view import product
from .view import company
from .view import detail

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        # DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    # try:
    #     os.makedirs(app.instance_path)
    # except OSError:
    #     pass
    
    # create data table
    dbcreate.vmcreate(app)
    
    app.register_blueprint(index.index,url_prefix='/index')
    app.register_blueprint(product.product,url_prefix='/product')
    app.register_blueprint(company.company,url_prefix='/company')
    app.register_blueprint(detail.detail,url_prefix='/detail')

    return app

if __name__ == '__main__':
   app.run(debug=True)