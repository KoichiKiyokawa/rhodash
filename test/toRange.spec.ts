import { toRange } from "../src/index";

describe("default use case", () => {
  it("toRange(5)", () => {
    const result = toRange(5);
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("toRange(1, 5)", () => {
    const result = toRange(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("toRange(0, 10, 2)", () => {
    const result = toRange(0, 10, 2);
    expect(result).toEqual([0, 2, 4, 6, 8, 10]);
  });
});
