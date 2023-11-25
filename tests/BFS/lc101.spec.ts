import { generateTestCases, TestCase } from "../../lib/genTest";
import { OptimalBFSAttempt } from "../../src/Attempt/BFS";
import { OptimalBFS_Solution } from "../../src/Solution/BFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {
  const treeOne = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)));

  const treeTwo = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3)));

  
  const testCases:  TestCase[]  = [
    { params: treeOne,  expected: true },
    // { params: treeTwo,  expected: false }

  ];

    generateTestCases(OptimalBFSAttempt.lc101.isSymmetricNaive, testCases,' Attempt ');
    generateTestCases(OptimalBFS_Solution.lc101, testCases,' Solution ',);


  

};

runTestCases();