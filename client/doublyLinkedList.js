/* eslint-disable max-classes-per-file */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length -= 1;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let node;
    if (index <= Math.floor(this.length / 2)) {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        current = current.next;
        counter += 1;
      }
      node = current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (index < counter) {
        current = current.prev;
        counter -= 1;
      }
      node = current;
    }

    return node;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  print() {
    const arr = [];
    let counter = 0;
    let current = this.head;
    while (counter < this.length) {
      arr.push(current);
      current = current.next;
      counter += 1;
    }

    console.log(arr);
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;

    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length -= 1;
    return removedNode;
  }
}

export default DoublyLinkedList;
