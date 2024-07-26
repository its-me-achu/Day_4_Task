//Return all the palindromes in an array:
//A) Anonymous function:
const arr = ["madam", "hello", "level", "wow", "rececar", "mom", "world"];

const palindrome = arr.filter(word => {
    const reversedWord = 
    word.split("").reverse().join("");
    return word === reversedWord;
});

console.log(palindrome);
//B)IIFE function:

(() => {
    const arr = ["madam", "hello", "level", "wow", "rececar", "mom", "world", "civic", "noon"];

const palindrome = arr.filter(word => {
    const reversed = 
    word.split("").reverse().join("");
    return word === reversed;
});

 console.log(palindrome);

})();

//C)Arrow function:


const array = ["madam", "hello", "level", "wow", "rececar", "mom", "world", "civic", "noon"];

const Palindrome = (array) => {
    return array.filter (word => {
        const reversedWord = word.split("").reverse("").join("");
        return word === reversedWord;
    });
}

 const palin = Palindrome(array);
 console.log(palin);

