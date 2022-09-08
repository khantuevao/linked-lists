function Node(val) {
  const value = val || null
  const nextNode = null

  return {value, nextNode}
}

function LinkedList() {
  //first node in list
  let head = null
  //last node in list
  const tail = () => {
    let pointer = head
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode
    }
    return pointer
  }
  //number of nodes in list
  let size = 0

  //adds a node with value to the end
  function append(val) {
    const newNode = Node(val)
    //if list is empty, make new node the head of the list
    if (head === null) {
      head = newNode
    //else search for the end of the list and add node
    } else {
      let pointer = head
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode
      }
      pointer.nextNode = newNode
    }
    size++
  }

  //adds a node with value to the start
  function prepend(val) {
    const newNode = Node(val)
    newNode.nextNode = head
    head = newNode
    size++
  }

  //return node at given index
  function at(index) {
    let count = 0
    let pointer = head
    while (count < index) {
      pointer = pointer.nextNode
      count++
    }
    return pointer
  }

  //remove last element
  function pop() {
    let currPointer = head
    let nextPointer = head.nextNode
    while (nextPointer.nextNode !== null) {
      currPointer = currPointer.nextNode
      nextPointer = nextPointer.newNode
    }
    currPointer.nextNode = null
    size--
  }

  //search list if value exists
  function contains(val) {
    let pointer = head
    while (pointer !== null) {
      if (pointer.value === val) return true
      pointer = pointer.nextNode
    }
    return false
  }

  //search list & return index of node with given value
  function find(val) {
    let count = 0
    let pointer = head
    while (pointer !== null) {
      if (pointer.value === val) return count

      pointer = pointer.nextNode
      count++
    }
    return null
  }

  //represent list as strings to print them out
  function toString() {
    let pointer = head
    let string = ''
    while (pointer !== null) {
      string += `( ${pointer.value} ) -> `
      pointer = pointer.nextNode
    }
    return `${string}null`
  }

  //insert node at given index
  function insertAt(val, index) {
    if (index === 0) {
      prepend(val)
      return
    }

    const nodeBefore = at(index - 1)
    const newNode = Node(val)
    newNode.nextNode = nodeBefore.nextNode
    nodeBefore.nextNode = newNode
    size++
  }

  function removeAt(index) {
    if (index === 0) {
      head = head.nextNode
      return
    }

    const nodeBefore = at(index - 1)
    nodeBefore.nextNode = nodeBefore.nextNode.nextNode
    size--
  }

  return {append, prepend, size, head, tail, at, pop, contains, find, toString}
}