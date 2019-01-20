pry = require('pryjs')

function oneRound (numbers, length, i) {
  var length = numbers.length;
  if (i === 0) {
    i++;
    oneRound(numbers, length, i);
  } else if (i < length){
    swapSmaller(numbers, i);
    i++;
    oneRound(numbers, length, i);
  }
  return numbers;
}

function swapSmaller(numbers, i) {
  var j = i;
  while(numbers[j] < numbers[j - 1]) {
    let smallInt = numbers[j];
    let largeInt = numbers[j - 1];
    numbers.splice(j - 1, 2, smallInt, largeInt);
    j--
  }
}

function insertionSort (array) {
  var length = array.length;
  var i = 0;
  return oneRound(array, length, i);
}

module.exports = insertionSort;
