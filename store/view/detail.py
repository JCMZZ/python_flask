
from flask import Blueprint, render_template, redirect, Response, request
from contextlib import closing
import requests

detail = Blueprint('detail',__name__)

@detail.route('/detail')
def detail_detail():
    # return render_template('angular.html')
    r = requests.get('http://127.0.0.1:4000/heroes')
    print(r.text)
    return r.text