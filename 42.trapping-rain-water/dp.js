/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max_left = new Array()
    max_left[0] = height[0]
    let max_right = new Array()
    let size = height.length
    let result = 0
    max_right[size - 1] = height[size - 1]
    for(let i = 1; i < size; i++) {
        max_left[i] = Math.max(max_left[i-1],height[i])
    }
    for(let i = size - 2;i >= 0;i--) {
        max_right[i] = Math.max(max_right[i+1],height[i])
    } 
    for(let i = 0; i < size; i++) {
        let current = Math.min(max_left[i],max_right[i]) - height[i]
        result +=  current
    }
    return result
};
