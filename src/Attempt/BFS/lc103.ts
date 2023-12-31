// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

import { TreeNode } from "../../../src/util/BinaryTreeMaker"

const zigzagLevelOrderBruteForce = (root: TreeNode | null): number[][] => {
  return [[0]]
}

const zigzagLevelOrderNaiveImp = (root: TreeNode | null): number[][] => {
  return [[0]]
}

const zigzagLevelOrderNaiveDec = (root: TreeNode | null): number[][] => {
  return [[0]]
}

const zigzagLevelOrderOptimal = (root: TreeNode | null): number[][] => {
  return [[0]]
}

export const zigzagLevelOrder = {
  zigzagLevelOrderBruteForce,
  zigzagLevelOrderNaiveImp,
  zigzagLevelOrderNaiveDec,
  zigzagLevelOrderOptimal,
}

// Example usage:
const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log(zigzagLevelOrder(root1)) // Output: [[3], [20, 9], [15, 7]]

// const root2 = new TreeNode(1)
// console.log(zigzagLevelOrder(root2)) // Output: [[1]]

// const root3 = null
// console.log(zigzagLevelOrder(root3)) // Output: []
