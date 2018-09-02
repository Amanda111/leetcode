/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var result = 0;
    for (let i = 0; i < height.length - 1; i++){
        let max_left = max_right = 0;
        for (let j = i; j >= 0 ;j--){
            max_left = Math.max(max_left,height[j])
        }
        for (let j = i;j < height.length;j++){
            max_right = Math.max(max_right, height[j])
        }
        let current = Math.min(max_left,max_right) - height[i]
        result += current
    }
    return result
};
