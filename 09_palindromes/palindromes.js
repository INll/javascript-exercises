const palindromes = function (str) {
  let processed = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case ' ':
      case ',':
      case '.':
      case '!':
        continue;
      default:
        processed += str[i];
    }
  }
  processed = processed.toLowerCase();

  let reversed = '';
  for (let j = str.length - 1; j >= 0 ; j--) {
    switch (str[j]) {
      case ' ':
      case ',':
      case '.':
      case '!':
        continue;
      default:
        reversed += str[j];
    }
  }
  reversed = reversed.toLowerCase();

  if (reversed === processed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
