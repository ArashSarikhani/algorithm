//swap two numbers without using a temporary variable
function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
}
