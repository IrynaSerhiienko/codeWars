function reverseWords(str) {
  const reversedWords = str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
  return reversedWords;
}
