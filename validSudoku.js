// 36
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    for(var i = 0;i<9;i++){
        if(!checkValid(board,i,0,i,8)) return false
        if(!checkValid(board,0,i,8,i)) return false
    }
    for(var i = 0;i<3;i++){
        for(var j = 0;j<3;j++){
            if(!checkValid(board,i*3,j*3,i*3+2,j*3+2)) return false
        }      
    }
    return true
};

var checkValid = function(board,x,y,a,b){
    var hashObj = {}
    for(var i = x;i<=a;i++){
        for(var j = y;j<=b;j++){
            var temp = board[i][j]
            if(temp!="."){
                if(hashObj[temp]) return false
                else hashObj[temp] = true
            }
        }
    }
    return true
}