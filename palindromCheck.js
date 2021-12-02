/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
	
    // reverse the string representation of x
    const reverse = `${x}`.split('').reverse().join('');
    // compare the value regardless of types
    return x == reverse;//false if not palindrome and true when reverse is same as initial string
};