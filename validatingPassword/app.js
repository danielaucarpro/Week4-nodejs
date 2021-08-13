// Validate a password with the following format:
// Password at least 6 digits.
// At least one lowercase
// At least one uppercase
// At least one special character from @ # $ % ^ & *

const passwordValidator = require('password-validator');

let passwordString = new passwordValidator();

passwordString.is().min(6);
passwordString.has().uppercase();
passwordString.has().lowercase();
passwordString.has().symbols(1);

// Alternative way: passwordString.is().min(6).has().uppercase().has.lowercase().has().symbols();

console.log(passwordString.validate('isThisValid?'));
console.log(passwordString.validate('isthisvalid'));