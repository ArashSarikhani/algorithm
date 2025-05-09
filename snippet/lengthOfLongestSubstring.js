//find the length of the longest substring
//without repeating characters
// with reduce function
//input: "abcabcbb"
//output: 3
//explanation: the longest substring without repeating characters is "abc", which the length is 3.
function lengthOfLongestSubstring(s) {
  return s.split("").reduce(
    ({ window, max }, char) => {
      const index = window.indexOf(char);
      if (index !== -1) {
        window = window.slice(index + 1);
      }
      window.push(char);
      return {
        window,
        max: Math.max(max, window.length),
      };
    },
    { window: [], max: 0 }
  ).max;
}

function lengthOfLongestSubstring(s) {
  let seen = new Map();
  let maxLen = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
