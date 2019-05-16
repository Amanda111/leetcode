// task 15
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    if(nums.length<2) return result;
    // redefine sort()
    var sort = nums.sort(function(a,b){return a-b;});
    for(var i=0;sort[i]<=0&&i<nums.length-2;i++){
        var low = i+1;
        var high = nums.length -1;
        var tofind = 0-sort[i];
        while(low < high){
            if(sort[low]+sort[high] == tofind){
                var temp = [];
                temp.push(sort[i]);
                temp.push(sort[low]);
                temp.push(sort[high]);
                result.push(temp);
                while(sort[low] == sort[low+1]) low++;
                while(sort[high] == sort[high-1]) high--;
                low++;
                high--;
            }else if(sort[low]+sort[high]<tofind)low++;
            else high--;
        }
        while(sort[i] == sort[i+1]) i++;
    }
    return result
};