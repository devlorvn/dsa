function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) {
    return "";
  }

  const need: Record<string, number> = {};
  for (const char of t) {
    need[char] = (need[char] ?? 0) + 1; // đếm số lần xuất hiện của mỗi ký tự trong t
  }

  const window: Record<string, number> = {}; // đếm số lần xuất hiện của mỗi ký tự trong cửa sổ hiện tại

  let have = 0; // số ký tự đã thỏa mãn điều kiện
  const needCount = Object.keys(need).length; // số ký tự cần thỏa mãn

  let resLength = Infinity; // độ dài nhỏ nhất của cửa sổ thỏa mãn
  let resStart = 0; // vị trí bắt đầu của cửa sổ nhỏ nhất
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    window[char] = (window[char] ?? 0) + 1;

    if (need[char] && window[char] === need[char]) {
      have++; // nếu ký tự hiện tại thỏa mãn điều kiện, tăng biến đếm have
    }

    while (have === needCount) {
      // khi tất cả ký tự đều thỏa mãn điều kiện, thu hẹp cửa sổ từ bên trái
      const windowLength = r - l + 1;
      if (windowLength < resLength) {
        resLength = windowLength;
        resStart = l; // cập nhật vị trí bắt đầu của cửa sổ nhỏ nhất
      }

      const leftChar = s[l];
      window[leftChar]--;
      if (need[leftChar] && window[leftChar] < need[leftChar]) {
        have--; // nếu ký tự bên trái không còn thỏa mãn điều kiện, giảm biến đếm have
      }
      l++;
    }
  }
  return resLength === Infinity ? "" : s.substring(resStart, resStart + resLength);
}
