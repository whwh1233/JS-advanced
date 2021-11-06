var name = "wh";
var age = 18;

var obj = {
  // 1.属性的简写
  name,
  age,
  // 2.方法的简写,不要把简写和箭头函数弄混了
  foo() {
    console.log(this);
  },
  // foo: function () {},
  baz: () => {
    console.log(this);
  },
  // 3.计算属性名
  [name + 123]: "h2hh2",
};

console.log(obj);
obj.baz();
obj.foo();
