pry = require('pryjs')

function mergeSort(numbers) {
  var middle = Math.floor(numbers.length/2)
  var front = numbers.slice(0, middle)
  var back = numbers.slice(middle)
  if (numbers.length <= 1) return numbers;
  return merge(
    mergeSort(front),
    mergeSort(back)
  );
}

function merge (front, back) {
  var sorted = [];
  var i = 0;
  var j = 0;
  while (i < front.length && j < back.length ) {
    if (front[i] < back[j]) {
      sorted.push(front[i]);
      i++;
    } else {
      sorted.push(back[j]);
      j++;
    }
  }
  return sorted.concat(front.slice(i)).concat(back.slice(j));
}


module.exports = mergeSort;
