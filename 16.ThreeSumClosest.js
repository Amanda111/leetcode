//task 16
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var sort = nums.sort(function(a,b){return a-b;});
    var result = sort[0] + sort[1] + sort[nums.length - 1];
    var temp;
    for(var i = 0;i<sort.length;i++){
        var low = i+1;
        var high = nums.length -1;
        while(low<high){
            temp  = sort[i] + sort[low] + sort[high];
            if(temp - target === 0){
                return temp;
            }
            if(Math.abs(temp - target) < Math.abs(result - target)) result = temp;
            if(temp - target<0){
                low++;
            }else{
                high--;
            }
        }
    }
    return result;
};