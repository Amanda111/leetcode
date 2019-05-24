/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    for(let i = 0;i<nums.length;i++){
        for(let j = nums.length-1;j>i;j--){
            if(nums[j]>nums[j-1]){
                let temp = nums[j]
                nums[j] = nums[j-1]
                nums[j-1] = temp
            }
        }
        if(i==k-1){
            return nums[i]
        }
    }
};