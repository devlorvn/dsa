package leetcode

func maxProfit(prices []int) int {
	maxProfit := 0
	startPrice := prices[0]
	for i := 1; i < len(prices); i++ {
		if prices[i] < startPrice {
			startPrice = prices[i]
		} else {
			if prices[i]-startPrice > maxProfit {
				maxProfit = prices[i] - startPrice
			}
		}
	}
	return maxProfit
}
