const reverseString = function(str) {
  let output = '';
  for (let i = str.length - 1; i > -1; i--) {
    output += str[i];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
