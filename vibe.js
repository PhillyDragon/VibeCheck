function vibeCheck() {
  var precision = 100; // 2 decimals
  var randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
  
  return "Random number is: " + randomnum;
}

vibeCheck();
