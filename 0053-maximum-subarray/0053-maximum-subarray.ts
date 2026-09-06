function maxSubArray(nums: number[]): number {
    
    const n = nums.length;

    let currSubArraySum = nums[0];
    let maxSubArraySum = nums[0];

    for(let i = 1; i<n; i++){
        const num = nums[i];
        currSubArraySum = Math.max(num, currSubArraySum + num);
        maxSubArraySum = Math.max(currSubArraySum, maxSubArraySum);
    }

    return maxSubArraySum;
};