# mpxn-generator

A testing tool to generate a valid MPAN numbers for electricity meters or MPRN numbers for gas meters.

It is possible to install this as an unpacked Chrome extension as there is a manifest.json file in the public directory which will allow this. The repo has also been sent to Google for review before possible addition to the Chrome extension web store.

---

## MPAN Numbers

This tool will create a 13-digit long MPAN core. The first two digits will be between 10-36 to denote the DNO (Distribution Network Operator) whilst the last digit is a calculated checksum to verify the previous 12 digits using an [algorithm](https://en.wikipedia.org/wiki/Meter_Point_Administration_Number#Check_digit_modulus).

---

## MPRN Numbers

This tool will generate a number between 8-10 digits long (MPRN numbers can be between 6-10 but I opted to make them slightly longer as that is the more common format).

The first two digits are between 10-73 (MPRN's where the numbers start with 74, 75, 76 and 77 belong to indepdent gas transporters and I'm unsure if the check algoritm may be different, so I have deliberately avoided to generate these numbers for now).

The last two digits are a checksum where an [algorithm](https://en.everybodywiki.com/Meter_Point_Reference_Number#Check_digits_modulus_of_the_MPRN_number) is used to verify the previous digits. If the result of the algorithm is a single digit, then the checksum is padded with a leading zero to make it up to two digits in length.
