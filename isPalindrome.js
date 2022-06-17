//Given a string s, return the longest palindromic substring in s.
function isPalindrome(s) {
  var left = 0;
  var right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
function mapToSubstring(s) {
  var result = [];
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      result.push(s.substring(i, j + 1));
    }
  }
  let filter = result.filter(
    (s) =>
      function isPalindrome(s) {
        var left = 0;
        var right = s.length - 1;
        while (left < right) {
          if (s[left] !== s[right]) {
            return false;
          }
          left++;
          right--;
        }

        return true;
      }
  );
  const longest = filter.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });

  return longest;
}

function longestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let sub = s.substring(i, j + 1);
      if (isPalindrome(sub) && sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
}
