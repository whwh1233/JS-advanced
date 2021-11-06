function foo(m, n, x) {
  console.log(m, n, x, "1111111");
}

foo("wh", "123");

// 另外一种调用函数的方式
// 第一个参数是，模板字符串，只是被分成了多份
// 第二个参数以及后面的参数就是嵌入的变量
const name = "ad";
foo`whhw${name}12${name}33`;
