// This function will give an array from num1 to num2(inclusively)
function range(start, end) {
    var arr = [];
    for (let i = 0; i < (end - start + 1); i++) {
        arr.push(start + i);
    }

    return arr
}

console.log(range(532, 557));
// returns [532 , ... , 557]



// This function wiil give the sum of an array
function sum(array) {
    var sum = 0;
    for (let num of array) {
        sum += num
    }

    return sum
}

console.log(sum(range(532, 557)));
// gives 14157 the sum of above array




// This function is a modified version of the above range function
function modRang(start, end, step) {
    var arr = [], counter = 0;
    while (counter < (end - start + 1)) {
        arr.push(start + counter);
        counter += step;
    }

    return arr
}

console.log(modRang(1, 10, 2));
// gives [1,3,5,7,9]
