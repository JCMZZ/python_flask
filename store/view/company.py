
from flask import Blueprint, render_template, redirect


company = Blueprint('company',__name__)

@company.route('/company')
def company_company():
    return 'COMPANY'