import { pick } from "../src/pick";

describe("default use case", () => {
  it("pick 2 keys", () => {
    const result = pick({ a: 1, b: 2, c: 3 }, ["a", "b"]);
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
