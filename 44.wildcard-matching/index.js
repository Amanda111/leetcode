/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(s.length == 0) {
        if (p.split('*').length - 1 == p.length) return true
        return false
    }
    let mat = []
    mat[0] = new Array(s.length + 1)
    mat[0][0] = true
    for (let i = 1;i < s.length+1; i++) {
        mat[0][i] = false
    }
    for(let i = 1;i < p.length+1; i++) {
        mat[i] = new Array(p.length + 1)
        if(mat[i-1][0] == true && p[i-1] == '*') {
            mat[i][0] = true
        } else {
            mat[i][0] = false
        }   
    }
    for(let i = 1; i< p.length + 1; i++) {
        for(let j = 1; j < s.length + 1; j++) {
            if(mat[i-1][j-1] == true){
                if(p[i-1] == '*' || p[i-1] == '?' || p[i-1] == s[j-1]) {
                    mat[i][j] = true
                    continue
                }
            } else if (mat[i-1][j] == true || mat[i][j-1] == true) {
                if(p[i-1] == '*') {
                    mat[i][j] = true
                    continue
                }
            }
            mat[i][j] = false
        }
    }
    return mat[p.length][s.length]
    
};