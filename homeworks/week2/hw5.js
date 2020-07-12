function join(arr, concatStr) {
    if(arr.length === 0){ // 處理空字串
        return '';
    }

    var joinArr = arr[0] //取首字元
    for (var i = 1; i < arr.length; i++){ //只有一個字元時，僅印出首字元
        joinArr += concatStr + arr[i];
    }
    return joinArr;

}

function repeat(str, times) {
    var repeatStr = ''
    for(var i = 0; i < times; i++){
        repeatStr += str
    }
    return repeatStr;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
