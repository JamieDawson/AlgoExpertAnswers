//Hashmap method
//TIME: O(n) - going through array
//SPACE: O(1) - only creating hash with 26 characters.
function firstNonRepeatingCharacter(string) {
  let myHash = {};

  for (var i = 0; i < string.length; i++) {
    if (!myHash[string[i]]) {
      myHash[string[i]] = 1;
    } else {
      myHash[string[i]] += 1;
    }
  }

  for (var i = 0; i < string.length; i++) {
    if (myHash[string[i]] == 1) {
      return i;
    }
  }
  return -1;
}

//Brute force options - loop in a loop.
//TIME: O(n^2) - loop in a loop.
//SPACE: O(1) - No extra space.
function firstNonRepeatingCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    let checkDup = false;
    for (var j = 0; j < string.length; j++) {
      if (string[i] == string[j] && i !== j) {
        checkDup = true;
      }
    }
    if (checkDup == false) {
      return i;
    }
  }
  return -1;
}
