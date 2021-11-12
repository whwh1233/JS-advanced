// 使用另外一个模块
// const why = require('./why')
const {name,age,sum} = require('./why')

// console.log(why.aaa)
console.log(name);
console.log(age);
console.log(sum(2,7));


// CommonJS 同步引入的方式不太适合 浏览器，
// 适合服务器的原因：服务器中的文件都存储在本地，因此不会存在网络请求js文件阻塞的过程
