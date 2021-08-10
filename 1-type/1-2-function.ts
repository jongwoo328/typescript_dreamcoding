{
  // // javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // typescript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // //javascript
  // function jsFetchNum(id) {
  //   // ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // typescript
  // function FetchNum(id: string): Promise<number> {
  //   // ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  // ? 활용하면 없어도 되는 parameter
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna", undefined);

  // Default parameter
  function printMessage(message: string = "default message"): void {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    const sum: number = numbers.reduce((sum: number, num: number): number => {
      sum += num;
      return sum;
    }, 0);

    return sum;
  }

  console.log(addNumbers(2, 5, 6, 7, 8));
}
