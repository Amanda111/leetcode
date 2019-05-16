// task 11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i = 0,j = height.length -1;
    var max = 0;
    while(i<j){
        var minHeight = height[i]<height[j]?height[i]:height[j];
        var value = minHeight * (j-i);
        if(value > max) max = value;
        if(minHeight == height[j]) j--;else i++;
    }
    return max
};