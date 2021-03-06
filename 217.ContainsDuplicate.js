//task217
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    var hash = {},
        value,
        i = 0;
    while(i<nums.length){
        value = nums[i];
        if(value in hash){
            return true;
        }else{
            hash[value] = null;
        }
        i++;
    }
    return false;
};