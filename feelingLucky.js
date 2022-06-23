//input [['cheryl-daugherty', 35],['lisa-daugherty', 64],['miss-debbie-medhurst', 25],['dr--allison-yundt', 32],]
//output 'lisa-daugherty'
function solve(arrOfApplicationScores) {
  let sort = arrOfApplicationScores.sort((a, b) => a[1] - b[1]);
  let mostRelatedApplicationName = sort[sort.length - 1][1];
  return mostRelatedApplicationName;
}
function solve(arrOfApplicationScores) {
  return mostRelatedApplicationName;
}
