// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

const checkInclusionBruteForce = (s1: string, s2: string): boolean => {
  return true
}

const checkInclusionNaiveImp = (s1: string, s2: string): boolean => {
  return true
}

const checkInclusionNaiveDec = (s1: string, s2: string): boolean => {
  return true
}

const checkInclusionOptimal = (s1: string, s2: string): boolean => {
  return true
}

// let s1 = "ab",
//   s2 = "eidbaooo",
//   s3 = "eidboaoo" // swap a with a for s3 would be false

// console.log(checkInclusion(s1, s2)) // true
// console.log(checkInclusion(s1, s3)) // false

export const checkInclusion = {
  checkInclusionBruteForce,
  checkInclusionNaiveImp,
  checkInclusionNaiveDec,
  checkInclusionOptimal,
}
