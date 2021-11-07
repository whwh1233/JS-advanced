const names = ["a", "b", "c", "d", NaN];
if (names.indexOf("a") !== -1) {
  console.log("包含");
}
// 此处无法判断
if (names.indexOf(NaN) !== -1) {
  console.log("包含");
}

// 第二个参数：从第几个开始查找
console.log(names.includes("b", 3));
console.log(names.includes(NaN));
