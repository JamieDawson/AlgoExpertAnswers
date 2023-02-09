//Solution 1:
//TIME: O(n log n) - using .sort() which uses O(n log n)
//SPACE: O(n) - Createing an array the size of array.
function sortedSquaredArray(array) {
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr[i] = array[i] * array[i];
  }
  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}

//Solution 2:
//TIME: O(n) - Goping through array once.
//SPACE: O(n) - creating an array the size of aray
function sortedSquaredArray(array) {
  let sortedSquares = [];

  for (var i = 0; i < array.length; i++) {
    sortedSquares[i] = 0;
  }

  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (var i = array.length - 1; i >= 0; i--) {
    let smallVal = array[smallerValueIdx];
    let largeVal = array[largerValueIdx];

    if (Math.abs(smallVal) > Math.abs(largeVal)) {
      sortedSquares[i] = smallVal * smallVal;
      smallerValueIdx++;
    } else {
      sortedSquares[i] = largeVal * largeVal;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}
