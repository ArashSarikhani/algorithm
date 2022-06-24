// return all permutations of a array
// Language: javascript
function permutations(arr) {
  let result = [];
  if (arr.length === 1) {
    return [arr];
  }
  for (let i = 0; i < arr.length; i++) {
    let rest = permutations(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let j = 0; j < rest.length; j++) {
      result.push([arr[i]].concat(rest[j]));
    }
  }
  return result;
}
