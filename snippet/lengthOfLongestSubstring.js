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
