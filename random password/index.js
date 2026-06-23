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

    let password = "";
    let allowedChars = "";
    
    if (uppercase) {
        allowedChars += uppercaseChars;
    }
    if (lowercase) {
        allowedChars += lowercaseChars;
    }
    if (numbers) {
        allowedChars += numberChars;
    }
    if (symbols) {
        allowedChars += symbolChars;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const password = generatePassword(passlen, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
console.log("Generated Password:", password);