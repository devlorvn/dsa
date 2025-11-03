function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;

    const res : number[] = new Array(length);
    const pref: number[] = new Array(length);
    const suff: number[] = new Array(length);

    pref[0] = 1;
    suff[length-1] = 1;

    for (let i = 1; i < length; i++) {
        pref[i] = pref[i-1]*nums[i-1];
        suff[length - 1 - i] = suff[length - i] * nums[length - i];
    }
    for (let i = 0; i < length; i++ ) {
        res[i] = pref[i]*suff[i]
    }
    return res
};

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));