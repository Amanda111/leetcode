//task189
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    for(var i = 0;i < k;i++){
        var temp = nums[nums.length - 1];
        nums.pop();
        nums.unshift(temp);
    }
};