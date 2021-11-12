// import {name,age,foo,Person} from './foo.js'


// import函数返回一个 Promise 函数，异步下载代码，进行回调
import('./foo.js').then(res => {
  console.log('res:',res.name)
})
console.log('后续代码的开始');
console.log(name);
// console.log('why:',foo());
console.log('后续代码是不会执行的');


// import 是一个对象  {url:'当前模块所在的路径'}
console.log(import.meta);
