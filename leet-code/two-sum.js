/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]<=target){
            let compliment = target-nums[i]
            let leftTocompare = i+1
            while(leftTocompare <= nums.length){
                if(nums[leftTocompare] == compliment){
                    return [i,leftTocompare]
                }
                leftTocompare++
            }
        }
    }
    
};