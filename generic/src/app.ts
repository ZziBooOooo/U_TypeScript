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

/* function merge<T extends {}, U>(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
 */

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj);

// 코드에 length속성이 있어야 하므로
interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe(4)); 오류

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Zziboo");
textStorage.addItem("Zzirang");
textStorage.removeItem("Zziboo");
console.log(textStorage.getItems()); // ["Zzirang"]

const numberStorage = new DataStorage<number>();

/* const objStorage = new DataStorage<object>();
const maxObj = { name: "Max" }; // 메모리에서 같은 객체를 사용하도록 함
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });
// ...
objStorage.removeItem(maxObj);
console.log(objStorage.getItems()); */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Zziboo", "Zzirang"];
// names.push("Ooo");
// names.pop();
