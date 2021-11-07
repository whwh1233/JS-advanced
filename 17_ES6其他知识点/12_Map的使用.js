// 对象只能使用 字符串 作为键值  ES6新增了 Symbol
const obj1 = { name: "wh" };
const obj2 = { name: "2222" };
// const info = {
//   [obj1]: "aaa",
//   [obj2]: "bbb",
// };
// console.log(info);
const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "bb");
map.set(1, "ccc");

// 也可以传入数组
// const map2 = new Map([
//   [obj1, "aaa"],
//   [obj2, "ddd"],
//   [2, "ccc"],
// ]);

// console.log(map2);

map.set("aaa", "sddsd");

console.log(map);

console.log(map.get("aaa"));
console.log(map.has("aaa"));
map.delete("aaa");
console.log(map);
map.forEach((key, item) => console.log(key, item));
for (const item of map) [console.log(item)];
// 数组可以直接解构
for (const [key, value] of map) {
  console.log(key, "+++", value);
}
map.clear();
console.log(map);
