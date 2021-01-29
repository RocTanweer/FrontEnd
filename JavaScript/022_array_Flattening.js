// This function will take an array of arrays and will return an array containing
// all the elements of those arrays
function flatteningArray(array){
  return array.reduce(function (first, second) {
     return first.concat(second)
   })
}

console.log(flatteningArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// gives [1,2,3,4,5,6,7,8,9]

