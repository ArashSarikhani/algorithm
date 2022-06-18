//is  32-bit integer
function is32BitInteger(num) {
  return num >= -2147483648 && num <= 2147483647;
}

//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0
function reverse(x) {
  let result = 0;
  let isNegative = x < 0;
  let abs = Math.abs(x);
  let reversedNum = parseInt(abs.toString().split("").reverse().join(""));
  if (reversedNum >= -2147483648 && reversedNum <= 2147483647) {
    result = isNegative ? -reversedNum : reversedNum;
  }
  return result;
}
