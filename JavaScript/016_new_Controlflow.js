// Function can also be used to make a new control flow


function reapeat(n, func){
    for(let i = 0; i < n; i++){
        console.log(func(i));
    }
}

// function some(n){
//     return n **2
// }

function unless(test, then) {
    if (!test) {
        return then()
    }
    else {
        return 'Nothing'
    }
}


