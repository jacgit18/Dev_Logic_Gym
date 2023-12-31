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

import { ListNode } from "../../../src/util/LinkedListMaker"

export const reverse_sub_list = (head: ListNode | null, p: number, q: number): ListNode | null => {
  if (p === q) {
    return head
  }

  let current: ListNode | null = head
  let previous: ListNode | null = null

  let i = 0
  while (current !== null && i < p - 1) {
    previous = current
    current = current.next
    i += 1
  }

  const last_node_of_first_part: ListNode | null = previous

  const last_node_of_sub_list: ListNode | null = current
  let next: ListNode | null = null
  i = 0

  while (current !== null && i < q - p + 1) {
    next = current.next
    current.next = previous
    previous = current
    current = next
    i += 1
  }

  if (last_node_of_first_part !== null) {
    last_node_of_first_part.next = previous
  } else {
    head = previous
  }

  if (last_node_of_sub_list !== null) {
    last_node_of_sub_list.next = current
  }

  return head
}

let head: ListNode | null = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
