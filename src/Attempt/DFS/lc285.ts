// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

// The successor of a node p is the node with the smallest key greater than p.val.

// Example 1:

// Input: root = [2,1,3], p = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], p = 6
// Output: null
// Explanation: There is no in-order successor of the current node, so the answer is null.

// Note:

// If the given node has no in-order successor in the tree, return null.
// It's guaranteed that the values of the tree are unique.

import { TreeNode } from "../../../src/util/BinaryTreeMaker"

const inorderSuccessorBruteForce = (root: TreeNode | null, p: TreeNode | null): TreeNode | null => {
  return null
}

const inorderSuccessorNaiveImp = (root: TreeNode | null, p: TreeNode | null): TreeNode | null => {
  return null
}

const inorderSuccessorNaiveDec = (root: TreeNode | null, p: TreeNode | null): TreeNode | null => {
  return null
}

const inorderSuccessorOptimal = (root: TreeNode | null, p: TreeNode | null): TreeNode | null => {
  return null
}

export const inorderSuccessor = {
  inorderSuccessorBruteForce,
  inorderSuccessorNaiveImp,
  inorderSuccessorNaiveDec,
  inorderSuccessorOptimal,
}

// Example usage:
// const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
// const p1 = new TreeNode(1)

// const root2 = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6))
// const p2 = new TreeNode(6)

// console.log(inorderSuccessor(root1, p1)) // Output: 2
// console.log(inorderSuccessor(root2, p2)) // Output: null
