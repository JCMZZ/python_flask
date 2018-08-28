
#! _*_ coding:UTF-8 _*_
from flask import Blueprint, render_template, redirect, Response, request
import requests

company = Blueprint('company',__name__)

@company.route('/company/<regex(".*"):url>')
def company_company(url):
    r = requests.get('http://127.0.0.1:8089/'+url)
    r.encoding = 'utf-8'
    print(r.text)
    return r.text
