// maxFreq = số lần xuất hiện nhiều nhất của 1 character trong window
// windowLen = r - l + 1
// valid condition: windowLen - maxFreq <= k
function characterReplacement(s: string, k: number): number {
  const countMap: Record<string, number> = {};
  let l = 0,
    maxFreq = 0,
    res = 0;

  for (let i = 0; i < s.length; i++) {
    countMap[s[i]] = (countMap[s[i]] || 0) + 1;

    if (countMap[s[i]] > maxFreq) {
      maxFreq = countMap[s[i]];
    }

    if (i - l + 1 - maxFreq > k) {
      countMap[s[l]]--;
      l++;
    }

    if (i - l + 1 > res) {
      res = i - l + 1;
    }
  }

  return res;
}
