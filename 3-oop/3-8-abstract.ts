{
  // public
  // private
  // protected

  type Coffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee;
  }

  /**
   * abstract의 인스턴스는 생성불가
   * 만들어지는것이 목적이 아닌
   * 필요한것을 정의하는 역할임
   */

  /**
   * abstract method
   * method 명세만 구현하고
   * 각 상속받은 클래스마다 별도로 구현을 강제시킴
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_PER_SHOT = 2; // static : class 변수
    private coffeeBeans: number; // instance 변수

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

    protected abstract extract(shots: number): Coffee;

    makeCoffee(shots: number): Coffee {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    protected extract(shots: number): Coffee {
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    protected extract(shots: number): Coffee {
      return {
        shots,
        hasSugar: true,
      };
    }
  }
}
