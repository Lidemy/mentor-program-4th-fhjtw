## 前四週心得與解題心得

### 第一週  
學習了 markdown 語法、 Command Line 和 Git 。  
這些對我來說都是全新的嘗試，  
學習一門新的語言除了文法外還需要學習溝通文化，這一週除了在練習怎麼交作業以外，我覺得更重要的是在幫助自己融入寫程式的文化。  
看到黑黑的畫面莫急莫慌莫害怕，  
Markdown 語法讓我現在在這裡寫這份作業，純文字時看起來還有一點排版更好讀；  
CLI 讓我用鍵盤就能在電腦裡到處移動、新增/刪除檔案；  
Git 讓我可以備份檔案版本方便回溯修改，其實做文字工作也滿需要這種管理法的，偶爾難免會出現之前寫的比較好卻復原不到那一版的慘痛經驗。  
  
這一週的內容很需要大量頻繁的練習，我深知自己練習不足， 
交作業時還是要常常搜尋「markdown 語法」、自己寫的 Git 交作業流程筆記，  
不然就會出現沒切回 master 就把 huli 的更新 pull 下來混在一起的慘況ヽ(；▽；)ノ  

### 第二週
第一次學寫 JavaScript ，重新學習了這個語言的變數、陣列、字串、迴圈、判斷式和函式的操作方式，  
也稍微複習了一下計概概念。  
這週其實就要學到把各個功能拆分成不同函式的寫法了，  
但我順順寫完沒有想到第三週也要用這樣的邏輯XDrz

### 第三週
在這週卡有點久，最後才發現聯誼那題我有一個變數名字打錯所以一直 WA ，嗚嗚  
  
後來有在思考到底要怎麼調整自己的學習模式，遇到卡關的時候我就是會卡著一直撞同一面牆，時間就這樣浪費了。 
好像看小說漫畫、聽podcast，我也都很堅持照順序來這件事，就是從第一集開始不能跳過，但在時間有限時的學習上，就會陷入膠著。

這週還有 eslint 與批改系統的加入，  
eslint 真的讓人有夠痛苦，像是小時候調整握筆姿勢那樣，  
但全部改過成功 commit 時，會有種如釋重負的感覺（非常需要三不五時 commit 來檢查）。  
  
還有重複使用的功能要拉出來另寫函式這點需要多多練習，避免程式長成一大坨以後不知如何下手修改的毛線團。  

### 第四週
紙條傳情跟創業家千千的故事真的很有趣！  
但這週現在回去看作業和期間的日報的時候，  
覺得出現了記憶斷層。  
  
短時間內加速了一陣，完成了作業，但也同樣高速地清空了記憶。  
像是在使用 request 模組的時候，  
我寫了 Call Back 函式但卻不知道自己在寫的就是 Call Back(!)  
  
這週學到的是新的「溝通方式」，學會正確地表達需求，  
才能取得自己需要的資料或請對方完成自己希望的任務！  
  
如果之後要重頭複習起，我想這週肯定需要再好好重來一次的。

### 第五週
Show Time 示範讓人覺得很不可思議，  
其實進度到現在學到的東西該有的都有了，但就是還沒融會貫通。  
跟著公車即時動態的示範做了抓小北百貨地圖資訊的練習，  
試成功的時候覺得很不可思議 XD  
  
```
const request = require('request');

request('https://www.showba.com.tw/store_page?menuid=9&city=9&canton=0&q=',(err, res, body) => {
  if (err) {
    return('抓取失敗', err);
  }
  getShop(body);
})


function getShop(html) {
  let start = 0;
  let end;
  let flag = 0;
  while (start >= 0 && flag >= 0) { //找不到時會回傳 -1
    start = html.indexOf('<div class="store_detail">',start + 1); //來切出店家資訊，並保持往下找
    if (start)
    end = html.indexOf('</div></div>', start);
    let str = html.slice(start, end);
    let data = parseData(str);
    console.log(`${data.name}\n地址：${data.add}`);
    flag = html.indexOf('<div class="store_detail">',start + 1); //檢查之後是不是都沒有了
  }
  return;
}

function parseData(str) {
  let h3Left = str.indexOf('<h3'); //標記出h3標籤的開頭
  let h3Right = str.indexOf('>', h3Left); //找到h3標籤開頭的結尾，內容開始的前一格
  let h3End = str.indexOf('</h3>');

  let name = str.slice(h3Right + 1, h3End);
    /* 夾在 h3Right+1 和 h3End 之間的就是 h3 的內容了！ 
     <h3>內容在這</h3> */

  let addLeft = str.indexOf('<div class="add"><p><i class="fas fa-map-marker-alt"></i>');
  let addRight = str.indexOf('</i>', addLeft);
  let addEnd = str.indexOf('</p>');

  let add = str.slice(addRight + 4, addEnd);
  
  return {
    name,
    add
  }
  ```
  
本週還有 HTTP Challenge，  
其實我不太擅長解謎遊戲之類的，超容易放棄，  
但在剛完成第四週作業後馬上來試，就有種「來都來了」的心態，  
試下去不得了，一路玩到半夜三點才睡。  
  
遇到卡關的時候，就開始查資料，  
但有時候還是會有點繞遠路，查到也許相關但不一定對當下問題有幫助的內容，  
又有些時候是自己想太多，比方說把 Authorization 加入 header 的方法，
就只是  
```
headers: {
      Authorization: `內容放這`,
  },
```  
缺少嘗試的勇氣反而會容易讓自己陷入膠著啊。  
  
進度落後的時候，其實也是有個小優點是 有很多同學的筆記可以參考XD" 
再次感謝許多同學無私的分享，實在很欽佩有良好歸納能力的人（合掌）  
有時候看看別人思考/消化的方式，也可以幫助自己走出原地打轉的困局。  

NPSC 的題目這週就沒有去解，希望可以先往下跟上課程進度。  
即使緩慢，還是希望自己可以一點一點保持前進。  