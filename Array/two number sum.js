//Solutin 1:
//Time complexity: O(n^2) - A loop in a loop
//Space complexity: O(1) - Not creating any extra space.
function twoNumberSum(array, targetSum) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

//Solution 2:
//Time: O(n) - going through loop once
//Space: O(n) - adding values to a set.
function twoNumberSum(array, targetSum) {
  let mySet = new Set();

  for (var i = 0; i < array.length; i++) {
    let curr = array[i];
    let find = targetSum - curr;

    if (mySet.has(find)) {
      return [curr, find];
    } else {
      mySet.add(curr);
    }

    console.log(mySet);
  }

  return [];
}

//Solution 3:
//Space: O(1) Not creating extra space.
//Time: O(n log n)
function twoNumberSum(array, targetSum) {
  array = array.sort(function (a, b) {
    return a - b;
  });

  let left = 0;
  let right = array.length - 1;

  while (left <= right && right >= left) {
    let leftVal = array[left];
    let rightVal = array[right];
    let compare = leftVal + rightVal;

    if (compare === targetSum) {
      return [array[left], array[right]];
    }
    if (compare < targetSum) {
      left++;
    }
    if (compare > targetSum) {
      right--;
    }
  }
  return [];
}
