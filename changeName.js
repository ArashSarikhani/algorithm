function solve(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key.replace(/(^\w|-\w)/g, clearAndUpper)] = changeName(obj[key]);
    } else {
      newObj[key.replace(/(^\w|-\w)/g, clearAndUpper)] = obj[key];
    }
  }
  return newObj;
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}
