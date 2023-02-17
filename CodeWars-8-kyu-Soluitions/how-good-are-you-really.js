function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let sum = classPoints.reduce((total, num) => total + num, 0);
  let average = sum / classPoints.length;
  return yourPoints > average ? true : false;
}
