class Calculator {
  constructor(x, y) {
    if (arguments.length !== 2 || typeof x !== "number" || typeof y !== "number") {
      throw new Error("Ошибка!");
    }
    this.x = x;
    this.y = y;
  }
  
  setX(num) {
    if (!num || typeof num !== "number") {
      throw new Error("Ошибка!");
    }
    this.x = num;
  };
  
  setY(num) {
    if (!num || typeof num !== "number") {
      throw new Error("Ошибка!");
    }
    this.y = num;
  };
  
  logSum() {
    console.log(this.x + this.y);
  };
  
  logMul() {
    console.log(this.x * this.y);
  };
  
  logSub() {
    console.log(this.x - this.y);
  };
  
  logDiv() {
    if (this.y === 0) {
      throw new Error("Ошибка!");
    }
    console.log(this.x / this.y);
  };
}

let count = new Calculator(56, 0);
count.setX(4);
count.setY(10);
count.logSum();
count.logMul();
count.logSub();
count.logDiv();