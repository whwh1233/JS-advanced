// 对象销毁时，执行一个回调
// 对象需要使用一个类
const fr = new FinalizationRegistry((e) => {
  console.log("有注册在finalizationregistry这里的对象被销毁了");
  console.log(e);
});

let obj = {
  name: "wh",
  age: 123,
};
// 强引用，不会被GC销毁
let info = new WeakSet();
info.add(obj);
let info2 = new WeakRef(obj);
// 拿到弱引用的原来对象
// 如果原对象没有被销毁，那就是原对象
// 如果原对象被销毁了，那就是undefined
// setTimeout(() => {
//   console.log(info2.deref());
// }, 10000);
console.log(info2.deref());
fr.register(obj, "obj");
obj = null;
