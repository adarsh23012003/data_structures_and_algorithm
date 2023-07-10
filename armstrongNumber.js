// Question       (1*1*1) + (5*5*5) + (3*3*3) = 153

function checkArmstrongNumber(num) {
  let globSum = 0;
  let apple = num;
  let remainder;
  //   console.log(typeof num);
  //   for (let index = 0; index <= apple.toString().length; index++) {                                   // new way for loop running
  while (apple > 0) {
    remainder = apple % 10;
    globSum = globSum + remainder * remainder * remainder;
    apple = parseInt(apple / 10);
    // console.log(remainder);
  }
  if (globSum === num) {
    console.log(`${num} is Armstron Number`);
  } else {
    console.log(`${num} is not Armstron Number`);
  }
}
// console.log(153 / 10);

checkArmstrongNumber(351);
