//変数numに0~5までのランダムな整数を再入する
let num = Math.floor(Math.random() * 16);

//変数numの値を出力する(確認用)
console.log(num);

if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}

//変数numの値が３の倍数であれば「3の倍数です」という文字列を出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//変数unmの値が５の倍数であれば「5の倍数です」という文字列を出力する
else if (num % 5 === 0){
  console.log('5の倍数です');
}


else {
  console.log(num);
}



