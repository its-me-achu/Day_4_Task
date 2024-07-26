//Sum of all numbers in an array:
//A)Anonymous function:
const numbers = [1, 2, 3, 4, 5];
 const sum = numbers.reduce((acc, curr)=> acc + curr, 0 );
 console.log(sum);

 //B)IIFE function:

 (function (){
    var numbers = [1, 2, 3, 4, 5];
    var sum =0;
     for (var i = 0;  i < numbers.length; i++){
        sum += numbers[i];
     }
     console.log(sum);
})();

//C)Arrow function:
const number = [1, 2, 3, 4, 5];
const sumArray = (arr) => arr.reduce((acc, curr) => acc +curr, 0);
console.log(sumArray(number));