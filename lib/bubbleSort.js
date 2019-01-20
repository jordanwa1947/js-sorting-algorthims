pry = require('pryjs')

function oneRound(numbers, length) {
  for(i = 0; i < length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      let smallInt = numbers[i + 1];
      let largeInt = numbers[i];
      numbers.splice(i, 2, smallInt, largeInt);
      oneRound(numbers, length)
    }
  }
  return numbers; 
}

function bubbleSort(array) {
  length = array.length;
  var result = oneRound(array, length);
  return result;
}

module.exports = bubbleSort;
