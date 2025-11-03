package leetcode

func topKFrequent(nums []int, k int) []int {
	count := make(map[int]int)
	for _, num := range nums {
		count[num]++ // Count the frequency of each number
	}

	heap := priorityqueue.NewWith(func(a, b interface{}) int { // a, b are cast to [2]int [frequency, number]
		freqA := a.([2]int)[0]                   // Frequency is stored at index 0
		freqB := b.([2]int)[0]                   // Frequency is stored at index 0
		return utils.IntComparator(freqA, freqB) // Min-heap based on frequency
	})

	for num, freq := range count {
		heap.Enqueue([2]int{freq, num}) // Enqueue [frequency, number]
		if heap.Size() > k {            // Maintain heap size of k
			heap.Dequeue()
		}
	}

	res := make([]int, k)

	for i := k - 1; i >= 0; i-- {
		value, _ := heap.Dequeue()
		res[i] = value.([2]int)[1]
	}
	return res
}
