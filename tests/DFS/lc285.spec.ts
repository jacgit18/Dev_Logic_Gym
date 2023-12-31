import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptDFS } from "../../src/Attempt/DFS";
import { SolutionDFS } from "../../src/Solution/DFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {
  const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
  const p1 = new TreeNode(1)

  // Alt Manual way to assign nodes in tree
  const root2 = new TreeNode(5);
  root2.left = new TreeNode(3);
  root2.right = new TreeNode(6);
  root2.left.left = new TreeNode(2);
  root2.left.right = new TreeNode(4);
  root2.left.left.left = new TreeNode(1);
  const p2 = new TreeNode(6)



  const testCasePlaceholder:  TestCase[]  = [
    { params: root1, paramsTwo: p1, expected: null },
  ];


  const testCasePerformance:  TestCase[]  = [
    { params: root1, paramsTwo: p1, expected: 2, performance: true },
  ];
  
  const testCases:  TestCase[]  = [
    { params: root1, paramsTwo: p1, expected: 2 },
    { params: root2, paramsTwo: p2, expected: null },
  ];


    generateTestCases(AttemptDFS.lc285.inorderSuccessorBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
    generateTestCases(AttemptDFS.lc285.inorderSuccessorNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');
  
    // generateTestCases(AttemptDFS.lc285.inorderSuccessorNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptDFS.lc285.inorderSuccessorNaiveDec, testCasePerformance, ' Optimal Code Attempt ');

    generateTestCases(SolutionDFS.lc285, testCases,' Solution ',);


  

};

runTestCases();
