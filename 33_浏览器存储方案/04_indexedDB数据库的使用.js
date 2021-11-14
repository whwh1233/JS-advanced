// 打开数据库，（和数据库建立连接）
const dbRequest = indexedDB.open('wh')  // 有就打开，没有创建
dbRequest.onerror = function(err){
  console.log('打开失败');
}
let db = null
dbRequest.onsuccess = function(event) {
  console.log('打开成功');
  db = event.target.result
}

// 第一次打开、或者版本发生更新
dbRequest.onupgradeneeded = function(event) {
  const db = event.target.result

  // 创建一些存储对象   keyPath相当于主键
  db.createObjectStore('users',{keyPath:'id'})
}

class User {
  constructor(id,name,age){
    this.id = id
    this.name = name
    this.age = age
  }
}

const users = [
  new User(1,'a',1),
  new User(2,'b',2),
  new User(3,'c',3)
]

// 获取btns，监听点击
const btns = document.querySelectorAll('button')
for(let i = 0 ; i < btns.length ; i ++) {
  btns[i].onclick = function() {
    const transaction = db.transaction('users','readwrite')
    const store = transaction.objectStore('users')
    switch(i) {
      case 0:
        console.log('新增');
        for(user of users) {
          const request = store.add(user)
          request.onsuccess = function() {
            console.log(`${user.name}添加完成`);
          }
        }
        transaction.oncomplete = function() {
          console.log('添加成功');
        }
        break
      case 1:
        console.log('查询');
        // 查询方式1
        // const request = store.get(3)
        // request.onsuccess = function(event) {
        //   console.log(event.target.result);
        // }
        // 查询方式2
        const request = store.openCursor()
        request.onsuccess = function(event) {
          const cursor =  event.target.result
          if(cursor ) {
            console.log(cursor.key,cursor.value);
            cursor.continue()
          }else {
            console.log('查询完成');
          }
        }
        break;;
      case 2:
        console.log('删除');
        const deleteRequest = store.openCursor()
        deleteRequest.onsuccess = function(event) {
          const cursor =  event.target.result
          if(cursor) {
            if(cursor.key === 1) {
              cursor.delete()
            }else {
              cursor.continue()
            }
          }else {
            console.log('删除完成');
          }
        }
        console.log('删除成功');
        break
      case 3:
        console.log('更改');
        const updateRequest = store.openCursor()
        updateRequest.onsuccess = function(event) {
          const cursor = event.target.result
          if(cursor) {
            if(cursor.key === 1) {
              const value = cursor.value
              value.name = 'curry'
              cursor.update(value)
            }else {
              cursor.continue()
            }
          }else {
            console.log('更改成功');
          }
        }
        break

    }
  }
}
