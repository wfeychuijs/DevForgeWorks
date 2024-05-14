function combinationSum3(k, n) {
  const result = [];
  backtrack([], 1, k, n);
  return result;
  function backtrack(combination, start, k, n) {
    if (n === 0 && k === 0) {
      result.push([...combination]);
      return;
    }
    if (n < 0 || k === 0) return;
    for (let i = start; i <= 9; i++) {
      combination.push(i);
      backtrack(combination, i + 1, k - 1, n - i);
      combination.pop();
    }
  }
}
