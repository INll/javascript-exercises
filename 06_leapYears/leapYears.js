const leapYears = function(year) {
  if (!(year % 4)) {
    if (!(year % 100)) {
      if (!(year % 400)) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
