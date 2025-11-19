package leetcode

func lengthOfLongestSubstring(s string) int {
	maxLength, start := 0, 0
	charIndexMap := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		if index, ok := charIndexMap[s[i]]; ok && index >= start {
			start = index + 1
		}
		charIndexMap[s[i]] = i
		if currentLength := i - start + 1; currentLength > maxLength {
			maxLength = currentLength
		}
	}
	return maxLength
}
