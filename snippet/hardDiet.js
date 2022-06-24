const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (s) => {
  let a = s.split("");
  let thirdCondition = a.some((element) => element === "G");
  if (!thirdCondition) {
    res = "nakhor lite";
    console.log(res);
    return;
  }
  let lengthOfR = a.filter((element) => element === "R").length;
  let lengthOfY = a.filter((element) => element === "Y").length;
  if (lengthOfR >= 3) {
    res = "nakhor lite";
    console.log(res);
    return;
  } else if (lengthOfR >= 2 && lengthOfY >= 2) {
    res = "nakhor lite";
    console.log(res);
    return;
  }
  res = "rahat baash";
  console.log(res);
  return;
  readline.close();
});
