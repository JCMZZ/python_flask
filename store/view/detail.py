
from flask import Blueprint, render_template, redirect


detail = Blueprint('detail',__name__)

@detail.route('/detail')
def detail_detail():
    return render_template('angular.html')