/**
 * @param {string} s
 * @return {string}
 */
// DP
// var longestPalindrome = function(s) {
    
// };

// Expand Around Center
var longestPalindrome = function(s) {
    if(s == null || s.length == 0) return ""
    let start = 0, end = 0
    for(let i = 0;i<s.length; i++){
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i+1)
        let len = Math.max(len1,len2);
        if(len > end - start + 1 && len > 1){
            start = i - Math.floor((len-1)/2)
            end = i + Math.ceil((len-1)/2)
            // if(len % 2 !== 0) {
            //     start = i - (len-1)/2
            //     end = i + (len-1)/2
            // }else{
            //     start = i - Math.floor((len-1)/2)
            //     end = i + Math.ceil((len-1)/2)
            // }
        }
    }
    return s.slice(start, end+1)
};

var expandAroundCenter = function(s, L, R){
    while(L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)){
        L--;
        R++;
    }
    return R - L - 1
}