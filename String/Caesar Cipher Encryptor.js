//Unicode method
//TIME: O(n) - Going through string once.
//SPACE: O(n) - Creating an array size of string.
function caesarCipherEncryptor(string, key) {
  let newLetters = [];
  console.log("key is: " + key);
  let newKey = key % 26;
  console.log("newKey is: " + newKey);
  for (var i = 0; i < string.length; i++) {
    newLetters.push(getNewLetter(string[i], newKey));
  }
  return newLetters.join("");
}

function getNewLetter(letter, key) {
  let newLetterCode = letter.charCodeAt(letter) + key;
  if (newLetterCode <= 122) {
    return String.fromCharCode(newLetterCode);
  } else {
    return String.fromCharCode(96 + (newLetterCode % 122));
  }
}
