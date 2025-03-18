let word = 'extravaganza';
console.log(word.slice(8,12));

const food = 'The quick fox jumped over the lazy dog';
const insertString = 'eat';
console.log(fullString = food.slice(0,4) + insertString + ' ' + food.slice(4));

const story = "The quick brown fox jumps over the lazy dog";
const stringOne = 'the';
const countOne = (story.match(new RegExp(stringOne, "g")) || []).length;
console.log(countOne);
const stringTwo = 'brown';
const countTwo = (story.match(new RegExp(stringTwo, "g")) || []).length;
console.log(countTwo);

const string1 = "The pupils are reading in the library";
console.log(string1.search('are')); 
const string2 = "The child was sitting on the table before it fell"
console.log(string2.search('sitting')); 
const UpperCase = "wonderful";
console.log(UpperCase.toUpperCase())
const LowerCase1 = "amazing";
console.log(LowerCase1.toLowerCase())
const LowerCase2 = "UndERneath";
console.log(LowerCase2.toLowerCase())
const titlecase = "A wonderful world";
const result = titlecase.split(' ');
const output = result.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(output);

