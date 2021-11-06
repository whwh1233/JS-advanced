// ES6之前，对象的属性名
// var obj = {
//   name: "wh",
//   age: 18,
// };
// // 字符串的属性名很容易重复,容易造成属性名的冲突
// console.log(obj);
// obj["name"] = "james";
// console.log(obj);
// ES6 中 Symbol的使用,symbol每次使用时，都会创建一个独一无二的值
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2);

// 还可以传入一个描述符
const s3 = Symbol("aaa");
console.log(s3.description);

// 3. symbol 来作为key
const obj = {
  [s1]: "abc",
  [s2]: "cbs",
};

obj[s3] = "aaa";
const s4 = Symbol();
Object.defineProperty(obj, s4, {
  value: "whwh",
  enumerable: true,
  writable: true,
  configurable: true,
});
console.log(obj);
// 就是不能通过 obj.s1 的语法来寻找
console.log(obj[s1]);
// 使用symbol作为key的值，在遍历，object.keys是获取不到的
console.log(Object.getOwnPropertySymbols(obj));
// 只能这样获取 symbol 的key  取到这个数组再去遍历

// 可以这样生成一个相同的symbol,for 以及 keyfor的方法
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
const key = Symbol.keyFor(sa);
console.log(key);
const sc = Symbol.for(key);
console.log(sa === sb);
console.log(sa === sc);
