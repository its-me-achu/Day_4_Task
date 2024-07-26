// Return median of two sorted arrays of the same size.
// You don't asked arrow function above five question's only arrow function required.
//A)Anonymous function:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const findMedianSortedArrays = (nums1, nums2) => {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
        const midIndex1 = length / 2 - 1;
        const midIndex2 = length / 2;
        
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
};
console.log(findMedianSortedArrays(nums1, nums2));

//B)IIFE function:

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (arr1, arr2) => {
  const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = mergedArr.length;
  const mid = Math.floor(length / 2);

  return length % 2 === 0 ? (mergedArr[mid - 1] + mergedArr[mid]) / 2 : mergedArr[mid];
};

(() => {
  console.log(median(arr1, arr2));
})(); 