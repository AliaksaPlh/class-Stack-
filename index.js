class Stack {
  maxNumEl;
  arrOfElements;
  constructor(maxNumEl) {
    this.arrOfElements = [];
    this.maxNumEl = maxNumEl || 10;
    this.checkMaxNumEl();
  }

  checkMaxNumEl() {
    if (
      typeof this.maxNumEl !== "number" ||
      this.maxNumEl == NaN ||
      this.maxNumEl == Infinity
    )
      throw new Error("Invalid maximum stack size ");
  }
  isAStackHasPlace() {
    return !(this.arrOfElements.length >= this.maxNumEl);
    //   throw new Error("Tha stack is full");
    //   return "Tha stack is full";
  }

  push(element) {
    if (this.isAStackHasPlace()) {
      this.arrOfElements.push(element);
    } else {
      console.log("Tha stack is full");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this.arrOfElements.pop();
    } else {
      console.log("Tha stack is empty");
    }
  }
  print() {
    console.log(this.arrOfElements);
  }
  peek() {
    if (!this.isEmpty()) {
      return this.arrOfElements[this.arrOfElements.length - 1];
    }
    return null;
  }
  isEmpty() {
    return this.arrOfElements.length === 0;
  }
  toArray() {
    return this.arrOfElements;
  }
  static fromEterable(iterable) {
    let resultStack = new Stack();
    for (let i = 0; i < iterable.length; i++) {
      resultStack.push(iterable[i]);
    }
    console.log(resultStack);
  }
}

let stack = new Stack(8);
stack.push("hello");
stack.push("miu");
stack.push("Jo");
stack.push("Jo");
stack.pop("Jo");
stack.push("Jo");
stack.push("Jo");
stack.pop("Jo");
console.log(stack.peek());
console.log(stack.isEmpty());
stack.print();
Stack.fromEterable([1, 4, 5, "sdfg", 4]);
