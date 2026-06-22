const passlen = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

}

const password = generatePassword(passlen, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
console.log("Generated Password:", password);