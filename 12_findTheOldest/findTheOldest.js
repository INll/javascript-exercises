const findTheOldest = function(people) {
  let oldestPersonName = '';
  people.reduce((oldestAge, currObj) => {
    if (currObj.yearOfDeath === undefined) {
      if (new Date().getFullYear() - currObj.yearOfBirth > oldestAge) {
        oldestPersonName = currObj.name;
        return new Date().getFullYear() - currObj.yearOfBirth; 
      }
    } else if (currObj.yearOfDeath - currObj.yearOfBirth > oldestAge) {
      oldestPersonName = currObj.name;
      return currObj.yearOfDeath - currObj.yearOfBirth;
    }
    return oldestAge;
  }, 0)
  return people.find(e => e.name === oldestPersonName);
};

// Do not edit below this line
module.exports = findTheOldest;
