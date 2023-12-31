// The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.

// For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.
// Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence).

// A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.

// Example 1:

// Input: nums = [4,2,5,3]
// Output: 7
// Explanation: It is optimal to choose the subsequence [4,2,5] with alternating sum (4 + 5) - 2 = 7.

// Example 2:

// Input: nums = [5,6,7,8]
// Output: 8
// Explanation: It is optimal to choose the subsequence [8] with alternating sum 8.

// Example 3:

// Input: nums = [6,2,1,2,4,5]
// Output: 10
// Explanation: It is optimal to choose the subsequence [6,1,5] with alternating sum (6 + 5) - 1 = 10.

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105

export const maxAlternatingSum = (nums: number[]): number => {
  let evenSum = 0 // Sum of elements at even indices
  let oddSum = 0 // Sum of elements at odd indices

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      // Update even sum for even indices
      evenSum = Math.max(evenSum + nums[i], oddSum)
    } else {
      // Update odd sum for odd indices
      oddSum = Math.max(oddSum + nums[i], evenSum)
    }
  }

  // Return the maximum alternating sum
  return Math.max(evenSum, oddSum)
}

// Example usage:
// console.log(maxAlternatingSum([4, 2, 5, 3]));   // Output: 7
// console.log(maxAlternatingSum([5, 6, 7, 8]));   // Output: 8
// console.log(maxAlternatingSum([6, 2, 1, 2, 4, 5])); // Output: 10
