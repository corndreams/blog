import Mock, { Random } from "mockjs";

export const overview = Mock.mock({
  "code": 200,//200正常、300未通过token验证、500错误、400功能拒绝
  "data": {
    "file": Random.float(60,100,1,2)+'M',
    "atricle|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
    "project|0-50": 0,
    "resource|0-50": 0,
  }
})