/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let ans = []
    backtracking(ans,[],1,n,k)
    return ans
};
var backtracking = function(ans,tmp,start,n,k) {
    if(tmp.length == k){
      ans.push(Array.from(tmp))
      return
    }
    for(let i=start;i<=n;++i){
      tmp.push(i)
      backtracking(ans,tmp,i+1,n,k)
      tmp.pop()
    }
};