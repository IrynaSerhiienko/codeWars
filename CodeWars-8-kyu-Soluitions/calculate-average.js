function findAverage(array) {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a + b, 0) / array.length;
}
findAverage([1, 2, 3, 4, 5, 6]);
