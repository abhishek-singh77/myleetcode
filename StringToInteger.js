/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let canSpace = true;
    let negative = false;
    let result = 0;

    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === ' ' && canSpace){
           continue; 
        }
        if(s.charAt(i) === '-' && canSpace ) {
            negative = true;
            canSpace = false;
            continue;
        }
        if(s.charAt(i) === '+' && canSpace ) {
            canSpace = false;
            continue;
        }
        canSpace = false;
        let n = s.charCodeAt(i) - 48;
        if(n >= 0 && n <= 9) {
            result = (result * 10) + n;
            if (result > 0x7FFFFFFF)
                return negative ? (0x7FFFFFFF + 1) * -1 : 0x7FFFFFFF;
        }
        else
            break;
    }
    
    return negative ? result * -1 : result;
};
