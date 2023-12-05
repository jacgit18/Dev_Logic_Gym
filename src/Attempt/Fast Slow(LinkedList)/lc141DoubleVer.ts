import { DoublyLinkedListNode } from "../../../src/util/DoubleLinkedListMaker"

const isDoublyCyclicBruteForce = (head: DoublyLinkedListNode | null): boolean => {
  return true
}

const isDoublyCyclicNaiveImp = (head: DoublyLinkedListNode | null): boolean => {
  return true
}

const isDoublyCyclicNaiveDec = (head: DoublyLinkedListNode | null): boolean => {
  return true
}


const isDoublyCyclicOptimal = (head: DoublyLinkedListNode | null): boolean => {
  return true
}

export const isDoublyCyclic = {
  isDoublyCyclicBruteForce,
  isDoublyCyclicNaiveImp,
  isDoublyCyclicNaiveDec,
  isDoublyCyclicOptimal
}

// Example usage:
// const doublyExample1 = new DoublyLinkedListNode(1)
// doublyExample1.next = new DoublyLinkedListNode(2)
// doublyExample1.prev = doublyExample1.next
// doublyExample1.next.next = new DoublyLinkedListNode(3)
// doublyExample1.next.prev = doublyExample1
// doublyExample1.next.next.next = doublyExample1 // creating a doubly cyclic linked list

// console.log(isDoublyCyclic(doublyExample1)) // Output: true

// const doublyExample2 = new DoublyLinkedListNode(1)
// doublyExample2.next = new DoublyLinkedListNode(2)
// doublyExample2.prev = doublyExample2.next
// doublyExample2.next.next = new DoublyLinkedListNode(3)
// doublyExample2.next.prev = doublyExample2
// doublyExample2.next.next.next = doublyExample2.next // creating a doubly cyclic linked list

// console.log(isDoublyCyclic(doublyExample2)) // Output: true

// const doublyExample3 = new DoublyLinkedListNode(1)

// console.log(isDoublyCyclic(doublyExample3)) // Output: false
