const getTheTitles = function(arr) {
   output = [];
   for (let book of arr) {
     output.push(book.title);
   }
   return output;
};

// Do not edit below this line
module.exports = getTheTitles;
