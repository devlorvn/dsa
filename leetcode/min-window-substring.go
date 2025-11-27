package leetcode

func minWindow(s string, t string) string {
	if len(s) == 0 || len(t) == 0 {
		return ""
	}
	needMap := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		needMap[t[i]]++
	}

	windowMap := make(map[byte]int)
	have, needCount := 0, len(needMap)
	resLength := len(s) + 1
	resStart := 0
	l := 0

	for r := 0; r < len(s); r++ {
		char := s[r]
		windowMap[char]++

		if count, exists := needMap[char]; exists && windowMap[char] == count {
			have++
		}

		for have == needCount {
			windowLength := r - l + 1
			if windowLength < resLength {
				resLength = windowLength
				resStart = l
			}

			leftChar := s[l]

			windowMap[leftChar]--
			if count, exist := needMap[leftChar]; exist && windowMap[leftChar] < count {
				have--
			}
			l++
		}
	}

	if resLength > len(s) {
		return ""
	}
	return s[resStart : resStart+resLength]
}
