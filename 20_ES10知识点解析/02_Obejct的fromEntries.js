// const info = {
//   name: "wh",
//   age: 18,
// };
// const en = Object.entries(info);
// console.log(en);
// const newObj = {};
// for (e of en) {
//   newObj[e[0]] = e[1];
// }

// console.log(newObj);
// // 从 entries 中恢复回对象
// const newObj2 = Object.fromEntries(en);
// console.log(newObj2);

// 应用场景
const queryString = "name=why&age=18";
const queryParams = new URLSearchParams(queryString);
for (const query of queryParams) {
  console.log(query);
}
console.log(queryParams);
console.log(Object.fromEntries(queryParams));
