package leetcode

func productExceptSelf(nums []int) []int {
	length := len(nums)
	res := make([]int, length)
	pref := make([]int, length)
	suff := make([]int, length)

	pref[0] = 1
	suff[length-1] = 1

	for i := 1; i < length; i++ {
		pref[i] = pref[i-1] * nums[i-1]
		suff[length-i-1] = suff[length-i] * nums[length-i]
	}

	for i := 0; i < length; i++ {
		res[i] = pref[i] * suff[i]
	}

	return res
}
