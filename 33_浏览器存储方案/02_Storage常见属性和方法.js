// 1. setItem getItem
localStorage.setItem('name','hw')
localStorage.setItem('age',19)
// 2. length
console.log(localStorage.length);

for(let i = 0 ;i < localStorage.length;i ++) {
  const key = localStorage.key(i)
  console.log(localStorage.getItem(key));
}

// 3. key方法
console.log(localStorage.key(0));

// 4. getItem
console.log(localStorage.getItem('age'));


// 5.remove
localStorage.removeItem('age')
// 6.clear
localStorage.clear()
