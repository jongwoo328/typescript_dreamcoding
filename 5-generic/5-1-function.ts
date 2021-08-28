{
  // function checkNotNull(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error("not valid number");
  //   }
  //   return arg;
  // }

  // const result = checkNotNull(123);
  // console.log(result);
  // checkNotNull(null);
  // // -> number만 체크가능함..

  // function checkNotNull(arg: any | null): any {}
  // // -> type safe하지않음

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
}
