/**
 * @param {number[]} nums
 * @return {number}
 */
 const removeDuplicates = (nums) => {
    let cur = 0;
    for (let i = 1; i < nums.length; ++i) {
      if (nums[i] === nums[cur]) continue;
      ++cur;
      nums[cur] = nums[i];
    }
    return cur + 1;
  };