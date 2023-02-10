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
  let newArr = [];

  for (var i = 0; i < array.length; i++) {
    newArr[i] = 0;
  }

  let smallIndex = 0;
  let largeIndex = array.length - 1;

  for (var i = array.length - 1; i >= 0; i--) {
    let small = array[smallIndex];
    let large = array[largeIndex];

    if (Math.abs(small) > Math.abs(large)) {
      newArr[i] = small * small;
      smallIndex++;
    } else {
      newArr[i] = large * large;
      largeIndex--;
    }
  }

  return newArr;
}
