


window.addEventListener('click',function(){})

window.removeEventListener('click',function(){})


window.addEventListener('wh',function() {
  console.log('whwh');
})
window.dispatchEvent(new Event('wh'))
