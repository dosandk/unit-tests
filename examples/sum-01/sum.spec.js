import sum from "./sum.js";

describe("sum", () => {
  it("should add two positive numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it("should add two negative numbers correctly", () => {
    expect(sum(-3, -2)).toBe(-5);
  });

  xit("should return zero like default value", () => {
    expect(sum()).toBe(0);
  });

  it("should throw an error if at least one of the arguments is not a number", () => {
    expect(() => sum("1", 2)).toThrow("both argument must be a numbers");
    expect(() => sum(true, true)).toThrow("both argument must be a numbers");
    expect(() => sum(5, true)).toThrow("both argument must be a numbers");
  });
});
