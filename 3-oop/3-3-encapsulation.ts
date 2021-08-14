{
  // public
  // private
  // protected

  type Coffee = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private static BEANS_PER_SHOT = 2; // static : class 변수
    private coffeeBeans: number; // instance 변수

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should ");
      }
      this.coffeeBeans = beans;
    }

    // constructor를 private로 만들면
    // 지정된 함수로만 객체를 생성할 수 있도록 강제할 수 있음
    private constructor(coffeeBeans: number = 0) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): Coffee {
      if (this.coffeeBeans < CoffeeMachine.BEANS_PER_SHOT * shots) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeeBeans -= CoffeeMachine.BEANS_PER_SHOT * shots;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMachine.makeMachine(5);
  maker.makeCoffee(2);
  maker.fillCoffeeBeans(5);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
}
