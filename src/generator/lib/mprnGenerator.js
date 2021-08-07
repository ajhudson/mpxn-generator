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

    const mprnPrefix = firstTwoDigits.toString() + digits.toString();
    const mprn = mprnPrefix + calcCheckSum(mprnPrefix);

    if (!isNumberValid(mprn)) {
      throw new Error(`MPRN ${mprn} is not valid`);
    }

    return mprn;
  };

  const isNumberValid = (mprn) => {
    const lenWithoutCheckDigits = mprn.length - checkDigitsLen;
    const checkDigits = mprn.substr(
      mprn.length - checkDigitsLen,
      checkDigitsLen
    );

    const calculatedCheck = calcCheckSum(mprn.substr(0, lenWithoutCheckDigits));

    return calculatedCheck === checkDigits;
  };

  const calcCheckSum = (mprnPrefix) => {
    // https://en.everybodywiki.com/Meter_Point_Reference_Number
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

  return {
    generate,
    isNumberValid,
  };
}

export default MprnGenerator;
