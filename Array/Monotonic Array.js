//TIME: O(n) - Going through array once
//SPACE: O(1) - Not creating space the size of the array.
function isMonotonic(array) {
  let isGoingUpwards = true;
  let isGoingDownwards = true;

  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      isGoingUpwards = false;
    }
    if (array[i] > array[i + 1]) {
      isGoingDownwards = false;
    }
  }

  if (isGoingDownwards == true || isGoingUpwards == true) {
    return true;
  }
  return false;
}
