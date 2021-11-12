class WHCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key,value) {
    this.storage.setItem(key,JSON.stringify(value))
  }

  getItem(key) {
    const value =  this.storage.getItem(key)
    if(value) {
      r = JSON.parse(value)
      return r
    }
  }

  clearItem() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}


const localCache = new WHCache()
const sessionCache = new WHCache(false)

export {
  localCache,sessionCache
}

