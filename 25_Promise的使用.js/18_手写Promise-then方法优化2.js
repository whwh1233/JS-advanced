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
          // this.onfulfilled(this.value);
        });

        // 执行then传入的第一个回调函数
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
          // this.onrejected(this.reason);
        });

        // 执行then传入的第二个回调函数
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onfulfilled, onrejected) {
    // 确保settimeout延时调用可以执行then方法
    return new WHPromise((resolve, reject) => {
      if (this.status === PROMISE_STATE_FULFILLED) {
        // try {
        //   const value = onfulfilled(this.value);
        //   resolve(value);
        // } catch (err) {
        //   reject(er);
        // }
        execFnWithCatch(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATE_REJECTED) {
        // try {
        //   const reason = onrejected(this.reason);
        //   resolve(reason);
        // } catch (err) {
        //   reject(err);
        // }
        execFnWithCatch(onrejected, this.reason, resolve, reject);
      }
      if (this.status === PROMISE_STATE_PENDING) {
        this.onfulfilledFns.push(() => {
          // try {
          //   const value = onfulfilled(this.value);
          //   resolve(value);
          // } catch (err) {
          //   reject(err);
          // }
          execFnWithCatch(onfulfilled, this.value, resolve, reject);
        });
        this.onrejectedFns.push(() => {
          // try {
          //   const reason = onrejected(this.reason);
          //   resolve(reason);
          // } catch (err) {
          //   reject(err);
          // }
          execFnWithCatch(onrejected, this.reason, resolve, reject);
        });
      }
    });
    // this.onfulfilled = onfulfilled;
    // this.onrejected = onrejected;
  }
}

const promise = new WHPromise((resolve, reject) => {
  console.log("传入函数直接被调用");
  resolve(222);
  // reject(111);
  // throw new Error("first");
});

console.log("----------");
promise
  .then(
    (res) => {
      console.log(res);
      return "aaa";
      // throw new Error("error");
    },
    (err) => {
      console.log(err);
      // return "aaa";
      throw new Error("error");
    }
  )
  .then(
    (res) => console.log("res:", res),
    (err) => console.log("err:", err)
  );
