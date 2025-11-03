function longestConsecutive(nums: number[]): number {
  // Mỗi khi phát tìm được dãy liền kề thì cập nhật lại chiều dài đầu và cuối dãy đó
  const map = new Map<number, number>();
  let maxLength = 0;
  for (const num of nums) {
    if (!map.get(num)) {
      const before = map.get(num - 1) || 0;
      const after = map.get(num + 1) || 0;
      const count = 1 + before + after;
      map.set(num, count);
      // Cập nhật lại đầu chuỗi
      map.set(num - before, count);
      // Cập nhật lại cuối chuỗi
      map.set(num + after, count);
      maxLength = Math.max(maxLength, count);
    }
  }
  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
