const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILLED = "fulfilled";
const PROMISE_STATE_REJECTED = "rejected";
// 工具函数
function execFnWithCatch(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}

class WHPromise {
  constructor(executor) {
    this.status = PROMISE_STATE_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onfulfilledFns = [];
    this.onrejectedFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATE_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATE_PENDING) return;
          this.status = PROMISE_STATE_FULFILLED;
          console.log("resolve");
          this.value = value;
          this.onfulfilledFns.forEach((fn) => fn(this.value));
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATE_PENDING) return;
          this.status = PROMISE_STATE_REJECTED;
          console.log("reject");
          this.reason = reason;
          this.onrejectedFns.forEach((fn) => fn(this.reason));
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onfulfilled, onrejected) {
    const defaultonrejected = (err) => {
      throw err;
    };
    onrejected = onrejected || defaultonrejected;
    return new WHPromise((resolve, reject) => {
      if (this.status === PROMISE_STATE_FULFILLED) {
        execFnWithCatch(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATE_REJECTED) {
        execFnWithCatch(onrejected, this.reason, resolve, reject);
      }
      if (this.status === PROMISE_STATE_PENDING) {
        if (onfulfilled)
          this.onfulfilledFns.push(() => {
            execFnWithCatch(onfulfilled, this.value, resolve, reject);
          });
        if (onrejected)
          this.onrejectedFns.push(() => {
            execFnWithCatch(onrejected, this.reason, resolve, reject);
          });
      }
    });
  }
  catch(onrejected) {
    this.then(undefined, onrejected);
  }
}

const promise = new WHPromise((resolve, reject) => {
  console.log("传入函数直接被调用");
  // resolve(222);
  reject(111);
  // throw new Error("first");
});

console.log("----------");
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
