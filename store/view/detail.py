
from flask import Blueprint, render_template, redirect, Response, request
from contextlib import closing

detail = Blueprint('detail',__name__)

@detail.route('/detail/<regex(".*"):url>')
def detail_detail(url):
    return render_template('angular.html')