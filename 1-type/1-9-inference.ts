{
  /**
   * Type Inference
   */

  let text = "hello";
  // 선언과 동시에 문자열을 할당했으므로
  // 타입을 string으로 추론함

  function print(message = "hello") {
    // 파라미터의 기본값으로 타입을 추론함
    console.log(message);
  }

  function add(x: number, y: number) {
    // number + number를 return 하므로
    // number 타입임을 추론
    return x + y;
  }

  // 가능하면 안쓰는 것이 좋다..
}
