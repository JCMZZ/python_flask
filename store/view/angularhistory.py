
from flask import Blueprint, render_template, redirect, Response, request
from contextlib import closing

angularhistory = Blueprint('angularhistory',__name__)

@angularhistory.route('/angularhistory/<regex(".*"):url>')
def angularhistory_angularhistory(url):
    return render_template('/angular_history.html')