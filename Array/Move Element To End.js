//TIME: O(n) - Searching through array from the start and end and meeting in the middle
//SPACE: O(1) - Not creating extra space
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] == toMove && array[right] == toMove && left != right) {
      right--;
    } else if (array[left] != toMove) {
      left++;
    } else if (array[left] == toMove && array[right] != toMove) {
      let swappedValue = array[left];
      array[left] = array[right];
      array[right] = swappedValue;
      left++;
      right--;
    }
  }
  return array;
}
