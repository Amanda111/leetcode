//https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let G = new Array(n+1);
    G[0] = 1;
    G[1] = 1;
    
    for(let i=2; i<=n; i++) {
        G[i] = 0
    	for(let j=1; j<=i; j++) {
    		G[i] += G[j-1] * G[i-j];
    	}
    }

    return G[n];
};