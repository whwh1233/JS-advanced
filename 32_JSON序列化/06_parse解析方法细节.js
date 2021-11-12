const JSONString = '{"name":"hw","age":14,"friends":{"name":"hw","age":20,"girlFriend":"wh"},"hobbies":[1,2,3]}'

const r = JSON.parse(JSONString,(key,value) => {
  if(key === 'age') {
    return '哈哈哈'
  }
  return value
})
console.log(r);
