{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "e",
    age: 10,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let ellieName: Name = "name";
}
