// This is an in-built method for array

let arr = [1,2,3,4,5,6,7];

console.log(arr.map(function(el){
    return el**2
}))

// Lets see whats happening behind the scene for abstration

function mapping(array, test){
    var transformed = [];
    for(let i = 0; i < array.length; i++){
        transformed.push(test(array[i]))
    }

    return transformed
}

function n(n){
    return n**2
}



console.log(mapping(arr, function(n){
    return n**2
}))



// We can either pass the name of function in these case
// Or we can also define the function in the parenthesis
console.log(mapping(arr, n))