function capitalize(str) {
    var cap = ''
    var first = str.charCodeAt(0)
    if (first >= 97 && first <=122){
        cap += String.fromCharCode(first- 32)
        for(var i = 1; i < str.length; i++){
            cap += str[i]
        }
        return cap;
    }
    return str;
}

console.log(capitalize('hello'));