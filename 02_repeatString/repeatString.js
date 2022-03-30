const repeatString = function(str, rep) {
  if (rep <0) {
    return 'ERROR';
  } else {
    let output = '';
    for (let i = 0; i < rep; i++) {
      output += str;
    }
    return output;
  }
};

// Do not edit below this line
module.exports = repeatString;
