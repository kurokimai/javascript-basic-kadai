//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//HTML要素がクリックされた時にイベントが処理を実行する
btn.addEventListener('click' , () =>{
  //2秒後に非同期処理を実行
  setTimeout(() => {
  //textに「ボタンをクリックしました」というテキストを追加する
  text.textContent = 'ボタンをクリックしました';
  console.log(text);
  },2000);
});

