//task6

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var length = 1;
    var arr = new Array;
    var x = 1;
    var y = 0;
    var temp = 0;
    var string = '';
    arr[0] = new Array;
    arr[0][0] = s[0];
    var flag = true;
    while(length < s.length){
        if(length<numRows){
            arr[x] = [];
            temp = x;
        }
        if(x == 0){
            flag = !flag;
            x++;
        }
        if(x == numRows){
            flag = !flag;
            x--;
        }
        if(flag){
            arr[x][y] = s[length];
            length++;
            x++;
        }
        if(!flag){
            if(x)x--;
            y++;
            arr[x][y] = s[length];
            length++;
        }
    }
    for(let i = 0;i <= temp;i++){
        for(let j = 0;j< arr[i].length;j++){
            if(arr[i][j]){
                string += arr[i][j];
            }
        }
    }
    return string;
};