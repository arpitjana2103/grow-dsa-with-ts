/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    
    const n = nums.length;

    let l = 0;
    let m = 0;
    let r = n - 1;

    while(m <= r){
        if(nums[m] === 0){
            const temp = nums[l];
            nums[l++] = nums[m];
            nums[m++] = temp;
        }else if(nums[m] === 1){
            m++;
        }else if(nums[m] === 2){
            const temp = nums[r];
            nums[r--] = nums[m];
            nums[m] = temp;
        }
    }
};