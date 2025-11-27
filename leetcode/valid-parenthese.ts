function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (char === map[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
