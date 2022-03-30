const sumAll = function(int1, int2) {
  if (typeof int1 != "number" || 
      typeof int2 != "number" ||
      int1 < 0 || int2 < 0 ) {
    return "ERROR";
  } else {
    let sum = 0;
    diff = Math.abs(int2 - int1);
    for (let i = Math.min(int1, int2); 
        i <= diff + 1; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;