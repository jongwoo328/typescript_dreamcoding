{
  // public
  // private
  // protected

  type Coffee = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee;
  }

  interface SugarMixer {
    addSugar(coffee: Coffee): Coffee;
  }
  interface MilkFother {
    makeMilk(coffee: Coffee): Coffee;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_PER_SHOT = 2; // static : class 변수
    private coffeeBeans: number;

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should ");
      }
      this.coffeeBeans = beans;
    }

    clean() {
      console.log("cleaning...");
    }

    constructor(
      coffeeBeans: number = 0,
      private milk: MilkFother,
      private sugar: SugarMixer
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(coffee);
    }
  }

  class NoMilk implements MilkFother {
    makeMilk(coffee: Coffee): Coffee {
      return coffee;
    }
  }

  class NoSugar implements SugarMixer {
    addSugar(coffee: Coffee): Coffee {
      return coffee;
    }
  }

  class CheapMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    makeMilk(coffee: Coffee): Coffee {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class AutomaticSugarMixer implements SugarMixer {
    private getSugar() {
      console.log("getting some sugar from candy");
    }

    addSugar(coffee: Coffee): Coffee {
      const sugar = this.getSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log("Fancy steaming some milk...");
    }

    makeMilk(coffee: Coffee): Coffee {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    makeMilk(coffee: Coffee): Coffee {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SugarMixer implements SugarMixer {}

  /**
   * 상속의 문제점
   *
   * 상속이 깊어질수록 관계가 복잡해짐..
   * 기능을 수정하는 경우 해당 클래스를 상속하는 모든 클래스에게 영향을 미침
   */

  // cheapMilkSteamer, AutomaticSugarMixer만 사용가능함
  // coupling이 높음.. -> bad
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // const sweetMachne = new SweetCoffeeMachine(12, candySugar);
  // const latteMachine = new CafeLatteMachine(12, "ss", cheapMilkMaker);
  // const sweetLatteMachine = new SweetLatteCoffeeMachine(
  //   12,
  //   cheapMilkMaker,
  //   candySugar
  // );

  // 따라서 interface를 통해 coupling 해야함
  // const sweetCandyMachine = new SweetCoffeeMachine(12, sugar);
  // const coldLatteMachine = new CafeLatteMachine(12, "SSS", coldMilkMaker);

  const sweetMachine = new CoffeeMachine(12, noMilk, candySugar);
  const latteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, coldMilkMaker, sugar);
}
