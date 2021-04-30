import { sum } from "../src/index";

describe("default use case", () => {
  it("sum [1, 2, 3] is 6", () => {
    const result = sum([1, 2, 3]);
    expect(result).toBe(6);
  });
});
