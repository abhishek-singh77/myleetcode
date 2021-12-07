/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(A) {
    let result = [];
    let left = 0;
    let right = A.length - 1;
    let pos = right;

    while (left <= right) {
        if (A[left] ** 2 > A[right] ** 2) {
            result[pos--] = A[left++] ** 2;
        } else {
            result[pos--] = A[right--] ** 2;
        }
    }
    
    return result;
};