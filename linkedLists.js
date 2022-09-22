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

  return {
    append,
    prepend,
    get size() { return size },
    get head() { return head.value },
    tail,
    at,
    pop
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
console.log("Size: " + list.size);
console.log("Head: " + list.head);
console.log('Tail: ' + list.tail());
console.log('At: ' + at(8));
list.pop();
