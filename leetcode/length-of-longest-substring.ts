function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0,
    start = 0;
  const charIndexMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (charIndexMap.has(s[i]) && charIndexMap.get(s[i])! >= start) {
      start = charIndexMap.get(s[i])! + 1;
    }

    charIndexMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}
