//Return all the prime numbers in an array:
//A)Anonymous function:
const numbers =[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const primeNumbers = numbers.filter (num =>{
    for (let i = 2; i <= Math.sqrt(num);
          i++){
            if(num % i ===0){
                return false;
            }
          }
          return num > 1;
});
console.log(primeNumbers);

//B) IIFE function:

(function() {
    const numbers =[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 31, 29, 19];
    const primeNumbers = numbers.filter (num =>{
    for (let i = 2; i < num;
          i++){
            if(num % i ===0){
                return false;
            }
          }
          return num > 1;
});
console.log(primeNumbers);
 })();

 //C) Arrow function:

 const array =[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 31, 29, 19];
const isPrime = num => {
    for (let i =2; i <= Math.sqrt(num); i++){
        if (num % i ===0){
            return false;
        }
    }
    return num > 1;
};
const prime = array.filter(num => isPrime(num));
console.log(prime);

    

