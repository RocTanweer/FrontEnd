// this is a in-built method of an array
let arr = [1,2,3,4,5,6,7]
console.log(arr.filter(function(num){
    return num > 4
}))
// gives [5,6,7]



// lets see how it works to understand abstraction


function filter(array, test){
    var passed = [];
    for(let i = 0; i < array.length; i ++){
        if(test(array[i])){
            passed.push(array[i]);
        }
    }

    return passed
}

console.log(filter([1,2,3,4,5,6,7], function(n){
    return n > 4
}))