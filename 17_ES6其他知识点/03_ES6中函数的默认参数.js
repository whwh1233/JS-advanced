function foo(m, n = 30) {
  // // ES5 的默认值赋值
  // 1.不好读
  // 2.有 bug 0/null/''
  // m = m || "aaa";
  // n = n || "bb";
  console.log(m, n);
}
foo(20);
foo(2, 43);
// 函数解构的默认值
function printInfo({ name = "12", age = 10 } = {}) {
  console.log(name, age);
}

printInfo({ name: "kkk" });
// 默认规范：有默认值的形参最后放在最后面，这样就可以省略最后一个参数来使用默认值了

// 有默认值的函数length属性  默认值及之后的就不算到length里了
function baz(x, y, z = 30, m, n) {
  console.log(x, y, z);
}
console.log(baz.length);
