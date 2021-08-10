{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];

  function printArray(array: readonly string[]) {
    // readonly는 Array<> 형식에서는 현재지원안함
  }

  // Tuple
  // 서로 다른 타입을 가질 수 있음
  // 가능하면 interface, type alias, class로 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
}
