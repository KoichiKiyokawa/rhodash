import { last } from "../src/index";

describe("default use case", () => {
  it("get 3 in last of [1, 2, 3]", () => {
    const result = last([1, 2, 3]);
    expect(result).toEqual(3);
  });

  it("get undefined if empty array", () => {
    const result = last([]);
    expect(result).toBeUndefined();
  });
});
