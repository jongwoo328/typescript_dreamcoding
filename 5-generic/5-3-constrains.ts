{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time");
    }

    workPartTime() {}
  }

  // 세부 타입을 인자로 받아서 추상 타입으로 리턴하면 bad...
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // 조건 걸지않으면 pay()가 있는지 없는지 판단불가능
  function pay<E extends Employee>(employee: E): E {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  // keyof constraint
  function getValue<T, S extends keyof T>(obj: T, prop: S): T[S] {
    if (prop in obj) {
      return obj[prop];
    }
    throw new Error("Property not exists");
  }

  const obj = {
    name: "ellie",
    age: 20,
  };

  console.log(getValue(obj, "name"));
  console.log(getValue(obj, "age"));
}
