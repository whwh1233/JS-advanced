const weakset = new WeakSet();
const set = new Set();
// 1.weakset只能存放对象
// weakset.add(10);
let obj = { name: "wh" };
weakset.add(obj);
set.add(obj);
// 2.对对象是弱引用 weak reference   GC 时候可以回收他，不认为这是一条引用
console.log(weakset);
console.log(set);
obj = null;
// weakset 就找不到了，但是set可以找到
console.log(weakset);
console.log(set);
// weakset没有遍历，只有 add has delete
// 3.应用场景
const personSet = new WeakSet();
class Person {
  constructor() {
    personSet.add(this);
  }
  running() {
    if (personSet.has(this)) {
      console.log("running", this);
    } else {
      throw new Error("不能用非构造方法调用这个方法");
    }
  }
}
const p = new Person();
p.running();
p.running.call({ name: "wh" });
