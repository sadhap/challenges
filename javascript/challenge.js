//THIS CODE BLOG CHALLENGE:1
let subtitle1= 'Challenge:1';
console.log(subtitle1);
// Store Mark's and John's mass and height in variables
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
/* const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
*/
// Calculate both their BMIs using the formula (you can even implement both
/*BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)*/
const BMIMark = massMark / heightMark ** 2;
// =78 / 1.69 ** 2;
// =78 / 2.8561
// =27.309968138370508
const BMIJohn = massJohn / (heightJohn * heightJohn);
// =92 / 1.95 ** 2
// =92 / 3.8024999999999998
// =24.194608809993426 
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
//THIS CODE BLOG CHALLENGE:2
/*Print a nice output to the console, saying who has a higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"*/
let subtitle2='Challenge:2';
console.log(subtitle2);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
//THIS CODE BLOG CHALLENGE:3 
let subtitle3= 'Challenge:3';
console.log(subtitle3);
const scoreDolphins = (97 + 112 + 80) / 3;
//=289/3
//=96.33333333333333
const scoreKoalas = (109 + 95 + 50) / 3;
//=254/3
// 84.66666666666667
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
//THIS BLOG CHALLENGE:4
let subtitle4= 'Challenge:4';
console.log(subtitle4);

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);