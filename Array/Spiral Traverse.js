//TIME: O(n) - even with mulitple for loops, we only visit all the numbers in the array one time.
//SPACE: O(n) - the result away contains all the numbers in the 2D array that's passed in.
function spiralTraverse(array) {
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  let result = [];

  while (startRow <= endRow && startCol <= endCol) {
    for (var col = startCol; col <= endCol; col++) {
      console.log("1st");
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      console.log("2nd");
      result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startRow; col--) {
      console.log("3rd");
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      console.log("4th");
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}
