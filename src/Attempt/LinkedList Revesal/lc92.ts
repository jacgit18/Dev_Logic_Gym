// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

import { LinkedListNode } from "../../../src/util/LinkedListMaker"

const reverse_sub_listBruteForce = (
  head: LinkedListNode | null,
  p: number,
  q: number,
): LinkedListNode | null => {
  return null
}

const reverse_sub_listNaive = (
  head: LinkedListNode | null,
  p: number,
  q: number,
): LinkedListNode | null => {
  return null
}

const reverse_sub_listOptimal = (
  head: LinkedListNode | null,
  p: number,
  q: number,
): LinkedListNode | null => {
  return null
}

let head: LinkedListNode | null = new LinkedListNode(1)
head.next = new LinkedListNode(2)
head.next.next = new LinkedListNode(3)
head.next.next.next = new LinkedListNode(4)
head.next.next.next.next = new LinkedListNode(5)

export const reverse_sub_list = {
  reverse_sub_listBruteForce,
  reverse_sub_listNaive,
  reverse_sub_listOptimal
}