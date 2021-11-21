const divEl = document.querySelector('.box')

// 常见的属性
console.log(divEl.id);
console.log(divEl.tagName);
console.log(divEl.children);
console.log(divEl.classList);
console.log(divEl.clientHeight);
console.log(divEl.offsetLeft);

// 常见的方法
const attrs = divEl.getAttribute('class')
console.log(attrs);
divEl.setAttribute('height',188)
