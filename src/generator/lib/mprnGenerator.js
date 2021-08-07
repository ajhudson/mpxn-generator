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

  const isNumberValid = (mprn) => {
    const zeroChar = "0";
    const checkDigitsLen = 2;
    const lenWithoutCheckDigits = mprn.length - checkDigitsLen;
    const check = mprn.substr(mprn.length - checkDigitsLen, checkDigitsLen);
    const verifyArr = mprn
      .substr(0, lenWithoutCheckDigits)
      .split("")
      .map((val) => Number.parseInt(val));

    const total = verifyArr
      .map((val, idx) => val * (lenWithoutCheckDigits - idx))
      .reduce((prev, curr) => prev + curr);

    const remainder = (total % 11).toString();

    const calculatedCheck =
      remainder.length < checkDigitsLen
        ? zeroChar.repeat(remainder.length) + remainder.toString()
        : remainder.toString();

    return calculatedCheck === check;
  };

  return {
    generate,
    isNumberValid,
  };
}

export default MprnGenerator;
