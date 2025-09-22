function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const results: number[] = new Array(n * 2);
  for (let i = 0; i < n; i++) {
    results[i] = nums[i];
    results[i + n] = nums[i];
  }
  return results;
}
