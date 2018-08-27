
from flask import Blueprint, render_template, redirect
angularhash = Blueprint('angularhash',__name__)
@angularhash.route('/angularhash')
def angularhash_angularhash():
    return render_template('angular_hash.html')