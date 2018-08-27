# _*_ conding:UTF-8 _*_
import os

from flask import Flask, send_from_directory, redirect, url_for
from werkzeug.routing import  BaseConverter

# import database create table
from . import dbcreate

class RegexConverter(BaseConverter):
    def __init__(self,url_map,*items):
        super(RegexConverter,self).__init__(url_map)
        self.regex=items[0]

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
    # import blueprint
    from .view import index
    from .view import product
    from .view import company
    from .view import detail
    # regex URL
    app.url_map.converters['regex'] = RegexConverter
    # register blueprint
    app.register_blueprint(index.index,url_prefix='/index')
    app.register_blueprint(product.product,url_prefix='/product')
    app.register_blueprint(company.company,url_prefix='/company')
    app.register_blueprint(detail.detail,url_prefix='/detail')
    @app.route('/favicon.ico')
    def favicon():
        return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
    
    @app.route('/<regex(".*"):url>')
    def user(url):
        print(url)
        return redirect(url_for('detail.detail_detail',url='/'))

    return app

if __name__ == '__main__':
   app.run(debug=True)
   