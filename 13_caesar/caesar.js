const caesar = function(str, dist) {
  let outputStr = '';

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      // Preserve punctuations
      case ' ':
      case ',':
      case '!':
      case '.':
        outputStr += str[i];
        continue;
      default:
        // Handle large numbers
        if (dist > 26 || dist < -26) {
          dist %= 26;
        }
        let originalVal = str.charCodeAt(i)
        let shiftedVal = originalVal + dist;
        // Handle overflow and underflow
        if (originalVal >= 65 && originalVal <= 90) {
          if (shiftedVal > 90) {
            shiftedVal -= 26;
          } else if (shiftedVal < 65) {
            shiftedVal += 26;
          }
          outputStr += String.fromCharCode(shiftedVal);
          continue;
        }
        if (originalVal >= 90 && originalVal <= 122) {
          if (shiftedVal > 122) {
            shiftedVal -= 26;
          } else if (shiftedVal < 90) {
            shiftedVal += 26;
          }
          outputStr += String.fromCharCode(shiftedVal);
          continue;
        }
      }
    }
    return outputStr;
  };

// Do not edit below this line
module.exports = caesar;
