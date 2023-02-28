//TIME: O(n + m)  - n is the size of set. m is the length of the longest word in words.
//SPACE: O(n + m)  - n is the size of set. m is the length of the longest word in words.
function semordnilap(words) {
  let mySet = new Set(words);
  let myPairs = [];

  for (var i = 0; i < words.length; i++) {
    let reverse = words[i].split("").reverse().join("");

    if (mySet.has(reverse) && reverse !== words[i]) {
      myPairs.push([reverse, words[i]]);
      mySet.delete(reverse);
      mySet.delete(words[i]);
    }
  }
  return myPairs;
}
