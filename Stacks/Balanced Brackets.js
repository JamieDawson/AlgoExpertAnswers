function balancedBrackets(string) {
  let myStack = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
      myStack.push(string[i]);
    }
    if (string[i] === ")") {
      if (myStack[myStack.length - 1] !== "(") {
        return false;
      } else {
        myStack.pop();
      }
    }
    if (string[i] === "]") {
      if (myStack[myStack.length - 1] !== "[") {
        return false;
      } else {
        myStack.pop();
      }
    }
    if (string[i] === "}") {
      if (myStack[myStack.length - 1] !== "{") {
        return false;
      } else {
        myStack.pop();
      }
    }
  }

  if (myStack.length > 0) {
    return false;
  }
  return true;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
