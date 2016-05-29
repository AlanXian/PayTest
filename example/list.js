// 配置 API Key 和 App ID
// 从 Ping++ 管理平台应用信息里获取
var API_KEY = "sk_test_fLijnLbbfrTSzT0af9KevXfT" // 这里填入你的 Test/Live Key
var pingpp = require('pingpp')(API_KEY);

pingpp.charges.list({ limit: 10 }, function(err, charges) {
  // YOUR CODE
});
