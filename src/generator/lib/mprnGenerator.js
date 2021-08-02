function MprnGenerator() {
  const generateRandomWithinRange = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const generateRandom = () => Math.floor(Math.random() * 10);

  const generate = () => {
    const firstTwoDigits = generateRandomWithinRange(10, 73);
    const len = generateRandomWithinRange(6, 8);

    const digits = new Array(len)
      .fill(0)
      .map(() => generateRandom())
      .join("");

    const mprn = firstTwoDigits.toString() + digits.toString();

    return mprn;
  };

  return {
    generate,
  };
}

export default MprnGenerator;
