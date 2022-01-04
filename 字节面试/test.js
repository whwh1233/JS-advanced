// var a = {x:1}
// var b = a;
// // a = a.x = {x:1}
// a.x = {x:1}
// a = a.x
// console.log(a);   // {x:1}
// console.log(b);   // {x:{x:1}}
// function a() {
//   this.b = 3
// }
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a()
// console.log(b)
// console.log(c.b)


// console.log(1)
// new Promise((resolve)=>{
//  resolve();
//  console.log(2)
// }).then(()=>{
//  console.log(3)
// })
// setTimeout(()=>{
//  console.log(4)
// },0)
// console.log(5)


// setTimeout(()=>{
//   setTimeout(() => {
//     console.log('console1');
//   }, 0)
//   console.log('console2');
//   setTimeout(() => {
//     console.log('console3');
//   }, 200)
// },0)
// setTimeout(() => {
//   console.log('console4');
// }, 200);
// console.log('console5')

// setTimeout(function(){console.log(1)},0);
// new Promise(function(resolve,reject){
//    console.log(2);
//    resolve();
// }).then(()=> {console.log(3)})
// .then(()=> {console.log(4)})
// .then(()=> {console.log(5)});

// // process.nextTick(function(){console.log(5)});

// console.log(6);
//输出2,6,5,3,4,1


// new Promise((resolve, reject) => {
//   resolve()
// }).then(() => {
//   console.log('A')
//   new Promise((resolve, reject) => {
//       resolve()
//   }).then(() => {
//       console.log('B')
//   }).then(() => {
//       console.log('C')
//   })
// }).then(() => {
//   console.log('D')
// })



let a = 1
function b() {
  console.log(a);
}

function c() {
  let a = 2
  b()
  console.log(a);
}

c()
