import MpanGenerator from "./mpanGenerator";

describe("tests for the mpan generator", () => {
  let mpanGenerator;

  beforeEach(() => {
    mpanGenerator = new MpanGenerator();
  });

  afterEach(() => {
    mpanGenerator = null;
  });

  it.only("should generate a string of 13 characters", () => {
    const mpan = mpanGenerator.generate();
    expect(mpan).toHaveLength(13);
  });

  /*
  it("should generate distributor codes", () => {
    const codes = new Array(27).fill(0).map((_, idx) => idx + 10);

    console.log("init'd codes: ", codes);

    let expectedCodes = [
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 36,
    ];

    expect(codes).toMatchObject(expectedCodes);
  });

  it("should validate the MPAN correctly", () => {
    const mpanToTest = "1610020727364";
    const isValid = mpanGenerator.isValid(mpanToTest);

    expect(isValid).toBeTruthy();
  });
  */
});
