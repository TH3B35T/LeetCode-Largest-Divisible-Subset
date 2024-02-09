/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const n = nums.length;
    let maxIndex = 0;
    const dp = new Array(n).fill(1);
    const prevIndex = new Array(n).fill(-1);
    const answer = [];
    
    nums.sort((a,b) => a-b);

    for(let i = 1; i< n; i++){
        for(let j = 0; j<i; j++){
            if(nums[i]%nums[j] == 0 && dp[j]+ 1 > dp[i]){
                dp[i] = dp[j] + 1;
                prevIndex[i] = j;

                if(dp[i] > dp[maxIndex]){
                    maxIndex = i
                }
            }
        }
    }

    while(maxIndex>=0){
        answer.push(nums[maxIndex]);
        maxIndex = prevIndex[maxIndex]
    }


    return answer.reverse();
    
};
