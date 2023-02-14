//Solution 1:
//TIME: O(nLogn) - .sort() does this
//SPACE: O(1)

function nonConstructibleChange(coins) {
  coins.sort(function (a, b) {
    return a - b;
  });
  let currentChangeCreated = 0;

  for (var i = 0; i < coins.length; i++) {
    if (coins[i] > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coins[i];
  }
  return currentChangeCreated + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
