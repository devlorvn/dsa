function calPoints(operations: string[]): number {
  const stack: number[] = [];
  let sum = 0;
  for (const op of operations) {
    if (op === "+") {
      const last = stack.pop() || 0;
      const newScore = last + (stack[stack.length - 1] || 0);
      stack.push(last, newScore);
      sum += newScore;
    } else if (op === "D") {
      const last = (stack[stack.length - 1] || 0) * 2;
      stack.push(last);
      sum += last;
    } else if (op === "C") {
      const op = stack.pop();
      if (op !== undefined) {
        sum -= op;
      }
    } else {
      stack.push(parseInt(op));
      sum += parseInt(op);
    }
  }
  return sum;
}

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
