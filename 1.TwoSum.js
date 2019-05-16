//task1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length - 1; i++) {
        let remain = target - nums[i]
        let index = nums.slice(i+1).indexOf(remain)
        if(index > -1) return [i,i+index+1]
    }
};

var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i< nums.length; i++) {
        let remain = target - nums[i]
        if(map.has(remain)) {
            let index = map.get(remain)
            return [index, i]
        }else{
            map.set(nums[i],i)
        }
    }
    return
};