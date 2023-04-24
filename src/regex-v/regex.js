const regex = new RegExp(/[\p{Script_Extensions=Greek}&&\p{Letter}]/v);
console.log(regex.test("π")) // → true

const re1 = /^\p{RGI_Emoji}$/v;

console.log(re1.test('😀')); // → true
console.log(re1.test('👨🏾‍⚕️')); // → true

// Difference/subtraction with --
const reDiff = /[\p{Decimal_Number}--[0-9]]/v
console.log(reDiff.test('𑜹')) // → true
console.log(reDiff.test('4')) // → false

// Intersection with &&
const re = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;
console.log(re.test('π')) ; // true
console.log(re.test('𐆊')); // false