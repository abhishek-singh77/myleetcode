/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    
    while (numbers[left] + numbers[right] !== target) {
        if (numbers[left] + numbers[right] > target) {
            right--
        } 
        else {
            left++
        }
    }
    
    return [left + 1, right + 1]
};