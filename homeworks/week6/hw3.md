## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. **`<picture></picture>`**  
適用於 RWD 網頁中不同螢幕裝置顯示適合的圖片尺寸。

  ``` html
    <picture>
    <source srcset="大圖路徑"
            media="(min-width: 大圖的最小尺寸)">
    <img src="小圖路徑" alt="替代文字" />
</picture>
```
2. **`<ruby></ruby>`**  
旁註標記，東亞字符標音用，可以用在日文、中文等語言。  
大致結構為  `<ruby>字（ji）</ruby>`，用括號包住讀音，  
括號的左右都要用`<rp>(</rp>`、`<rp>)</rp>`包住，  
讀音的左右要用`<rt>ji</rt>`包住。
``` html
<!-- 字 -->
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji/rt><rp>)</rp>
</ruby>
<!-- 詞 -->
<ruby>
  明日 <rp>(</rp><rt>あした</rt><rp>)</rp>
</ruby>
```
3. **`<details></details>`**  
摺疊選單，用 summary 標示出摺疊起時在外顯示的標題。 details 包在最外層，展開的內容寫於其中。  
適合做問答選單等功能。
``` html
<details>
    <summary>顯示更多</summary>
    這是摺疊起來時不會顯示的內容，點了 summary 裡包的字樣就會展開。
</details>
```
  
※參考資料：  
- [`<picture>`: The Picture element - HTML：超文本標記語言 _ MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/picture)
- [`<ruby>`- HTML：超文本標記語言 _ MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/ruby)
- [`<details>`：详细信息展现元素 - HTML（超文本标记语言） _ MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details)
- [HTML 語法教學 HyperText Markup Language 超文件標示語言 - HTML 語法教學 Tutorial](https://www.fooish.com/html/)

## 請問什麼是盒模型（box modal）
在CSS中，HTML的每個元素都可以看作一個盒子，並針對每個元素個別去調整寬高大小及屬性。  
  
一個CSS的盒模型，包含了 **Content(實際內容)**、**Padding(內距)**、**Border(邊框)**、**Margin(外距)**，由內而外的排序是：  
1. **Content (內容)**：例如 文字、圖像。  
2. **Padding (內距)：**包圍在內容周圍的透明距離，會跟著 Content的 Background Color 改變。  
3. **Border (邊框)**：夾在內距和外距之間，可以另外設定粗細、線條樣式、圓角、顏色等屬性。  
4. **Margin (外距)**：在邊框之外，和其它元素分隔開的透明的距離。  

**※ 參考資料來源：** [CSS 盒子模型 _ 菜鸟教程](https://www.runoob.com/css/css-boxmodel.html)

  
## 請問 display: inline, block 跟 inline-block 的差別是什麼？
### inline：行內元素
- 可以圖文元素排在同一行
- padding 內距、margin 外距的設定值不會把其他上下行推開（如果有填入背景顏色、加上邊框就會蓋到上下行的內容）
  
### block：區塊元素
- 元素預設會佔滿整個容器寬度
- 可以設定寬高
- 會自己獨佔一行（後面元素會在下一行出現，不能與它並列）
  
### inline-block：行內區塊
- 結合了行內元素 **可以排在同一行** 的特性 + 區塊元素 **可以設定寬高** 的特性
- 元素在單行排不下才會換行


**※參考資料**：[CSS教學-關於display:inline、block、inline-block的差別 _ by YTCLion _ Medium](https://medium.com/@wendy199288/css%E6%95%99%E5%AD%B8-%E9%97%9C%E6%96%BCdisplay-inline-inline-block-block%E7%9A%84%E5%B7%AE%E5%88%A5-1034f38eda82)
  
  
## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- **static 預設定位：** 
  - 預設屬性，不會被特別定位在頁面上的特定位置，照著瀏覽器預設的配置自動排版在頁面上。
- **relative 相對定位：** 
  - 可以額外加上 top、bottom、right、left 等屬性，來做相對於原本該出現的位置(如果是預設為 static 時）的定位
  - 不特別設定定位屬性時，看起來和 static 表現相同
- **absolute 絕對定位：** 
  - 會往上找父元素(第一個不是 static 定位的元素)，做出相對於該元素的定位
  - 也是使用 top、bottom、right、left 等屬性來定位
- **fixed 固定定位：** 
  - 會根據瀏覽器視窗來定位，所以即使頁面捲動，它也會保持在畫面中的固定位置
  - 也是使用 top、bottom、right、left 等屬性來定位

**※參考資料：**[CSS - 關於 position 屬性](https://zh-tw.learnlayout.com/position.html)