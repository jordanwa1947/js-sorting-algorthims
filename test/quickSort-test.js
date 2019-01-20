var expect = require('chai').expect;
var quickSort = require('../lib/quickSort');

describe('quickSort', function () {
  it ('should sort numbers in ascending order', function () {
    var numbers = [2, 5, 1, 3, 10, 7, 8, 6, 2, 9, 3, 3]

    var sortedNumbers = quickSort(numbers);
    var json = JSON.stringify(sortedNumbers);

    expect(json).to.be.equal(JSON.stringify([ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8, 9]));
  });
});
