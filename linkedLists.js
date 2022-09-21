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

  return {
    append
  }
}

// Test Script
const list = LinkedList();
list.append(5);
list.append(6);
list.append(9);
list.append(12);
list.append(18);
