import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";
import { generateTestCases, TestCase } from "../../util/genTest";


const runTestCases = () => {
  const testCasePlaceholder: TestCase[]  = [
    { params: ["araaci", 2], expected: 0 },
  ];

  const testCases: TestCase[]  = [
    { params: ["araaci", 2], expected: 4 },
    { params: ["araaci", 1], expected: 2 },
    { params: ["cbbebi", 3], expected: 5 },
    { params: ["aaaaa", 1], expected: 5 }, // All characters are the same
    { params: ["abc", 0], expected: 0 }, // Window size is zero
    { params: ["", 1], expected: 0 }, // Empty string

    // Failing cases
    // { params: ["abcd", 5], expected: 0 }, // Window size is larger than the string
    // { params: ["abacabadabacaba", 2], expected: 7 }, // Generic case with repeating characters
    // { params: ["abcde", 3], expected: 5 }, // Generic case with no repeating characters

    
    // Add more test cases here
  ];


  generateTestCases(OptimalSlidingWindowAttempt.lc340, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc340, testCases, ' Solution ');


};

runTestCases();
