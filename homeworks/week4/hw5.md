## 請以自己的話解釋 API 是什麼
API 是一個可以送出 指令/請求 並 執行動作/接收回傳資料 的方式。  
   
web API 主要是用來處理 Server 的資料，  
功能大致歸納為 CRUD（與對應的 HTTP 請求方法）：
- CREATE（建立資料）= POST
- READ(讀取資料) = GET
- Update(更新資料) = PUT
- DELETE(刪除資料) = DELETE
  
許多網站會提供自己的 API 文件，讓你知道該如何和這個網站互動。  
用正確的方法呼叫/使用 API 來得到我們想要的資料，就是串接 API 的目的。  
  
## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. **403 Forbidden**  
伺服器知道用戶端的身份，但資源有權限管制，因此拒絕回應。

2. **451 Unavailable For Legal Reasons**  
出於法律因素而無法顯示的網頁，如之前遭到查封的楓林網。標頭資訊可能會顯示遭到誰封鎖資源。

3. **507 Insufficient Storage**  
因為伺服器容量不足，無法儲存需要回傳資訊的資訊內容。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

| 說明     | Method | path       | 參數                   | 範例             |
|---------|--------|------------|------------------------|-----------------|
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/10      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名稱 | 迷路布朗曲              |
|           |        |                  | type: 餐廳類型 | 早午餐              |
|           |        |                  | location: 餐廳地點 | {<br>"postal_code": "330",<br>"address": "桃園市桃園區藝文一路99號1樓"<br>}              |
|           |        |                  | time: 營業時間 | 10:30AM-08:30PM              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restaurants/:id     | 同新增餐廳資料格式 | 同新增餐廳資料格式              |