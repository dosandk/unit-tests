export default class Calculator {
  value = 0;

  init(a) {
    this.value = a;

    return this;
  }

  add(a) {
    this.value += a;

    return this;
  }

  subtract(a) {
    this.value -= a;
    return this;
  }

  multiply(a) {
    this.value *= a;
    return this;
  }

  divide(a) {
    if (a !== 0) {
      this.value /= a;
      return this;
    }

    throw new Error("Cannot divide by zero");
  }
}
