function myPromise(constructor) {
  this.status = 'pending'
  this.value = undefined
  this.reason = undefined
  let self = this
  function resolve(v) {
    console.log('?');
    if(self.status === 'pending') {
      self.status = 'fulfilled'
      self.value = v
      console.log('fulfilled');
    }
  }
  function reject(r) {
    console.log(self.status);
    if(self.status === 'pending') {
      self.status = 'rejected'
      self.reason = r
    }
  }
  try {
    constructor(resolve,reject)
  }catch{
    reject(e);
  }
}

myPromise.prototype.then = function(onFulfilled,onRejected)  {
  if(this.status === 'fulfilled') {
    onFulfilled()
  }else if(this.status === 'rejected'){
    onRejected()
  }
}

let p = new myPromise(function(resolve,reject){
  console.log('resolve');
  reject(1)
})
p.then(res => {
  console.log('ok');
},err => {
  console.log(err);
})

