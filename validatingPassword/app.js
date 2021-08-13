// Validate a password with the following format:
// Password at least 6 digits.
// At least one lowercase
// At least one uppercase
// At least one special character from @ # $ % ^ & *

const passwordValidator = require('password-validator');

let string = new passwordValidator();

string.is().min(6);
string.has().uppercase();
string.has().lowercase();
string.has().symbols(1);

console.log(string.validate('isThisValid?'));
console.log(string.validate('isthisvalid'));