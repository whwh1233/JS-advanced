var foo = "foo";
if (true) {
  // 此处就是暂时性死区
  console.log(foo);
  // let foo = "abc";
}

function bar() {
  console.log(foo);
  let foo = "sss";
}
bar();
