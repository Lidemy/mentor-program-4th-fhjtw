const request = require('request');

const baseURL = 'https://lidemy-book-store.herokuapp.com'; // api 的固定開頭

request(`${baseURL}/books?_limit=10`, (error, response, body) => {
  if (error) {
    return console.log('抓取失敗', error);
  }
  // 參數範例：/books?_limit=5 為限制回傳數量為 5
  const data = JSON.parse(body); // 把 json 轉 object
  /* 格式為
    { id: 1, name: '克雷的橋' }, = data[0]
    { id: 2, name: '當我想你時，全世界都救不了我' }, =data[1]
    { id: 3, name: '我殺的人與殺我的人' }, = data[2]
    { id: 4, name: '念念時光真味' }, =data[3] */
  for (let i = 0; i < data.length; i += 1) { // data.length 等於 書本資訊物件的總數量，把它當作陣列來看
    console.log(`${data[i].id} ${data[i].name}`); // 印出第幾本書的 id 和 書名
  }
  return undefined;
});
