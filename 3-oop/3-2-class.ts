{
  type Coffee = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_PER_SHOT = 2; // static : class 변수
    coffeeBeans: number; // instance 변수

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    constructor(coffeeBeans: number = 0) {
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

  const maker = new CoffeeMachine(5);
  const coffee = maker.makeCoffee(2);
  console.log(coffee);
}
