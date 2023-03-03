//Store in a Set method
//TIME: O(n) - Looping through array once
//SPACE: O(n) - the set at worse could be size of the array.
function firstDuplicateValue(array) {
  let mySet = new Set();

  for (var i = 0; i < array.length; i++) {
    if (!mySet.has(array[i])) {
      mySet.add(array[i]);
    } else {
      return array[i];
    }
  }
  return -1;
}

//For loop inside for loop method. Create checker to check the
//first instance of a duplicate
//TIME: O(n^2) - loop in a loop
//SPACE: O(1) - Not creating anything the size of the array.
function firstDuplicateValue(array) {
  let minimumIndex = array.length;

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        if (j < minimumIndex) {
          minimumIndex = j;
        }
      }
    }
  }
  if (minimumIndex < array.length) {
    return array[minimumIndex];
  }
  return -1;
}

//If you find an array index that is negative, return it.
//TIME: O(n) - loop through array once.
//SPACE: O(1) - Not creating additional space the size of the array.
function firstDuplicateValue(array) {
  for (var i = 0; i < array.length; i++) {
    const absValue = Math.abs(array[i]);
    if (array[absValue - 1] < 0) {
      return absValue;
    }
    array[absValue - 1] *= -1;
  }
  return -1;
}
