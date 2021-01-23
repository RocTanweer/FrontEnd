// Abstraction and Higher Order Function concepts are quite powerful

// Function can be used to create new function


// This is a way to know if an element exist in an object
function check(mmbr, arr) {
    return arr.indexOf(mmbr) != -1
}


function family(array){
    return function(member){
        if(check(member, array)){
            return true
        }

        else{
            return false
        }
    }
}


let array = ['Tanweer', 'Sarfraz', 'Meraj', 'Seraj', 'Roshan']

let is_Family = family(array);
console.log(is_Family('Sarfraz'));










