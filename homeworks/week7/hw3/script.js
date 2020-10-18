// e.target = 實際發出事件者；e.currentTarget = 監聽事件者。
document.querySelector('.qna__wrapper').addEventListener('click', (e) => {
  // console.log(e.target.className)
  const element = e.target.closest('.qna');
  if (element) {
    element.classList.toggle('qna__hide');
  }
});
/* qna__wrapper (監聽，包裹所有 qna)
  -> qna
  -> qna__num & qna__content(qna__title & qna__answer)

  qna / num / content / title / answer 都可能是 e.target，
  所以 e.target.closest('.qna') 最高就到 .qna 為止，
  .qna 以下的 e.target.closest('.qna') 都選得到 .qna 這個 class。
  .qna__wrapper 因為是 .qna 外層，所以我們要設定一個變數 elenent 代表 e.target.closest('.qna')，
  當 element 為 true 時，才執行 classList.toggle；element 為 false 時代表選取到的是 qna__wrapper，不做任何動作。 */
