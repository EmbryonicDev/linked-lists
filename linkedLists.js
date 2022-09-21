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

  return {
    append,
    prepend,
    get size() { return size },
    get head() { return head.value }
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
