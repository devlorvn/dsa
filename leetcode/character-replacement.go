package leetcode

func characterReplacement(s string, k int) int {
	countMap := make(map[byte]int)
	l, res, maxFreq := 0, 0, 0
	for r := 0; r < len(s); r++ {
		countMap[s[r]]++
		if countMap[s[r]] > maxFreq {
			maxFreq = countMap[s[r]]
		}

		if (r-l+1)-maxFreq > k {
			countMap[s[l]]--
			l++
		}

		if (r - l + 1) > res {
			res = r - l + 1
		}
	}
	return res
}
