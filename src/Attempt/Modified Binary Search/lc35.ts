// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

const searchInsertBruteForce = (nums: number[], target: number): number => {
  return 0
}

const searchInsertNaive = (nums: number[], target: number): number => {
  return 0
}

const searchInsertOptimal = (nums: number[], target: number): number => {
  return 0
}

// Example usage:
// const example1 = searchInsert([1, 3, 5, 6], 5)
// console.log(example1)

// const example2 = searchInsert([1, 3, 5, 6], 2)
// console.log(example2)

// const example3 = searchInsert([1, 3, 5, 6], 7)
// console.log(example3)


export const searchInsert = {
  searchInsertBruteForce,
  searchInsertNaive,
  searchInsertOptimal
}