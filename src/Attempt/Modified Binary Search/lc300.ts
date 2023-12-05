// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

const lengthOfLISBruteForce = (nums: number[]): number => {
  return 0
}

const lengthOfLISNaiveImp = (nums: number[]): number => {
  return 0
}

const lengthOfLISNaiveDec = (nums: number[]): number => {
  return 0
}

const lengthOfLISOptimal = (nums: number[]): number => {
  return 0
}

// Example usage:
// const nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
// console.log(lengthOfLIS(nums1)) // Output: 4

// const nums2 = [0, 1, 0, 3, 2, 3]
// console.log(lengthOfLIS(nums2)) // Output: 4

// const nums3 = [7, 7, 7, 7, 7, 7, 7]
// console.log(lengthOfLIS(nums3)) // Output: 1


export const lengthOfLIS = {
  lengthOfLISBruteForce,
  lengthOfLISNaiveImp,
  lengthOfLISNaiveDec,
  lengthOfLISOptimal
}