/* eslint consistent-return: 0 */
const request = require('request'); // 引入 request 套件

const clientID = 'vhfprv31enxg1t8s33yt4mtdekieyv'; // 我的 Client-ID
const apiURL = 'https://api.twitch.tv/kraken'; // Twitch API 固定開頭

const arg = process.argv;
const gameName = arg[2];

const pageLimit = 100; // 每頁可列出的資料筆數上限
const listNum = 200; // 所需要的資料筆數

for (let round = 0; round < listNum / pageLimit; round += 1) {
  request({
    method: 'GET', // 送出抓取資料(GET) 的需求
    url: `${apiURL}/streams/?game=${gameName}&limit=${pageLimit}&offset=${pageLimit * round}`,
    /* 對應的 API 位置，Games Reference: Get Top Games
        https://dev.twitch.tv/docs/v5/reference/streams#get-live-streams */
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
    data = data.streams;
    for (let i = 0; i < data.length; i += 1) {
      console.log('=========');
      console.log(`第 ${(i + 1) + (pageLimit * round)} 名`);
      console.log(`實況名稱：${data[i].channel.status}`);
      console.log(`收看人數：${data[i].viewers}`);
    }
  });
}
