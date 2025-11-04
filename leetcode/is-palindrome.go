package leetcode

func isPalindrome(s string) bool {
	left, right := 0, len(s)-1
	isAlphaNumeric := func(c byte) bool {
		return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
	}
	for left < right {
		if !isAlphaNumeric(s[left]) {
			left++
			continue
		} else if !isAlphaNumeric(s[right]) {
			right--
			continue
		}
		if (s[left] | 32) != (s[right] | 32) {
			return false
		}
		left++
		right--
	}
	return true
}
