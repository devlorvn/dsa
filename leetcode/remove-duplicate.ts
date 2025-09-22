function removeDuplicates(arr: number[]): number {
  let left: number = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}
const nums = [1, 1, 2, 2, 3, 4, 4, 5];

const k = removeDuplicates(nums);

console.log(nums.slice(0, k)); // Output: [1, 2, 3, 4, 5]
