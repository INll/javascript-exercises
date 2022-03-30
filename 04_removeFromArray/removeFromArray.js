const removeFromArray = function(arr, ...args) {
  let output = arr;
  for (i = 0; i < args.length; i++){
    output = output.filter(x => x !== args[i])
  }
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;