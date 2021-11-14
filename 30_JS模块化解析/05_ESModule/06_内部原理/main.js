import {name,age} from './foo.js'



console.log(name);
console.log(age);


setTimeout(() => {
  console.log(age);
}, 2000);


// 导入者不可以修改导出的值，但导出者可以
setTimeout(() => {
  age = 18
}, 4000);
