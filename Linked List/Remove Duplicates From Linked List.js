// This is an input class. Do not edit.
//TIME: O(n) - going through linked list once
//SPACE: O(1) -
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode != null) {
    let nextUniqueNode = currentNode.next;
    while (
      nextUniqueNode !== null &&
      currentNode.value == nextUniqueNode.value
    ) {
      nextUniqueNode = nextUniqueNode.next;
    }
    currentNode.next = nextUniqueNode;
    currentNode = nextUniqueNode;
  }
  return linkedList;
}
