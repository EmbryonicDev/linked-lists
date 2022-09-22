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
      let position = head;
      while (position.nextNode !== null) {
        position = position.nextNode;
      }
      position.nextNode = newNode;
    }
    size++
  }

  prepend = (value) => {
    const newNode = Node(value, head);
    head = newNode;
    size++
  }

  tail = () => {
    let position = head;
    while (position.nextNode !== null) {
      position = position.nextNode;
    }
    return position;
  }

  at = (index) => {
    let position = head;
    let indexCounter = 0;

    while (indexCounter < index) {
      position = position.nextNode;
      indexCounter++;
    }
    return position.value;
  }

  return {
    append,
    prepend,
    get size() { return size },
    get head() { return head.value },
    tail,
    at
  }
}

// Test Script
const list = LinkedList();
list.append(5);
list.append(6);
list.append(9);
list.append(12);
list.append(17);

list.prepend(21);
list.prepend(4);
list.prepend(8);
list.prepend(30);
console.log(list.size);
console.log(list.head);
console.log(list.tail());
console.log(at(6));
