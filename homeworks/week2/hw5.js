function join(arr, concatStr) {
    var joinArr = ''
    for(var i = 0; i < arr.length; i++){
        joinArr += arr[i]
        joinArr += concatStr
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
