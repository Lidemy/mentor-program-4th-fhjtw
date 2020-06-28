## 交作業流程

### 前置作業
1. 首先第一次先 clone 一份作業到自己電腦本機上。  
`git clone https://github.com/Lidemy/mentor-program-4th-[我的GitHub帳號]`

2. 下載完成後，查看資料夾是否已建立及其名稱。
`ls`

3. 切換至作業資料夾。  
`cd mentor-program-4th-[我的GitHub帳號]`

### 寫作業
1. 首先，新增一個 branch。  
`git branch week1`

2. 檢查目前的分支狀態，branch 名稱前有 `*` 的就是目前所在位置。  
`git branch -v`  
目前所在分支為 master。

3. 切換至新增的 branch，之後都在新增的 branch 上進行編輯。  
`git checkout week1`

4. 切換至作業資料夾 ➡️ 切換至 week1 資料夾 ➡️ 開啟目前資料夾(week1)  
`cd homeworks; cd week1; open .`

5. 直接點選檔案開啟作業，編輯後儲存。


### 交作業
1. 查看目前 branch 狀態 `git status` 。  
標示為 `modified:` 的就是已更新但尚未 commit 的檔案。

2. 如果有新增檔案，要加入 git 的版本控制。  
`git add [檔案名稱]` 或 `git add .` 加入全部檔案。

3. `git commit -am "版本更新資訊"`

4. 當週作業全部完成後，把寫作業的 branch 推上自己在 GitHub 的 repository。  
`git push origin week1`

* 可以參考這篇文章[Git教學：如何 Push 上傳到 GitHub？](https://gitbook.tw/chapters/github/push-to-github.html) 裡的 【冷知識】設定 upstream 是什麼意思。  
如果有設定，當下次執行 git push 指令的時候，它就會用來當預設值。  
例：`git push -u origin [分支名稱]`，就會讓下次只打 `git push`指令而不帶其它參數時，直接把該分支名稱推到 origin 上。  
但我們現在繳交作業，每週使用的 branch 不同，應該暫時不會用到這個技巧。

5. Push 完成後，可以到自己 GitHub 的 repositery (mentor-program-4th-[我的GitHub帳號]) 裡的 **Pull requests** 裡看到一個黃底的新提示 `Your recently pushed branches: week1 (less than a minute ago)`  
點選右側綠色的 `Compare & pull request`，表示我想將 Week1 merge 到 Master 上。  
在此處輸入說明、問題等，例：第一週作業完成。  
在下方也可看到本次作業繳交的內容（相較原本檔案的變更差異會以綠底標示出來）。  
就可以點選 `Create pull request` 送出 PR 了。  
  
* 如果進入 Pull requests 裡沒有看到最新上傳的黃底提示，可以直接點選 `New pull request`，  
手動選擇 compare 的 branch (剛才上傳的 Week1)，就可以比照上述流程發送 PR。

6. 助教/同學可以在我們已發送的 PR 裡的 `File changed` 看到作業（變更內容），並在底下留言回覆。

7. 到 [學習系統 > 作業列表](https://learning.lidemy.com/homeworks) 點選 `新增作業`  
選擇週次，填入 PR 連結 (網址中含有 pull )，  
並勾選已檢查作業、看過自我檢討選項後，即可送出作業。

### 作業批改後
1. 作業批改完後，會在 [學習系統 > 作業列表](https://learning.lidemy.com/homeworks) 顯示已批改。
2. 將遠端已 merge 的 master 與 本機的 master 進行同步。  
`git checkout master; git pull origin master`
3. 將本機的 week1 branch 刪除。  
`git branch -d week1`
4. 檢查目前的 branch 有哪些，刪除後應該只會留下 master。
`git branch -v`
5. 查看 Git log 可看到 week1 Merge 成功的紀錄。

