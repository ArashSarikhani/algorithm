function RemoveDublicates(arr) {
  var unique_array = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) == -1) {
      unique_array.push(arr[i]);
    }
  }
  return unique_array;
}
