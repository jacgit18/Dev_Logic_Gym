// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 *     12 bfs vist each level
 *   /    \
 *  7       1
 * / \     / \
  9  null 10  5 
 / \      / \ / \
0   null--------null
Input: root = [12,7,1,9,null,10,5]
Output: [[12],[7,1],[9,10,5]]

dfs vist each side completley before other side


*/
import { TreeNode } from "../../../src/util/BinaryTreeMaker"

// depth tracking
const levelOrderBottomBruteForce = (root: TreeNode | null): number[][] => {
  return [[0]]
}

const levelOrderBottomNaiveImp = (root: TreeNode | null): number[][] => {
  return [[0]]
}

const levelOrderBottomNaiveDec = (root: TreeNode | null): number[][] => {
  return [[0]]
}

const levelOrderBottomOptimal = (root: TreeNode | null): number[][] => {
  return [[0]]
}

export const levelOrderBottom = {
  levelOrderBottomBruteForce,
  levelOrderBottomNaiveImp,
  levelOrderBottomNaiveDec,
  levelOrderBottomOptimal,
}

let root = new TreeNode(12)
root.left = new TreeNode(7)
root.left.left = new TreeNode(9)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

// console.log(levelOrderBottom(root))
