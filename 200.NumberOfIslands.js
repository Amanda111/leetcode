/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length == 0 || grid[0].length == 0) return 0
    let width = grid[0].length
    let count = 0
    for(let i = 0; i< grid.length; i++) {
        for(let j = 0; j < width; j++) {
            if(grid[i][j] == '1'){
                markNode(grid, i,j)
                count++
            }
        } 
    }
    return count
};

var markNode = function(grid, i, j) {
    if(i<0 || i >= grid.length || j<0 || j>grid[0].length) return
    if(grid[i][j] == '1') {
        grid[i][j] = '0'
        markNode(grid, i-1, j)
        markNode(grid, i+1, j)
        markNode(grid, i, j+1)
        markNode(grid, i, j-1)
    }
}