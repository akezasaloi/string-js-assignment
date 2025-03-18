let word = 'extravaganza';
console.log(word.slice(8,12));

const food = 'The quick fox jumped over the lazy dog';
const insertString = 'eat';
console.log(fullString = food.slice(0,4) + insertString + ' ' + food.slice(4));

let story = "The quick brown fox jumps over the lazy dog";
const words = story.toLowerCase().split(" ");
let countIt = 0;
let countBrownColour = 0;
for (let word of words) {
    if (word === "the") countIt++;
    if (word === "brown") countBrownColour++;
}
console.log(`"the" appears: ${countIt} times`);
console.log(`"brown" appears: ${countBrownColour} times`);

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

