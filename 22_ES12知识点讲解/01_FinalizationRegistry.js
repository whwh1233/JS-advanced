let obj = {
  name: "wh",
  age: 123,
};
let info = {
  age: 1,
};
// 对象销毁时，执行一个回调
// 对象需要使用一个类
const fr = new FinalizationRegistry((e) => {
  console.log("有注册在finalizationregistry这里的对象被销毁了");
  console.log(e);
});

// 回调函数传入的参数
fr.register(obj, "obj");
fr.register(info, "info");
// 等一会 这个对象就会被 GC 销毁掉
obj = null;
info = null;
