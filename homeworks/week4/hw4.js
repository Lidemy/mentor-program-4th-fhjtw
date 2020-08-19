const request = require('request'); // 引入 request 套件

const clientID = 'vhfprv31enxg1t8s33yt4mtdekieyv'; // 我的 Client-ID
const apiURL = 'https://api.twitch.tv/kraken'; // Twitch API 固定開頭

request({
  method: 'GET', // 送出抓取資料(GET) 的需求
  url: `${apiURL}/games/top?limit=10`,
  /* 對應的 API 位置，Games Reference: Get Top Games
     https://dev.twitch.tv/docs/v5/reference/games
     預設會抓取前 10 名，上限為 100 名。參數：/?limit={數字} */
  /* README.md hw4 說明：
     務必記得要在 request header 中帶上 ClientID 跟另一個參數 Accept，
     值是：`application/vnd.twitchtv.v5+json`。 */
  headers: {
    'Client-ID': clientID,
    /* 自訂 HTTP Headers 標籤寫法示範文件：
      https://github.com/request/request#custom-http-headers */
    Accept: 'application/vnd.twitchtv.v5+json',
    /* Informs the server about the types of data that can be sent back.
    It is MIME-type. */
  },
}, (error, response, body) => {
  if (error) {
    return console.log('資料抓取失敗', error);
  }
  let data = JSON.parse(body);
  data = data.top;
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].viewers} ${data[i].game.name}`);
  }
  return undefined;
});
