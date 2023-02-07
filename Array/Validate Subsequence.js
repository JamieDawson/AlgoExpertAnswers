function isValidSubsequence(array, sequence) {
  let lengthChecker = sequence.length;
  let sequenceChecker = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == sequence[sequenceChecker]) {
      sequenceChecker++;
      if (sequenceChecker == lengthChecker) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

/*
  TIME: O(n) -Lenght of main array.
  SPACE: O(1)
  */
