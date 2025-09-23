function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (const char of s) {
    const last = stack[stack.length - 1];
    if (last && map[last] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
}
