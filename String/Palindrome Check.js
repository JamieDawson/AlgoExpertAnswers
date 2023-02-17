//Create two pointers. One for the start and end. Compare them as they move to the middle.
//TIME: O(n) - Going through string once.
//SPACE: O(1) - Only creating two pointers.
function isPalindrome(string) {
  let start = 0;
  let end = string.length - 1;

  while (start <= end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

//Reverse array method
//TIME: O(n) - Go through string once.
//SPACE: O(n) - Create array the size of string.

function isPalindrome(string) {
  let reverseChars = [];

  for (var i = string.length - 1; i >= 0; i--) {
    reverseChars.push(string[i]);
  }

  return string == reverseChars.join("");
}

//Reverse String method
//TIME: O(n^2) - JavaScript strings are immutable. Once a String object is assigned to String reference the object value cannot be changed.
//SPACE: O(n) - Creating a string the same length as the input string.
function isPalindrome(string) {
  let reverseString = "";

  for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i]; //technically recreating a new string here.
  }
  return string == reverseString;
}

//Tail Recursive method:
//TIME: O(n) - going through string once.
//SPACE: O(1).  Regular recursion could be O(n) because of the call stack. But with the function call being at the end it can be O(1).
let isPalindrome = function (string, i = 0) {
  let j = string.length - 1 - i;

  if (i >= j) {
    return true;
  }
  if (string[i] !== string[j]) {
    return false;
  }
  return isPalindrome(string, i + 1);
};

let test = "abcdefghihgfeddcba";
console.log(isPalindrome(test));
