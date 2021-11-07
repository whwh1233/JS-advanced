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
