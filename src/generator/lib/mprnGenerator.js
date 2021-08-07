function MprnGenerator() {
  const zeroChar = "0";
  const checkDigitsLen = 2;

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
    const lenWithoutCheckDigits = mprn.length - checkDigitsLen;
    const checkDigits = mprn.substr(
      mprn.length - checkDigitsLen,
      checkDigitsLen
    );
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

    return calculatedCheck === checkDigits;
  };

  const calcCheckSum = (mprnPrefix) => {
    const digits = mprnPrefix.split("").map((val) => Number.parseInt(val));

    const total = digits
      .map((val, idx) => val * (mprnPrefix.length - idx))
      .reduce((prev, curr) => prev + curr);

    const checkDigit = (total % 11).toString();

    const formattedCheckDigit =
      checkDigit.length < checkDigitsLen
        ? zeroChar.repeat(checkDigit.length) + checkDigit.toString()
        : checkDigit.toString();

    return formattedCheckDigit;
  };

  const generateCheckDigit = (mprnPrefix) => calcCheckSum(mprnPrefix);

  return {
    generate,
    isNumberValid,
    generateCheckDigit,
  };
}

export default MprnGenerator;
