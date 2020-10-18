/* eslint-disable no-restricted-syntax */
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // 先選取所有包含 .require 必填項目的題組 block
  const elements = document.querySelectorAll('.require');
  // 預設沒有錯誤/未完成的輸入，設 value 輸入內容的答案為一個 空物件
  let hasError = false;
  const value = {};

  // for(let i of array) 語法 是可以將陣列中的值一個個取出的方法，等同於 for (i=0; i<array.length; i++)
  for (const element of elements) {
    // 每個題組下只會有一個 text input，所以這裡不使用 Selector All
    const text = element.querySelector('input[type=text]');
    // radio 每題就有多個選項
    const radio = element.querySelectorAll('input[type=radio]');
    // 預設輸入內容有效
    let isValid = true;

    // 開始判斷這個題目屬性，text 或 radio ？
    // 如果這個 element(第幾題)的題型內含 text
    if (text) {
      // 如果 text 欄位有內容，存下 該欄位名稱 與 輸入內容
      if (text.value) {
        // 例 value[nickname] = Shirley； value[mobile] = 0912-345-678
        value[text.name] = text.value;
      } else {
        // 如果 text 欄位沒有內容，標示為無效
        isValid = false;
      }
    // 如果這個 element(第幾題)的題型內含 radio
    } else if (radio.length) {
      // 因為 radio 是一個 Node，不算真正的陣列，前面加上[...]就能打散重組陣列
      // .some 為判斷陣列裡是否有通過 .some 內函式驗證的函式，檢查 radio 選項是否有被勾選到，有的話 isVaild = true
      isValid = [...radio].some(radioOption => radioOption.checked);
      if (isValid) {
        const radioChecked = document.querySelector('input[type=radio]:checked');
        // value[type] = 1 or value[type] = 2
        value[radioChecked.name] = radioChecked.value;
      }
    }

    // 如果該題沒有輸入值或勾選，is Vaild = false
    if (!isValid) {
      // 刪除“隱藏錯誤提示” => 讓錯誤顯示
      element.classList.remove('hide-error');
      // 而且標示為仍有未完成/輸入的題目
      hasError = true;
    } else {
      element.classList.add('hide-error');
      // 如果該題有輸入值 => 讓錯誤隱藏
    }
  }

  // 如果所有欄位都有填寫，才跳出填寫內容
  if (!hasError) {
    // value 為 object 格式，字串化處理後才能顯示純文字內容
    alert(JSON.stringify(value));
  }
});
