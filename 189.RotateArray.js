//task189
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums == null || nums.length < 2) return nums
    k = k % nums.length;
    reverse(nums, 0, nums.length - k - 1)
    reverse(nums, nums.length - k, nums.length - 1)
    reverse(nums, 0, nums.length - 1)
};

var reverse = function(nums, start, end) {
    while(start < end) {
        temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start ++
        end--
    }
    return nums
}