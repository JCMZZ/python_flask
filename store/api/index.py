
from flask import Blueprint, jsonify
from .. import dbmodel, db
import  decimal
index = Blueprint('index',__name__)

# 格式化Decimal类型数据
def fmtDecimal(val):
    if isinstance(val, decimal.Decimal):
        return float(val)
    else:
        return val

@index.route('/home/card', methods=['GET'])
def cards():
    Commodity = dbmodel.Commodity
    Commpic = dbmodel.Commpic
    result = db.session.query(Commodity.cid, Commodity.cname, Commodity.price, Commpic.path).filter(Commodity.cid == Commpic.cid).all()
    print(result)
    newResult = []
    for item in result:
        row = {
            "cid": item[0],
            "cname": item[1],
            "price": fmtDecimal(item[2]),
            "path": item[3]
        }
        newResult.append(row)
    return jsonify(newResult)


#     app.get('', function (req, res) {
#   connection.query(`SELECT c.cid,c.cname,c.price,p. FROM commodity c,comm_pic p
#   WHERE c.cid = p.cid`, function (err, result) {
#     if (err) return
#     res.send(result)
#   })
# })