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

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): Coffee;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

    // constructor를 private로 만들면
    // 지정된 함수로만 객체를 생성할 수 있도록 강제할 수 있음
    private constructor(coffeeBeans: number = 0) {
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

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(5);
  maker.makeCoffee(2);
  maker.fillCoffeeBeans(5);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(5);
  maker2.makeCoffee(2);
  // interface를 type으로 하는 경우
  // interface에 없는 함수는 에러가 뜸
  // maker2.fillCoffeeBeans(5);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(5);
  maker3.makeCoffee(2);
  maker3.fillCoffeeBeans(5);
  maker3.clean();

  // interface를 사용해 객체의 사용범위 제한가능
  class AmatureUser {
    constructor(private machine: CoffeeMaker) {}
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
  }
}
