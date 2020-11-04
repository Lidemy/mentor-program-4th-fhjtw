// 當點下 .btn-new 按鈕時，抓取 .add__task 裡輸入的值
document.querySelector('.btn-new').addEventListener('click', () => {
  // 下面這行 eslint 建議用物件解構，原本寫 const value = document.querySelector('.add__task').value;
  const { value } = document.querySelector('.add__task');
  // 如果 .add__task 裡的值為空，直接返回
  if (!value) return;

  // 新增一個 div 元素
  const div = document.createElement('div');
  /* 為新增的 div 加上 classname -> <div class="task"></div> */
  div.classList.add('task');
  div.innerHTML = `
  <label class="task__name">${value}
    <input type="checkbox">
    <span class="checkmark" class="task__checkbox"></span>
  </label>
  <button class="btn-delete"></button>
  `;
  // 在 .task__list 底下新增 上面設定的 div
  document.querySelector('.task__list').appendChild(div);
  // 清空輸入欄 .add__task 內容
  document.querySelector('.add__task').value = '';
});

// 當點下 .btn-delete 按鈕時
document.querySelector('.task__list').addEventListener('click', (e) => {
  const { target } = e;
  // 刪除todo
  if (target.classList.contains('btn-delete')) {
    target.parentNode.remove();
    return 0;
  }

  // 完成 todo，點擊 todo 項目 label 時，target 是 <input class="task__checkbox">
  if (target.checked) {
    target.parentNode.classList.add('done');
    // console.log(`the target is ${target.className} and target checked is ${target.checked}`);
    // console.log(`parent node is ${target.parentNode.className}`);
  } else {
    target.parentNode.classList.remove('done');
  }
  return 0;
});
