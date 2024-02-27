class Department {
  protected employees: string[] = [];

  // 객체가 생성될 때 실행
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department : (${this.id})${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // setter는 매개변수를 받는다.
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "ACCOUNTING");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna"; private를 추가하면 오류가 생긴다
it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

// console.log(accounting.lastReport) getter나 setter 없이는 private 속성이기 때문에 접근이 안됨

// setter 사용
accounting.mostRecentReport = "Year and Report";

// getter 사용
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();

// accountingCopy객체 생성 & describe는 메서드

// const accountingCopy = { name: "zziboo", describe: accounting.describe };
// accountingCopy.describe();
