//変数numに0~5までのランダムな整数を再入する
let num = Math.floor(Math.random() * 16);

//変数numの値を出力する(確認用)
console.log(num);

//変数numの値が３の倍数であれば「3の倍数です」という文字列を出力する
if (num === 3 || num === 6 || num === 9 || num === 12) {
  console.log('3の倍数です');
}

//変数unmの値が５の倍数であれば「5の倍数です」という文字列を出力する
else if (num === 5 || num === 10){
  console.log('5の倍数です');
}

else if (num === 15){
  console.log('3と5の倍数です');
}

