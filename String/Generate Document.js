//TIME: O(n + m) - n is document and m is characters.
//SPACE: O(c) - c is unique characters for hashmap
function generateDocument(characters, document) {
  let characterCount = {};

  for (var i = 0; i < characters.length; i++) {
    if (!characterCount[characters[i]]) {
      characterCount[characters[i]] = 1;
    } else {
      characterCount[characters[i]] += 1;
    }
  }

  console.log(characterCount);
  for (var i = 0; i < document.length; i++) {
    if (!characterCount[document[i]] || characterCount[document[i]] === 0) {
      return false;
    }
    characterCount[document[i]]--;
  }
  return true;
}

//Two loops and a set method
//TIME: O(c * (n + m)) - c is number of unique characters in document
//SPACE: O(c) - c is number of unique characters in document
function generateDocument(characters, document) {
  let characterFreq;
  let documentFreq;
  let alreadyCounted = new Set();

  for (var i = 0; i < document.length; i++) {
    if (!alreadyCounted.has(document[i])) {
      console.log(document[i]);
      documentFreq = letterCount(document[i], document);
      characterFreq = letterCount(document[i], characters);
    }
    if (documentFreq > characterFreq) {
      return false;
    }
    alreadyCounted.add(document[i]);
  }
  return true;
}

function letterCount(sentLetter, sentString) {
  let freq = 0;
  for (var i = 0; i < sentString.length; i++) {
    if (sentLetter == sentString[i]) {
      freq++;
    }
  }
  return freq;
}

//Two loops and no set method
//TIME: O(m * (n + m)) = m is lenght of doucment, n is lenght of characters
//SPACE: O(1) - not making any extra space.
function generateDocument(characters, document) {
  let characterFreq;
  let documentFreq;

  //m from this loop
  for (var i = 0; i < document.length; i++) {
    //(n + m) from these two calls.
    console.log(document[i]);
    documentFreq = letterCount(document[i], document);
    characterFreq = letterCount(document[i], characters);

    if (documentFreq > characterFreq) {
      return false;
    }
  }
  return true;
}

function letterCount(sentLetter, sentString) {
  let freq = 0;
  for (var i = 0; i < sentString.length; i++) {
    if (sentLetter == sentString[i]) {
      freq++;
    }
  }
  return freq;
}
