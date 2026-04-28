function removeDuplicates(nums: number[]): number {
    let slow = 0;
    let fast = 0;
    let n = nums.length;

    // 0, 0, 0
    while(fast < n){
        while(fast < n && nums[slow] === nums[fast]){
            fast++;
        }
        slow++;
        if(fast < n) nums[slow] = nums[fast];
    }

    return slow;
};