import DNO from "./dno";

function MpanGenerator() {
  const getPrimeNumbers = () => [3, 5, 7, 13, 17, 19, 23, 29, 31, 37, 41, 43];

  const getDistributorCodes = () =>
    new Array(27).fill(0).map((_, idx) => (idx + 10).toString()); // fills an array from 10 - 36

  const generateUid = () =>
    Number.parseInt(Math.random().toString().substr(2, 10));

  const generateCheckDigit = (firstDigits) => {
    const primeNumbers = getPrimeNumbers();
    const sum = firstDigits
      .split("")
      .map((n, idx) => Number.parseInt(n) * primeNumbers[idx])
      .reduce((prev, curr) => prev + curr);

    const calculatedCheckDigit = (sum % 11) % 10;

    return calculatedCheckDigit;
  };

  const isNumberValid = (mpanCore) => {
    const primeNumbers = getPrimeNumbers();
    const checkDigit = Number.parseInt(
      mpanCore.substr(mpanCore.length - 1, mpanCore.length)
    );

    const sum = mpanCore
      .substr(0, mpanCore.length - 1)
      .split("")
      .map((n, idx) => Number.parseInt(n) * primeNumbers[idx])
      .reduce((prev, curr) => prev + curr);

    const calculatedCheckDigit = (sum % 11) % 10;

    return calculatedCheckDigit === checkDigit;
  };

  function generate() {
    const distributorCodes = getDistributorCodes();
    const uid = generateUid().toString();
    const maxRandom = distributorCodes.length - 1;
    const randomDistIdx = Math.floor(Math.random() * maxRandom);
    const selectedDistCode = distributorCodes[randomDistIdx].toString();
    const firstDigits = selectedDistCode + uid;
    const checkDigit = generateCheckDigit(firstDigits).toString();
    const mpanCore = firstDigits + checkDigit;
    const isValid = isNumberValid(mpanCore);

    if (!isValid) {
      throw new Error(`MPAN Core ${mpanCore} is not valid, please try again`);
    }

    return mpanCore;
  }

  const getDnoById = (id) => {
    return DNO[id];
  };

  return {
    generate,
    isNumberValid,
    getDnoById,
  };
}

export default MpanGenerator;
