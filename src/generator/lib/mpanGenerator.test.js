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
});
