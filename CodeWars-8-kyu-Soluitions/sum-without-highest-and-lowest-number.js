function sumArray(array) {
  if (!array || array.length === 0 || array.length < 2) {
    return 0;
  } else {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const sum = array.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum - max - min;
  }
}
sumArray([6, 2, 1, 8, 10]);
