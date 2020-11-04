## 什麼是 DOM？
DOM 是 Document Object Model（文件物件模型），  
可以把 html 文件轉換為一個**文件樹結構**的表達方法，讓文件變成有**節點層級**概念的物件。  
  
我們可以利用這樣的方式，讓 JavaScript 去選取到文件中的元素，  
並設定如何去改變或與這些元素進行互動。

※參考資料：  
- [文件物件模型 (DOM) - Web APIs _ MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)  
- [Day03-深入理解網頁架構：DOM - iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10202689)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞機制的順序是：
1. **捕獲階段 Capture Phase**
2. **目標階段 Target Phase**
3. **冒泡階段 Bubbling Phase**

※例如：  
> **Outer 區塊**底下包著 **Inner 區塊**，**Inner 區塊**裡又包著 **Button 按鈕**。
- Outer 區塊
  - Inner 區塊
    - Button 按鈕


當 Button 按鈕發生 'click' 事件時，  
'click' 事件會從 Outer ➡️ Inner 再傳到被點到的 Button，這段過程是**捕獲階段**；  
到 Button 時是**目標階段**，當事件傳到目標階段時，不分捕獲或冒泡；  
最後這個'click' 事件會從 Button 由內而外、一層傳一層地到 Inner ➡️ Outer。  
  
這就是事件傳遞順序的機制。

## 什麼是 event delegation，為什麼我們需要它？
event delegation 是**事件代理**，  
當有大量的相似事件要監聽時，我們可以利用冒泡的事件傳遞機制，把 eventListners 放置在目標的 Parent 上。  
  
當底下的 Child 被觸發各種事件時，都會因為冒泡機制往上傳遞，讓 Parent 這一層的 eventListners 接收到訊息。  
  
如果底下的 Child 有所增減，也不用個別去設定 eventLitsners，可以集中並提升管理效率、減少浪費資源。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- event.preventDefault() = 取消瀏覽器的預設行為
  - 和事件傳遞沒有任何關係。
  - 常用於阻擋超連結。點擊後沒有任何反應，但不影響事件傳遞。
- e.stopPropagation() = 取消事件繼續往下傳遞
  
例：在超連結的 addEventListener 使用 event.preventDefault()，可以讓超連結在點擊時不會有預設的 原地跳轉/新分頁開啟視窗 動作；
在超連結的 addEventListener 使用 e.stopPropagation()，點擊超連結仍然會有預設的 原地跳轉/新分頁開啟視窗 動作，只是點擊後的事件不會往下個節點傳遞，但同一個層級如果還有其他 listener，其他 listener 還是會把事件傳遞下去。


※參考資料：[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/) by  huli