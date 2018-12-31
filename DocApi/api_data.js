define({ "api": [  {    "type": "get",    "url": "/addons/pay/api/notif",    "title": "安卓检测支付通知",    "name": "__App__",    "group": "android",    "version": "1.1.1",    "description": "<p>注意，此接口是安卓检测支付通知使用，但是里面有支付成功后的通知，如有支付通知有问题请再次查验!</p>",    "filename": "api/addons/pay.js",    "groupTitle": "android"  },  {    "type": "get",    "url": "/addons/pay/api/setting",    "title": "验证客户端",    "name": "_____",    "group": "android",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "apiurl",            "description": "<p>客户端根据收款地址自动处理 格式=&gt; http(s)://localhost/addons/pay/ (注意：后面需要&quot;/&quot;结尾)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "sign",            "description": "<p>签名密匙，config.js里面的 secretkey 值</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>无</p>"          }        ]      }    },    "filename": "api/addons/pay.js",    "groupTitle": "android"  },  {    "type": "post",    "url": "/api/order",    "title": "创建支付订单",    "name": "______",    "group": "order",    "version": "1.0.0",    "description": "<p>请勿前端直接调用该接口，请妥善保存secretkey!!!</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "order_id",            "description": "<p>外部订单id，请确保该参数唯一性</p>"          },          {            "group": "Parameter",            "type": "Float",            "optional": false,            "field": "order_price",            "description": "<p>外部订单金额，保留两位小数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pay_format",            "description": "<p>返回的支付格式 \bjson 和 html 默认 json 注（html返回的是支付url页面，请拼接上域名后返回给前台，列如返回 /#/pay/111， 请加上本系统域名//#/pay/111进行访问）</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pay_type",            "description": "<p>支付方式 wechat 和 alipay 默认 wechat</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "extension",            "description": "<p>扩展信息，支付成功后原样返回</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "redirect_url",            "description": "<p>支付成功服务器回调地址包含 http(s)://，当系统检测到订单已支付会向这个url地址推送”一次“Get请求！包含三个参数order_id 、extension 和 sgin 这里的sgin默认加密方式为 md5(md5(订单号的前三位+secretkey)) pay.js 87行，请根据自己需要进行修改；</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "sign",            "description": "<p>签名，签名加密方法 md5(md5(order_price + pay_type) + secretkey)</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>0成功 -1失败</p>"          },          {            "group": "200",            "type": "Object",            "optional": false,            "field": "data",            "description": ""          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>提示信息</p>"          }        ]      }    },    "filename": "api/orders/index.js",    "groupTitle": "order"  }] });
