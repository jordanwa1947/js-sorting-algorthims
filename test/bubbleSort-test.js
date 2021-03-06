var expect = require('chai').expect;
var bubbleSort = require('../lib/bubbleSort');

describe('bubbleSort', function () {
  it ('should sort numbers in ascending order', function () {
    var numbers = [2, 5, 1, 3, 10, 7, 8, 6, 2, 9, 3, 3];
    var sorted = [1, 2, 2, 3, 3, 3, 5, 6, 7, 8, 9, 10]; 

    var sortedNumbers = bubbleSort(numbers);
    var json = JSON.stringify(sortedNumbers);

    expect(json).to.be.equal(JSON.stringify(sorted));
  });
});
