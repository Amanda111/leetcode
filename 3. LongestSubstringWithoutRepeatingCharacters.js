/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0
    let hash = new Array()
    let pointer = 0
    if(s.length == 0) return 0
    let result = 1;
    let j = 0
    while(i<s.length) {
        let index = hash.indexOf(s[i])
        if(index > -1){
            if(hash.length > result) result = hash.length
            hash = []
            pointer = pointer + index + 1
            i = pointer
        }else{
            hash.push(s[i])
            i++
        }
    }
    if(hash.length > result) result = hash.length
    let len = hash.length
    return len === s.length ? len:result
};