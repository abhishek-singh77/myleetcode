/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let visited = new Set();
    let longest = 0;
    let l = 0;
    for (let i = 0; i < s.length; i++) {
        while (visited.has(s[i])) {
            visited.delete(s[l]);
            l++;
        }
        visited.add(s[r]);
        longest = Math.max(longest, r - l + 1);
    }
    return longest;
};