// This is an in-built method for an array

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.reduce(function(s, e) {
    return s+e
}))


console.log(arr.reduce(function(s, e) {
    if(e > s){
        return e
    }

    else{
        return s
    }
}))



// lets see whats happening from the inside

function reducing(array, test, stratingPoint){
    var current = stratingPoint;
    for(let i = 0; i < array.length; i++){
        current = test(array[i], stratingPoint)
    }

    return current
}

console.log(reducing(arr, function(s,e){
    return s+e
}, 0))





