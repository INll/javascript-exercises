const fibonacci = function(num) {
  if (num < 0) {
    return 'OOPS';
  }
  let output = 1;
  let prev = 0;
  let curr = 1;

  for (let i = 0; i < Number(num) - 1; i++) {
    output = prev + curr;
    prev = curr;
    curr = output;
  }
  return output;
};

// Do not edit below this line
module.exports = fibonacci;
