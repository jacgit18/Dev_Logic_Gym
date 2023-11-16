// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

export const fourSum = (nums: number[], target: number): number[][] => {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue // Skip duplicates
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue // Skip duplicates
      }

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            left++ // Skip duplicates
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right-- // Skip duplicates
          }
          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return result
}

// Example usage:
// const nums1 = [1, 0, -1, 0, -2, 2]
// const target1 = 0
// const result1 = fourSum(nums1, target1)
// console.log(result1)

// const nums2 = [2, 2, 2, 2, 2]
// const target2 = 8
// const result2 = fourSum(nums2, target2)
// console.log(result2)
