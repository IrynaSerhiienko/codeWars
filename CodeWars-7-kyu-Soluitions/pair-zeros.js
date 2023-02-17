const pairZeros = (arr, flag) =>
arr.filter(val => val || (flag = !flag));

// const pairZeros = (arr, count = 1) => arr.filter(el => el || count++ % 2)