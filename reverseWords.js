/**
 * @param {string} s
 * @return {string}
 */


/*
var reverseWords = function(s) {
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');

};

*/
let reverse = (start, end, array) => {
    while(start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--; 
    }
}
var reverseWords = function(s) {
    let copy = [...s];
    let i = 0, j = 0;
    while( j < s.length) {
        if( copy[j] === ' ') {
            reverse(i,j-1,copy);
            i = j + 1;
        }
        j++;
    }
    reverse(i,s.length-1,copy);
    return copy.join('');
};