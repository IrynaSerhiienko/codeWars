function rentalCarCost(d) {
  switch (true) {
    case d >= 7:
      return d * 40 - 50;
      break;
    case d >= 3:
      return d * 40 - 20;
      break;
    case d >= 1:
      return d * 40;
      break;
    default:
      console.log('Error');
      break;
  }
}
