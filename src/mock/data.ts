import Mock, { Random } from "mockjs";

export const overview = Mock.mock({
  "code": 200,//200正常、300未通过token验证、500错误、400功能拒绝
  "data": {
    "file": Random.float(60, 100, 1, 2) + 'M',
    "atricle|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
    "project|0-50": 0,
    "resource|0-50": 0,
  }
})

//访问量
export const visit = Mock.mock({
  "code": 200,//200正常、300未通过token验证、500错误、400功能拒绝
  "data|30": [
    {
      "date": "@datetime('MM-dd')",
      "count|10-100": 12,
    }
  ]
})

export const survey = Mock.mock({
  "code": 200,//200正常、300未通过token验证、500错误、400功能拒绝
  "data": {
    "device": [//不同设备 
      {
        "key": 'mobile',
        "name": '移动端',
        "value|30-120": 50,
      },
      {
        "key": 'pc',
        "name": '电脑端',
        "value|30-120": 50,
      },
    ],
    "website": [
      {
        "key": 'home',
        "name": '首页',
        'value|30-120': 50
      },
      {
        "key": 'project',
        "name": '项目',
        'value|30-120': 50
      },
      {
        "key": 'diary',
        "name": '日记',
        'value|30-120': 50
      },
      {
        "key": 'photo',
        "name": '图片',
        'value|30-120': 50
      },
    ]
  }

})

export const comment = Mock.mock({
  "code": 200,//200正常、300未通过token验证、500错误、400功能拒绝
  "data": {
    "count": 123,
    "list|123": [{
      "id|+1": 0,
      "article": {
        "id|+1": 0,
        "title": '@ctitle(3,8)',
      },
      "user": {
        "id|+1": 0,
        "name": "@ctitle(3,8)",
        "imgurl": "https://blog.corndreams.ink/wp-content/uploads/2025/01/tou.png"
      },
      "comment": "@cparagraph(1,4)",//内容
      "moment": "@datetime()",//时间
      "complaint|0-3": 0,//举报数
    }]
  }
})