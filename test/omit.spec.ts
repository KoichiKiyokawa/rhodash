import { omit } from "../src/index";

describe("default use case", () => {
  it("omit 2 keys", () => {
    const before = { a: 1, b: 2, c: 3 };
    const result = omit(before, ["a", "b"]);
    expect(before).toEqual({ a: 1, b: 2, c: 3 }); // check imutability
    expect(result).toEqual({ c: 3 });
  });
});
