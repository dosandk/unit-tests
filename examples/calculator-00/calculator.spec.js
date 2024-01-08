import Calculator from "./calculator";

describe("calculator", () => {
  const calculator = new Calculator();

  it("should add two numbers correctly", () => {
    expect(calculator.add(10).value).toBe(10);
  });

  it("should subtract two numbers correctly", () => {
    expect(calculator.subtract(5).value).toBe(5);
  });

  it("should multiply two numbers correctly", () => {
    expect(calculator.multiply(2).value).toBe(10);
  });

  it("should divide two numbers correctly", () => {
    expect(calculator.divide(2).value).toBe(5);
  });

  it("should support operations chaining", () => {
    const result = calculator.add(1).multiply(10).divide(2).value;

    console.log("result", result);
    expect(result).toBe(30);
  });
});
