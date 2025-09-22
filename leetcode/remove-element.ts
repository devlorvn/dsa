function removeElement(nums: number[], val: number): number {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const k = removeElement(nums, val);

console.log(nums.slice(0, k));
