// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

const insertInterval = (intervals: number[][], newInterval: number[]): number[][] => {
  return [[0]]
}

const insertInterval = (intervals: number[][], newInterval: number[]): number[][] => {
  return [[0]]
}

const insertInterval = (intervals: number[][], newInterval: number[]): number[][] => {
  return [[0]]
}

// // Example usage:
// const example1 = insertInterval(
//   [
//     [1, 3],
//     [6, 9],
//   ],
//   [2, 5],
// )
// console.log(example1) // Output: [[1, 5], [6, 9]]

// const example2 = insertInterval(
//   [
//     [1, 2],
//     [3, 5],
//     [6, 7],
//     [8, 10],
//     [12, 16],
//   ],
//   [4, 8],
// )
// console.log(example2) // Output: [[1, 2], [3, 10], [12, 16]]


export const nextGreatestLetter = {
  BruteForce,
  Naive,
  Optimal
}