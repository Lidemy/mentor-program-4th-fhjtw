function join(arr, concatStr) {
    if(arr.length === 0){ // 處理空陣列
        return '';
    }

    var joinArr = arr[0] //取陣列第一個值
    for (var i = 1; i < arr.length; i++){
        joinArr += concatStr + arr[i];
    }
    return joinArr; //如果陣列長度為1，不會進入上面for迴圈，直接回傳陣列第一個值

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
