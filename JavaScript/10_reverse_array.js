// This function will take an array and PRODUCE a new array which contain
// elements of the passed array but in reverse order
function reverseArray(array){
    var counter = 1, newArr = [];
    while(counter <= array.length){
        newArr.push(array[array.length - counter])
        counter += 1;
    }
    return newArr
}

console.log(reverseArray([1,3,5,7,9]))
// gives [9,7,5,3,1] new array




// This function will take an array and unlike the previous function
// that gives new array reversed of the passed one, this function will modify the passed array for reversing
function reverseArrayInPlace(array){
    var counter = 1;
    while(counter <= array.length/2){
        let x = array[counter - 1];
        array[counter-1] = array[array.length - counter];
        array[array.length - counter] = x;
        counter += 1;
    }

    return array
}

console.log(reverseArrayInPlace([1,3,5,7,9,11]))
// gives [11,9,7,5,3,1]


