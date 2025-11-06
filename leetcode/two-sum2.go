package leetcode

func twoSum(numbers []int, target int) []int {
	left, right := 0, len(numbers)-1
	res := make([]int, 2)
	for left < right {
		sum := numbers[left] + numbers[right]
		if sum == target {
			res[0], res[1] = left, right
			return res
		} else if sum < target {
			left++
		} else {
			right--
		}
	}
	return res
}
