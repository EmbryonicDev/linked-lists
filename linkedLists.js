const Node = (value = null, nextNode = null) => {
  return {
    value,
    nextNode
  }
}

const LinkedList = () => {
  head = null;
  size = 0;

  append = (value) => {
    const newNode = Node(value);

    if (head == null) head = newNode;
    else {
      let pointer = head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
    size++
  }

  prepend = (value) => {
    const newNode = Node(value, head);
    head = newNode;
    size++
  }

  tail = () => {
    let pointer = head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  }

  at = (index) => {
    let pointer = head;
    let indexCounter = 0;

    while (indexCounter < index) {
      pointer = pointer.nextNode;
      indexCounter++;
    }
    return pointer.value;
  }

  pop = () => {
    let pointer = head;
    let tailIndex = 0;

    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
      tailIndex++;
    }

    let indexCounter = 0;
    pointer = head;

    while (indexCounter < tailIndex - 1) {
      pointer = pointer.nextNode;
      indexCounter++;
    }
    size--;
    return pointer.nextNode = null;
  }

  contains = (value) => {
    let pointer = head;

    while (pointer.value !== value) {
      pointer = pointer.nextNode;
      if (pointer.nextNode == null && pointer.value !== value)
        return false;
    }
    return true;
  }

  find = (value) => {
    let indexCounter = 0;
    let pointer = head;

    while (pointer.value !== value) {
      pointer = pointer.nextNode;
      if (pointer.nextNode == null && pointer.value !== value)
        return null;
      indexCounter++;
    }
    return indexCounter;
  }

  toString = () => {
    let myString = '';
    let pointer = head;

    while (pointer.nextNode !== null) {
      myString += `( ${pointer.value} ) -> `
      pointer = pointer.nextNode;
    }
    return myString += `( ${pointer.value} ) -> null`
  }

  insertAt = (value, index) => {
    let pointer = head;
    let indexCounter = 0;

    if (index == 0)
      head = Node(value, pointer);

    while (indexCounter < index - 1) {
      pointer = pointer.nextNode;
      indexCounter++;
    }
    let tempNodes = pointer.nextNode;
    pointer.nextNode = Node(value, tempNodes);
    size++
  }

  removeAt = (index) => {
    let pointer = head;
    indexCounter = 0;

    if (index == 0)
      head = head.nextNode;

    while (indexCounter < index - 1) {
      pointer = pointer.nextNode;
      indexCounter++;
    }
    let tempNodes = pointer.nextNode.nextNode;
    pointer.nextNode = tempNodes;
    size--;
  }

  return {
    append,
    prepend,
    get size() { return size },
    get head() { return head.value },
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  }
}

// Test Script
const list = LinkedList();
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);

list.prepend(3);
list.prepend(2);
list.prepend(1);
list.prepend(0);

console.log('List values in string: ' + list.toString());
console.log("Size: " + list.size);
console.log("Head: " + list.head);
console.log('Tail: ' + list.tail());
console.log('Value At index 3: ' + at(3));
console.log('Execute "list.pop()" -> ')
list.pop();
console.log(list.toString());
console.log('New Tail: ' + list.tail());
console.log('New Size After Pop: ' + list.size);
console.log('List contains 5 -> ' + list.contains(5));
console.log('List contains 100 -> ' + list.contains(100));
console.log('Find index of value: 6 -> ' + list.find(6));
console.log('Find index of value: 666 -> ' + list.find(666));
console.log('Execute "list.insertAt("inserted value", 5)" -> ')
list.insertAt('inserted value', 5)
console.log(list.toString());
console.log('New Size After insert: ' + list.size);
console.log('Execute "list.removeAt(5)" -> ')
list.removeAt(5)
console.log(list.toString());
console.log('New Size After removal: ' + list.size);
