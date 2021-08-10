{
  /**
   * Javascript
   * - Primitive type
   *  - number, srting, boolean, bigint, symbol, null, undefined
   * - Object
   *  - function, array, ...
   */

  // number
  const num: number = 1;

  // srting
  const str: string = "hello";

  // boolean
  const bool: boolean = true;

  // undefined
  // null
  let name: string | undefined;
  name = undefined;
  name = "hello";

  let person: string | null;

  function find(): number | undefined {
    return undefined;
  }

  // unkown
  let notSure: unknown = 0;

  // any
  let anything: any = 0;

  // void
  function print(): void {
    console.log("hello");
  }

  // never
  function throwError(message: string): never {
    // message -> server
    throw new Error();
  }

  // object
  let obj: object;
  function acceptObject(obj: object) {}
}
