/* eslint-disable max-classes-per-file */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;

    if (this.length === 0) this.tail = null;

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let current = this.head;

    while (i < index) {
      current = current.next;
      i += 1;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode === null) return false;

    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length -= 1;

    return removedNode;
  }

  reverse() {
    let prevNode = this.head;
    let current = prevNode.next;
    let nextNode = current.next;

    this.tail = this.head;
    this.tail.next = null;

    while (current.next) {
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
      nextNode = current.next;
    }

    current.next = prevNode;
    this.head = current;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

export default SinglyLinkedList;

/* ------ PSEUDO ------ */

/*

declare prevNode init with head
declare current init with heads next value
declare nextNode init currents next node

have tail become head
have tails next value point to null

while current does NOT point to null
  have current point to prev
  have prev become current
  have current become nextNode
  have nextNode become currents next node

have current point to prevNode
have current become head

*/

/* ------ IOCE ------ */

/*
  in:
    - none
  out:
    - nothing
  cons:
    - must be reversed in place
  edge:
    -
*/
