{
  /**
   * Intersection Types: AND
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId);
  }

  // 두 타입을 모두 만족하는 객체를 전달해야함..
  internWork({
    name: "ellie",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
