function minWindow(s, t) {
  const map = new Map();
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let required = map.size;
  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let substrStart = 0;
  while (right < s.length) {
    const char = s[right];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) required--;
    }
    while (required === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        substrStart = left;
      }
      const leftChar = s[left];
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1);
        if (map.get(leftChar) > 0) required++;
      }
      left++;
    }
    right++;
  }
  return minLen === Infinity
    ? ""
    : s.substring(substrStart, substrStart + minLen);
}
