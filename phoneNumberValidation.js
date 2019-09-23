// ^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$ OR '-' delimiter
// ^\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$ OR '.' delimiter
// ^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{4})$ ' ' delimiter
var regex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$|^\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$|^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{4})$/;
var phone1 = "9502727141";
var phone2 = "(950) 272 7141";
var phone3 = "950 272 7141";
var phone4 = "950.272.7141";
var phone5 = "950-272-7141";
var phone6 = "950-272.7141";

// console.log(phone1.match(regex));

console.log(`phone1 is ${regex.test(phone1) ? 'valid' : 'invalid'}`);

console.log(`phone2 is ${regex.test(phone2) ? 'valid' : 'invalid'}`);

console.log(`phone3 is ${regex.test(phone3) ? 'valid' : 'invalid'}`);

console.log(`phone4 is ${regex.test(phone4) ? 'valid' : 'invalid'}`);

console.log(`phone5 is ${regex.test(phone5) ? 'valid' : 'invalid'}`);

console.log(`phone6 is ${regex.test(phone6) ? 'valid' : 'invalid'}`);