package leetcode

func maxArea(height []int) int {
	left, right := 0, len(height)-1
	maxResult := 0
	for left < right {
		area := (right - left) * min(height[left], height[right])
		maxResult = max(area, maxResult)

		if height[left] <= height[right] {
			left++
		} else {
			right--
		}
	}
	return maxResult
}
