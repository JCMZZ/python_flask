
from flask import Blueprint, jsonify

index = Blueprint('index',__name__)

@index.route('/post', methods=['POST'])
def banner():
    return jsonify(a=1,result=[1,2,3],c="hello")