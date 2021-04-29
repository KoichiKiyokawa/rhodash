import { omit } from "../src/omit";

describe("default use case", () => {
  it("omit 2 keys", () => {
    const result = omit({ a: 1, b: 2, c: 3 }, ["a", "b"]);
    expect(result).toEqual({ c: 3 });
  });
});
