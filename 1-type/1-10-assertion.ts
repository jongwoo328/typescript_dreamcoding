{
  /**
   * Type Assertions
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  // 실제 return값과 다르게
  // type assertion 사용하면
  // typescript에서 에러검사 불가능함
  // 가능하면 쓰지말자

  console.log((result as string).length);
  // or
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // !도 사용할수있음
  numbers!.push(2);

  //
  // Element or null
  const button1 = document.querySelector("class");

  // Only Element
  const button2 = document.querySelector("class")!;
}
