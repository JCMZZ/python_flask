# _*_ conding:UTF-8 _*_
import  decimal

class MyPackage:
    # 格式化Decimal类型数据
    def fmtDecimal(val):
        if isinstance(val, decimal.Decimal):
            return float(val)
        else:
            return val