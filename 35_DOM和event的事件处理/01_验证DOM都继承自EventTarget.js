document.addEventListener('click',function() {
  console.log('document被点击');
})


const divEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

divEl.addEventListener('click',function() {
  console.log('parent被点击');
})

childEl.addEventListener('click',function() {
  console.log('child被点击');
})
