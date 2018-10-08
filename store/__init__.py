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
    global db
    db = dbcreate.vmcreate(app)
    from . import dbmodel
    from .model import model_init
    # import blueprint view
    from .view import vue
    from .view import angularhash
    from .view import angularhistory
    from .view import company
    # regex URL
    app.url_map.converters['regex'] = RegexConverter
    # register blueprint view
    app.register_blueprint(vue.vue,url_prefix='/vue')
    app.register_blueprint(angularhash.angularhash,url_prefix='/angularhash')
    app.register_blueprint(angularhistory.angularhistory,url_prefix='/angularhistory')
    app.register_blueprint(company.company,url_prefix='/company')
    # import blueprint api
    from .api import vue
    # register blueprint api
    app.register_blueprint(vue.index)
    # redirect ico
    @app.route('/favicon.ico')
    def favicon():
        return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
    # not Found redirect
    @app.route('/<regex(".*"):url>')
    def user(url):
        return redirect(url_for('vue.vue_vue',url=''))
    
    return app

if __name__ == '__main__':
   app.run(debug=True)
   