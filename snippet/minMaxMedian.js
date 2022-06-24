function solve(arr) {
  let sort = arr.sort((a, b) => a - b);
  let min;
  let max;
  let median = Math.floor(sort.length / 2);
  if (sort.length % 2 === 0) {
    min = sort[0];
    max = sort[sort.length - 1];
    median = (sort[median - 1] + sort[median]) / 2;
  } else {
    min = sort[0];
    max = sort[sort.length - 1];
    median = sort[median];
  }
  return { min, max, median };
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (data) => {
  main(data.trim());

  readline.close();
});

function main(line) {
  const { min, max, median } = solve(JSON.parse(line));

  console.log(JSON.stringify({ min, max, median }));
}

//give one unSorted array of integers return the median of the array and max and min of the array
//Input: [0,1,15,6]
// output: return {min: 0,max: 15,median: 3.5}
// Input: [18,15,9]
// output: return {min: 9,max: 18,median: 15}
