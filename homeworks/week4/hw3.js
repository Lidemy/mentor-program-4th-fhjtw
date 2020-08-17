const request = require('request'); // 引入 request 的模組
// request(input網址,init函式)
const baseURL = 'https://restcountries.eu/rest/v2';
const arg = process.argv;
const name = arg[2];
/* process.argv 在 command line讀入命令時，
  process.argv[0]=node;
  process.argv[1]=檔案名稱;
  process.argv[2]=第一個傳入參數，以此類推。 */

if (!name) { // 如果沒有傳入國家名稱，值為空
  console.log('請輸入國家名稱');
}
request(`${baseURL}/name/${name}`,
  (error, response, body) => {
    if (error) {
      return console.log('抓取失敗', error);
    }
    const data = JSON.parse(body);
    if (data.status === 404) {
      return console.log('找不到國家資訊');
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log('============');
      console.log(`國家：${data[i].name}`);
      console.log(`首都：${data[i].capital}`);
      console.log(`貨幣：${data[i].currencies[0].code}`);
      console.log(`國碼：${data[i].callingCodes[0]}`);
    }
    return undefined;
  });
