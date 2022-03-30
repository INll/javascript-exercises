const ftoc = function(temp) {
  let output = Number((temp - 32) * (5 / 9));
  if (Number.isSafeInteger(output)) {
    return Math.round(output);
  } else {
    return Number(output.toFixed(1));
  }
};

const ctof = function(temp) {
  let output = Number((temp * (9 / 5) + 32))
  if (Number.isSafeInteger(output)) {
    return Math.round(output);
  } else {
    return Number(output.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
