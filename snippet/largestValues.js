//Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
function largestValues(root) {
  var result = [];
  var queue = [];
  queue.push(root);
  while (queue.length > 0) {
    var max = -Infinity;
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      max = Math.max(max, node.val);
    }
    result.push(max);
  }
  return result;
}
