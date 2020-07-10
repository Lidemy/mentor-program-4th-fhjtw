function search(arr, target){
    var left = 0, right = arr.length - 1
    while(right >= left){
        var center = Math.floor((left + right)/2)
        if(arr[center] == target){
            return center;
        }
        else if(arr[center] < target){
            left = center + 1
        }
        else{
            right = center - 1
        }
    }
    return -1;
}

console.log(search([1, 3, 10, 14, 39], 14))
console.log(search([1, 3, 10, 14, 39], 299))