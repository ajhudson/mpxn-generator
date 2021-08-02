import MprnGenerator from "./mprnGenerator";

describe("tests to generate a valid gas MPRN number", () => {
  let generator;

  beforeEach(() => {
    generator = new MprnGenerator();
  });

  afterEach(() => {
    generator = null;
  });

  it.only("should be between 6 and 10 characters in length", () => {
    const mprn = generator.generate();

    expect(mprn).toBeDefined();
    expect(mprn.length).toBeGreaterThanOrEqual(6);
    expect(mprn.length).toBeLessThanOrEqual(10);
  });
});
