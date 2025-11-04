function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isAlphaNumeric = (char: string): boolean => /[a-zA-Z0-9]/.test(char);
  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    } else if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
