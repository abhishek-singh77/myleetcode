/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(S) {
    const queue = [S];
    for (let i = 0; i < S.length; i++) {
      if (/[0-9]/.test(S[i])) continue;
      const size = queue.length;
      for (let j = 0; j < size; j++) {
        const node = queue.shift();
        queue.push(node.slice(0, i) + node[i].toLowerCase() + node.slice(i + 1));
        queue.push(node.slice(0, i) + node[i].toUpperCase() + node.slice(i + 1));
      }
    }
    return queue;
  };