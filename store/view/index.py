
from flask import Blueprint, render_template, redirect, jsonify

index = Blueprint('index',__name__)

@index.route('/index')
def index_index():
    return render_template('index.html')

@index.route('/list')
def index_list():
    return '百度'

@index.route('/post', methods=['POST'])
def index_post():
    return jsonify(a=1,result=[1,2,3],c="hello")