// 配置 API Key 和 App ID
// 从 Ping++ 管理平台应用信息里获取
var API_KEY = "sk_test_fLijnLbbfrTSzT0af9KevXfT" // 这里填入你的 Test/Live Key
var APP_ID = "app_iDO0W9W98ez9OGqL" // 这里填入你的应用 ID
var pingpp = require('pingpp')(API_KEY);

/* 企业付款 */
pingpp.transfers.create({
  order_no:    new Date().getTime().toString(),
  app:         { id: APP_ID },
  channel:     "wx_pub",
  amount:      100,
  currency:    "cny",
  type:        "b2c",
  recipient:   "Openid",
  description: "Your Description"
}, function(err, transfer) {
  // YOUR CODE
});

/* 查询 */
pingpp.transfers.retrieve(
  "tr_Hm5uDSH8qP8OvbrT0GfDOerP",
  function(err, transfer) {
    // YOUR CODE
  }
);

/* 查询列表 */
pingpp.transfers.list(
  { limit: 5 },
  function(err, transfers) {
    // YOUR CODE
  }
);