## 教你朋友 CLI

### Command Line 是什麼？
操作電腦可以有哪些方式？

一般來說，大家最熟悉的就是 GUI(Graphical User Interface，圖形使用者介面)，我們可以利用圖形畫面來點擊操作電腦。  
而 **Command Line**(CLI) 則是用文字指令和電腦溝通的一種方式。

### 常用指令
#### 跟位置有關的
1. pwd (Print Working Directory) = 印出現在所在位置(資料夾/目錄)
2. ls (LiSt) = 將所在位置(資料夾/目錄)中所有的檔案、子目錄都列表出來
3. cd (Change Directory) = 切換資料夾/目錄 `cd [目錄名稱]` （只能切換至所在位置底下用 ls 可列出的目錄名稱） 
`cd ..` 可以回到上一層目錄/資料夾，`cd ~` 可以回到根目錄
4. man (MANual) = 顯示各指令的使用說明書 `man [指令名稱]`

#### 跟檔案建立/刪除/編輯有關的
1. touch = (1) 碰觸一下檔案，讓修改時間變更為碰觸的時刻 (2) 碰觸目錄中不存在的檔案，會等同於建立新檔案
2. rm(ReMove) = 刪除檔案 `rm [檔案名稱]`，如果要刪除的是資料夾，要使用 `rmdir [資料夾名稱]` 或 `rm -r [資料夾名稱]`
3. mkdir(MaKe DIRectory) = 建立資料夾/目錄；Directory = 目錄
4. mv(MoVe) = 移動檔案或改名 `move [原檔案名稱] [新檔案名稱/欲移動至的資料夾名稱]`
5. cp(CoPy) = 複製檔案 `cp [原檔案名稱] [複製的檔案名稱]`，如果要複製資料夾 `cp -r [原資料夾名稱] [複製的資料夾名稱]`
6. vim = 文字編輯器。  
 `vim [要編輯的檔案名稱]`。 就可以開啟編輯器。  
按下`i` Insert 就可編輯/插入文字。  
按下 `esc` 鍵可切換回純瀏覽模式。  
輸入 `:w` Witten(寫入) 即可儲存檔案。  
輸入 `:q` Quit(離開) 就可以離開 Vim 編輯器。  
儲存檔案和離開檔案可以同時執行，輸入 `:wq` 即可。

### 其他指令
1. date = 印出現在時間 `date`
2. top(Table Of Processes) = 印出所有 process `top`  
輸入 `q` 即可退出
3. cat(CATenate) = 連接檔案，可以顯示/印出檔案內容
4. less = 分頁式印出檔案內容
5. grep = 搜尋特定關鍵字 `grep [關鍵字] [檔案名稱] `
6. echo = 印出指定的字眼

### 範例
`如何用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。`

`mkdir wifi; cd wifi; touch afu.js`


### 小技巧
1. 輸入部分檔案/資料夾名稱時，按下 tab 可以讓電腦自動補完文字。（適合懶得打字的人，但要確保該檔案/資料夾在目前所在位置 ls 可列出的內容中）
2. 可以用 `;` 將有先後順序的指令接起來在同一行中執行
3. 可以用 `|`(pipe)將`|`左方的輸出內容作為右方的輸入內容。  
例如：
```
$ date > time.txt
$ cat time.txt
2020年 6月28日 週日 21時57分43秒 CST
```
`$ cat time.txt | grep 2`  
則只會印出一行日期，且 2 皆被標紅；  
`$ cat time.txt; grep 2 time.txt`  
則會印出兩行日期，第二行的 2 才會被標紅，且 grep 要自行在搜尋關鍵字後方打上想搜尋的檔案名稱才跑得出結果。



### 參考資料
1. [Git 教學：終端機及常用指令介紹](https://gitbook.tw/chapters/command-line/command-line.html)
