{
  class StackElement {
    constructor(private data: string, private beforeData?: StackElement) {}

    public getData() {
      return this.data;
    }

    public getBeforeElement() {
      return this.beforeData;
    }
  }

  class Stack {
    private currentData?: StackElement;

    public push(data: string) {
      const element = new StackElement(data, this.currentData);
      this.currentData = element;
    }

    public pop(): string {
      const currentData = this.currentData;
      if (!currentData) {
        throw new Error("Cannot pop from empty stack.");
      }

      this.currentData = currentData.getBeforeElement();
      return currentData.getData();
    }
  }

  const a = new Stack();
  a.push("hello");
  a.push("world");
}
