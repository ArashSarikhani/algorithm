//Container With Most Water
//given an integer array height  There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i])
//find the maximum area of water that can be trapped in the container
//Input: [1,8,6,2,5,4,8,3,7]
//Output: 49

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (height) => {
  const myArray = height.replace("[","").replace("]","").split(",");
  let maxArea = 0;
  let left = 0;
  let right = myArray.length - 1;
  console.log(myArray);
  while (left < right) {
    let area = Math.min(myArray[left], myArray[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (myArray[left] < myArray[right]) {
      left++;
    } else {
      right--;
    }
  }
  console.log(maxArea);
  readline.close();
});
