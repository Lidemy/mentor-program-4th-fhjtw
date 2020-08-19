/* eslint no-unused-vars: 0 */
const request = require('request');

const args = process.argv; // 讀入參數
/* node hw2.js list  印出前二十本書的 id 與書名
node hw2.js read 1  輸出 id 為 1 的書籍
node hw2.js delete 1  刪除 id 為 1 的書籍
node hw2.js create "I love coding"  新增一本名為 I love coding 的書
node hw2.js update 1 "new name"  更新 id 為 1 的書名為 new name */
const action = args[2]; // 動作
const params = args[3]; // 參數
const baseURL = 'https://lidemy-book-store.herokuapp.com'; // api 的固定開頭

function listBooks() {
  request(`${baseURL}/books?_limit=20`, (error, response, body) => {
    if (error) {
      return console.log('抓取失敗', error);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
    return undefined;
  });
}

function readBooks(id) {
  request(`${baseURL}/books/${id}`, (error, response, body) => {
    if (error) {
      return console.log('抓取失敗', error);
    }
    const data = JSON.parse(body);
    return console.log(`${data.name}`);
  });
}

function deleteBooks(id) {
  request.delete(`${baseURL}/books/${id}`, (error, response, body) => {
    if (error) {
      return console.log('刪除失敗', error);
    }
    return console.log('刪除成功!');
  });
}

function createBooks(bookName) {
  request.post({
    url: `${baseURL}/books`,
    form: {
      name: bookName,
    },
  }, (error, response) => {
    if (error) {
      return console.log('新增失敗', error);
    }
    return console.log('新增成功!');
  });
}

function updateBooks(id, bookName) {
  request.patch({
    url: `${baseURL}/books/${id}`,
    form: {
      name: bookName,
    },
  }, (error, response) => {
    if (error) {
      return console.log('修改失敗', error);
    }
    return console.log('修改成功!');
  });
}
switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks(params);
    break;
  case 'delete':
    deleteBooks(params);
    break;
  case 'create':
    createBooks(params, args[4]);
    break;
  case 'update':
    updateBooks(params, args[4]);
    break;
  default:
    console.log('可用指令：list(列表), read(讀取),delete(新建), create(新建), update(修改)');
}
