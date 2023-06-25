// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// a. 1 <= s.length <= 10^5
// b. s consists of only lowercase English letters.

// Note: Create a GitHub file for the solution and add the file link the the answer section below.

function firstUniqChar(s) {
  const charCount = {};

  // Count the frequency of each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character and return its index
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  // If no non-repeating character is found, return -1
  return -1;
}

// Example usage:
const s = "leetcode";
console.log(firstUniqChar(s)); // Output: 0
