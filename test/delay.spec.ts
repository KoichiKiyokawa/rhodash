import { delay } from "../src/index";

describe("default use case", () => {
  it("delay 3000ms", async () => {
    const startUnixTime = new Date().getTime();
    await delay(3000);
    const endUnixTime = new Date().getTime();
    expect(endUnixTime - startUnixTime).toBeLessThan(3500);
    expect(endUnixTime - startUnixTime).toBeGreaterThan(2500);
  });
});
