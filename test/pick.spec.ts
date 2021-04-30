import { pick } from "../src/index";

describe("default use case", () => {
  it("pick 2 keys", () => {
    const before = { a: 1, b: 2, c: 3 };
    const result = pick(before, ["a", "b"]);
    expect(before).toEqual({ a: 1, b: 2, c: 3 }); // check imutability
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
