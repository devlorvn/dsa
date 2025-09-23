function calPoints(operations: string[]): number {
    const stack: number[] = [];
    for (const op of operations) {
        if (op === "+") {
            const last = stack.pop() || 0;
            const newScore = last + (stack[stack.length - 1] || 0);
            stack.push(last, newScore);
        } else if (op === "D") {
            stack.push((stack[stack.length - 1] || 0) * 2);
        } else if (op === "C") {
            stack.pop();
        } else {
            stack.push(parseInt(op));
        }   
      }
    return stack.reduce((a, b) => a + b, 0);
};