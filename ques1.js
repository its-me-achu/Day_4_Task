//Print odd numbers in an Array:
//A))Anonymous Function:

let arr = [ 3, 6, 7, 9, 23, 45, 8, 10];
 arr.forEach(function(num){
    if (num % 2 !== 0){
        console.log(num);
    }
 })
 //B)IIFE Function:

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(){
    for (let i =0; i < numbers.length; i++){
        if (numbers[i] %2 !== 0){
            console.log(numbers[i]);
        }
    }
})();

// C) Arrow function:

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = number.filter
(num => num % 2 !==0);
console.log (oddNumbers);