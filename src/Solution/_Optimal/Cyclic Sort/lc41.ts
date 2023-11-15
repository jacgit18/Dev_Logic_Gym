// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

export const firstMissingPositive = (nums: number[]): number => {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Swap elements to their correct positions
      const temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }

  // Find the first index where the element doesn't match its position
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }

  // If all elements are in their correct positions, return the next positive integer
  return n + 1
}

// Example usage:
console.log(firstMissingPositive([1, 2, 0])) // Output: 3
console.log(firstMissingPositive([3, 4, -1, 1])) // Output: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])) // Output: 1
