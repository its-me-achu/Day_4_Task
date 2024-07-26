//Remove duplicates from an array:
//A)Anonymous function:
const array = [1, 2, 3, 4, 1, 2, 5, 6, 3];

const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray);
//B)IIFE function:

const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = (function(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
})(arr);

console.log(uniqueArr);