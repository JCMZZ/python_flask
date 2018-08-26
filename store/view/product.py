
from flask import Blueprint, render_template, redirect
product = Blueprint('product',__name__)
@product.route('/product')
def product_product():
    return render_template('angular_hash.html')