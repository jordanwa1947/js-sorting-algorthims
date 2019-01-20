pry = require('pryjs')

function quickSort (numbers) {
  var start = 0;
  var end = numbers.length - 1;
  var pivot = Math.floor((end)/2);
  return oneRound(start, end, pivot, numbers);
}

function oneRound (start, end, pivot, numbers) {
  var pivotNumber = numbers[pivot]
  while (start < pivot && end > pivot) {
    var frontNumber = numbers[start];
    var backNumber = numbers[end];
    if (frontNumber > pivotNumber) {
      numbers.splice(start, 1);
      numbers.splice(end, 0, frontNumber);
      end--;
    } else if (backNumber < pivotNumber){
      numbers.splice(end, 1);
      numbers.splice(start, 0, backNumber);
      start++;
    } else {
      start++;
      end--;
    }
  }
  // if (end - start < 2) {
  //   return numbers;
  // } else {
  //   newPivot = Math.floor((pivot)/2);
  //   oneRound(start, pivot, start)
  //   oneRound(start, pivot, newPivot)
  // }
}

module.exports = quickSort;
