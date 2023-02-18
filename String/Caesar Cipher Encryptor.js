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

//Array of Alphabet Method:
//TIME: O(n) - going through array once
//SPACE: O(n) - make an array the size of String
function caesarCipherEncryptor(string, key) {
  let newLetters = [];
  let newKey = key % 26;
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (var i = 0; i < string.length; i++) {
    newLetters.push(getNewLetter(string[i], newKey, alphabet));
  }
  return newLetters.join("");
}

function getNewLetter(letter, key, alphabet) {
  let newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}
