//find the length of the longest substring
//without repeating characters
// with reduce function
//input: "abcabcbb"
//output: 3
//explanation: the longest substring without repeating characters is "abc", which the length is 3.
function lengthOfLongestSubstring(s) {
  return s.split("").reduce((acc, curr, i) => {
    if (acc.indexOf(curr) === -1) {
      acc.push(curr);
    } else {
      acc = acc.slice(acc.indexOf(curr) + 1);
      acc.push(curr);
    }
    return acc.length > acc ? acc : acc;
  }, []).length;
}

//without reduce function
function lengthOfLongestSubstring(s) {
  let longest = 0;
  let current = 0;
  let seen = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (seen[letter]) {
      current = Math.max(current, seen[letter]);
    }
    seen[letter] = i + 1;
    longest = Math.max(longest, i - current + 1);
  }
  return longest;
}

const subStrOfUniqueChar = (str) =>
  [...str].reduce((p, c) =>
    p.includes(c) ? ((p += c), p.substr(p.indexOf(c) + 1)) : (p += c)
  );


  isSubstring = (str1, str2) => {
    return str1.includes(str2);
  }