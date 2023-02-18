//TIME: O(n) - going through array once.
//SPACE: O(n) - Technically it's O(2n) because if we had a string like "ABCD", it would be "1A1B1C1D", but we just take out the 2 and make it O(n).

//NOTES: Using a array instead of a an empty string + .concat() method because strings are immutable.
function runLengthEncoding(string) {
  let arr = [];
  let length = 1;

  for (var i = 1; i < string.length; i++) {
    let currentVal = string[i];
    let previousVal = string[i - 1];

    if (currentVal !== previousVal || length === 9) {
      arr.push(length);
      arr.push(previousVal);
      length = 0;
    }
    length++;
  }

  arr.push(length);
  arr.push(string[string.length - 1]);
  return arr.join("");
}
