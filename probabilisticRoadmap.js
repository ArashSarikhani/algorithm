const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (num) => {
  n = parseInt(num);
  let x = parseInt(n / 2);
  res = (x + 1) * (n - x + 1);
  console.log(res);
  readline.close();
});
