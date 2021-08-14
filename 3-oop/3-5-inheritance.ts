{
  // public
  // private
  // protected

  type Coffee = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee;
  }

  class CoffeeMachine implements CoffeeMaker {
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

    clean() {
      console.log("cleaning...");
    }

    protected constructor(coffeeBeans: number = 0) {
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < CoffeeMachine.BEANS_PER_SHOT * shots) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): Coffee {
      console.log(`Pulling ${shots} shots ...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): Coffee {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log("Streaming some milk...");
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CafeLatteMachine(coffeeBeans);
    }

    makeCoffee(shots: number): Coffee {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machine = CafeLatteMachine.makeMachine(21);
  const coffee = machine.makeCoffee(1);
  console.log(coffee);
}
