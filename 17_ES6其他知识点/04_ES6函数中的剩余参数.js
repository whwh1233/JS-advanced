function foo(m, n, ...args) {
  console.log(m, n, args);
  console.log(arguments);
}

foo(1, 2, 3, 4, 5);
// arguments 不是一个真正的数组
// args 是一个真正的没有被分配的实参的数组，而且必须放到最后
