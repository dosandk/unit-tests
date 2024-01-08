const sum = (a = 0, b = 0) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("both argument must be a numbers");
};

export default sum;
