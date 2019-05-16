/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let x = nums1.length
    let y = nums2.length
    
    let low = 0
    let high = x
    while(low <= high) {
        let partition1 = parseInt((low + high)/2)
        let partition2 = parseInt((x + y + 1)/2) - partition1
        let maxLeftX = partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1]
        let minRightX = partition1 === x ? Number.POSITIVE_INFINITY : nums1[partition1]
        let maxLeftY = partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1]
        let minRightY = partition2 === y ? Number.POSITIVE_INFINITY : nums2[partition2]
        if (maxLeftX <= minRightY && minRightX >= maxLeftY) {
            if((x + y)%2 == 0){
                return (Math.max(maxLeftX,maxLeftY) + Math.min(minRightX, minRightY))/2
            } else {
                return Math.max(maxLeftX,maxLeftY)
            }
        } else if (maxLeftX > minRightY) {
            high = partition1 - 1
        } else {
            low = partition1 + 1
        }
        
    }
};