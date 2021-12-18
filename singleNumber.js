/**
 * @param {number[]} nums
 * @return {number}
 */
 var Sum = function(nums) {
    let sum = 0;
    nums.forEach((curr) => {
        sum = sum + curr;
    });
    return sum;
}

var singleNumber = function(nums) {
    return 2 * Sum(new Set(nums)) - Sum(nums);
};