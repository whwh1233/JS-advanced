// require的函数的返回值就是why文件中返回的这个对象，指向相同
const why = require('./why')
console.log(why);

setTimeout(() => {
  console.log(why);
}, 2000);



// 原理就是引用的赋值
