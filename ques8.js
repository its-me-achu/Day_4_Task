// Rotate an array by k times:
//A)Anonymous function:

const rotateArray = (arr, k) => {
    const len = arr.length;
    k = k % len;

    if (k < 0) {
        k += len;
    }

    return arr.slice(len - k).concat(arr.slice(0, len - k));
};

const array = [1, 2, 3, 4, 5];
const k = 2;

const result = rotateArray(array, k);
console.log(result);

//B)IIFE function :

(function() {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
  
    const rotateArray = (arr, k) => {
      const n = arr.length;
      k = k % n;
      
      const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
      
      return rotatedArray;
    }
  
    console.log(rotateArray(arr, k));
  })();
