type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function adds(a: number, b: number): number;
function adds(a: string, b: string): string;
function adds(a: number, b: string): string;
function adds(a: string, b: number): string;
function adds(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = adds("Zziboo", "Zzirang");
// result.split("  ");

const fetchedUserData = {
  id: "u1",
  name: "zziboo",
  job: { title: "ceo", description: "my own company" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

type UnknwonEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknwonEmployee) {
  console.log("Name: " + emp.name);
  //  아래코드 오류 발생 -> name속성은 UnknwonEmployee에 둘 다 있지만 privileges는 모름
  // console.log('Privileges: ' +emp.privileges);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("starDate" in emp) {
    console.log("Start Date:" + emp.starDate);
  }
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}
class Truck {
  drive() {
    console.log("Driving... a truck");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed : " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const userInputElement = document.getElementById("user-input");

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

// userInputElement.value = "Hi there!";

interface ErrorContainer {
  // {email: 'Not a valid email', userName: 'Must start with a character!'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
