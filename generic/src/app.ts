/* const names: Array<string> = []; // string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promise.then((data) => {
  data.splite("  ");
}); */
/* 
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
 */

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 4 });
console.log(mergeObj.age);
