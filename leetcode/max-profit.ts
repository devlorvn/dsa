function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let startPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice > startPrice) {
      const profit = currentPrice - startPrice;
      maxProfit = Math.max(maxProfit, profit);
    } else {
      startPrice = currentPrice;
    }
  }

  return maxProfit;
}