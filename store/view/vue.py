
from flask import Blueprint, render_template, redirect, jsonify

vue = Blueprint('vue',__name__)

@vue.route('/vue/<regex(".*"):url>')
def vue_vue(url):
    return render_template('vue.html')

@vue.route('/list')
def vue_list():
    return '百度'

@vue.route('/post', methods=['POST'])
def vue_post():
    return jsonify(a=1,result=[1,2,3],c="hello")