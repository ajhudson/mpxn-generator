import MprnGenerator from "./mprnGenerator";

describe("tests to generate a valid gas MPRN number", () => {
  let generator;

  beforeEach(() => {
    generator = new MprnGenerator();
  });

  afterEach(() => {
    generator = null;
  });

  it("should be between 8 and 10 characters in length and first 2 digits should be between 10-73", () => {
    const mprn = generator.generate();
    const firstTwoDigits = Number.parseInt(mprn.substr(0, 2));

    expect(mprn).toBeDefined();
    expect(mprn.length).toBeGreaterThanOrEqual(8);
    expect(mprn.length).toBeLessThanOrEqual(10);
    expect(firstTwoDigits).toBeGreaterThanOrEqual(10);
    expect(firstTwoDigits).toBeLessThanOrEqual(73);
  });

  // TODO: https://en.everybodywiki.com/Meter_Point_Reference_Number
});
