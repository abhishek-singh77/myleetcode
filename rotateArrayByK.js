/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 function rotate(nums, k) {

    if (k > 0) {
      k = k % nums.length;
      reverse(nums, 0, nums.length - k - 1);
      reverse(nums, nums.length-k, nums.length - 1);
      reverse(nums, 0, nums.length - 1);
    }
  
    return nums;
  };
  
  function reverse(arr, start, end) {
  
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++, end--;
    }
  
    return arr;
  }