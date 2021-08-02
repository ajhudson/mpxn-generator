function MprnGenerator() {
  const MIN = 6;
  const MAX = 10;

  const generateRandomWithinRange = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const generateRandom = () => Math.floor(Math.random() * 10);

  const generate = () => {
    const len = generateRandomWithinRange(MIN, MAX);
    const digits = new Array(len)
      .fill(0)
      .map(() => generateRandom())
      .join("");

    return digits;
  };

  return {
    generate,
  };
}

export default MprnGenerator;
