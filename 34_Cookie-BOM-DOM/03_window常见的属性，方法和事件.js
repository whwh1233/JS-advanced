// console.log(window.screenX);
// console.log(window.screenY);

// window.addEventListener('scroll',function() {
//   console.log(window.scrollX,window.scrollY);
// })


// 整个浏览器的高度
console.log(window.outerHeight);
// 显示页面的高度
console.log(window.innerHeight);


// const scrollBtn = document.querySelector('#scroll')
// scrollBtn.onclick = function() {
//   // 1.scrollTop
//   // window.scrollTo({top:200})
//   // 2.
//   // window.close()
//   // 3.
//   window.open("https://www.baidu.com","_self")
// }


// 常见的事件
// window.onload = function() {
//   console.log('页面被加载了');
// }
// window.onfocus = function() {
//   console.log('获得焦点');
// }
// window.onblur = function() {
//   console.log('失去焦点');
// }
location.hash = 'aaa'
window.onhashchange = function() {
  console.log('hash 改变');
}
