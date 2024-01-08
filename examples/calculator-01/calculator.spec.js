import Calculator from "./calculator.js";

describe("calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator = null;
  });

  it("should add two numbers correctly", () => {
    expect(calculator.init(5).add(10).value).toBe(15);
  });

  it("should subtract two numbers correctly", () => {
    expect(calculator.init(10).subtract(5).value).toBe(5);
  });

  it("should multiply two numbers correctly", () => {
    expect(calculator.init(10).multiply(2).value).toBe(20);
  });

  it("should divide two numbers correctly", () => {
    expect(calculator.init(10).divide(2).value).toBe(5);
  });

  it("should support operations chaining", () => {
    const result = calculator.add(1).multiply(10).divide(2).value;

    console.log("result", result);
    expect(result).toBe(5);
  });
});
