function divClick() {
  console.log('第二种点击方式');
}
const el = document.querySelector('.parent')
// DOM0  会把之前的覆盖
el.onclick = function() {
  console.log('第三种方式');
}
// DOM2 继承自EventTarget的好处
// el.addEventListener('click',function() {
//   console.log('第三种点击方式');
// })
