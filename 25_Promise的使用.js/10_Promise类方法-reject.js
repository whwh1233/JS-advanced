const promise = Promise.reject({ name: "wh" });

// reject 无论传入什么值都一样。不想 resolve
promise.catch((err) => console.log(err));
