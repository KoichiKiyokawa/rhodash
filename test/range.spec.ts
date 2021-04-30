import { range } from "../src/index";

describe("default use case", () => {
  it("range(5)", () => {
    const result = range(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it("range(1, 5)", () => {
    const result = range(1, 5);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("range(0, 10, 2)", () => {
    const result = range(0, 10, 2);
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });
});
