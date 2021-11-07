// weakmap的key 只能是对象，而且对对象的引用是弱引用
// const map = new WeakMap();
// const map2 = new Map();
// // let obj1 = { name: "wh" };
// const obj2 = { name: "222" };
// map2.set(obj1, "obj111");
// map.set(obj1, "obj1");
// // obj1 = null;
// console.log(map2);
// console.log(map);

// console.log(map.get(obj1));
// console.log(map.has(obj1));
// console.log(map.delete(obj1));
// 应用场景，vue3响应式原理
let obj1 = {
  name: "wh",
  age: 18,
};
function obj1NameFn1() {
  console.log("obj1NameFn1被执行");
}
function obj1NameFn2() {
  console.log("obj1NameFn2被执行");
}
function obj1AgeFn1() {
  console.log("obj1AgeFn1被执行");
}
function obj1AgeFn2() {
  console.log("obj1AgeFn2被执行");
}
let obj2 = {
  name: "22",
  age: 20,
  height: 188,
};
function obj2NameFn1() {
  console.log("obj2NameFn1被执行");
}
function obj2NameFn2() {
  console.log("obj2NameFn2被执行");
}
function obj2AgeFn1() {
  console.log("obj2AgeFn1被执行");
}
function obj2AgeFn2() {
  console.log("obj2AgeFn2被执行");
}

// 响应式的原理
// 1. 创建weakmap
const weakmap = new WeakMap();
// 2. 收集数据依赖
// 2.1 obj1的属性变化触发函数
const obj1Map = new Map();
obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
weakmap.set(obj1, obj1Map);

// 2.2 obj2的属性变化触发函数
const obj2Map = new Map();
obj2Map.set("name", [obj2NameFn1, obj2NameFn2]);
obj2Map.set("age", [obj2AgeFn1, obj2AgeFn2]);
weakmap.set(obj2, obj2Map);

// 3. 如果obj1 的name 改变了
obj1.name = "james";
const targetMap = weakmap.get(obj1);
const fns = targetMap.get("name");
fns.forEach((fn) => {
  fn();
});
