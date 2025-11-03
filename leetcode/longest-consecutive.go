package leetcode

func longestConsecutive(nums []int) int {
	// Mỗi khi phát tìm được dãy liền kề thì cập nhật lại chiều dài đầu và cuối dãy đó
	mp := make(map[int]int)
	maxLength := 0
	for _, num := range nums {
		if _, ok := mp[num]; !ok {
			before := mp[num-1]
			after := mp[num+1]
			count := 1 + before + after
			mp[num] = count
			// Cập nhật lại đầu chuỗi
			mp[num-before] = count
			// Cập nhật lại cuối chuỗi
			mp[num+after] = count
			if count > maxLength {
				maxLength = count
			}
		}
	}
	return maxLength
}
