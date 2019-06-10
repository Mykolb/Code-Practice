
//RETURN SUM OF TWO NUMBERS//
//works
function addition(a, b) {
    return a + b;
}
console.log(addition(1500, 300));


//ES6 syntax 
//works
let add = (a, b) => a + b;

console.log(add(-10, 5));

//RETURN AREA OF A TRIANGLE 
//works
function triArea(base, height) {
	return base * height / 2
}

console.log(triArea(20, 2)); //expected 20
console.log(triArea(5, 6)) //expected 15

//ES6 syntax
const triangleArea = (b, h) => (b * h) / 2
console.log(triangleArea(10, 10)) //expected 50

//RETURN NEXT NUMBER FROM INTEGER PASSED
/* Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
function addition(num) {
	result =  num + 1
	return result;
}

console.log(addition(200));
console.log(addition(5));

//ES6 Syntax
const addy = n => {
 n = n + 1
  return n 
};

console.log(addy(10));
console.log(addy(-12));

//RETURN 0 IF ZERO TRUE
//works
function lessThanOrEqualToZero(num) {
	if(num <= 0) {
		return true
	} else {
		return false;
	}
}
// console.log(lessThanOrEqualToZero(-10));
// console.log(lessThanOrEqualToZero(1));

//ES6 with ternary 
//Works
const zeroLessThan = n => (n <= 0 ? true : false);

console.log(zeroLessThan(4));
console.log(zeroLessThan(2));
console.log(zeroLessThan(-3));

//ES6 with if/else/ else if
const numLessThan = n => {
    if(n <= 0) {
        return 'my number is true';
    } else if (n < 10) {
        return 'my number is false';
    } else (n >= 15) 
        return 'my number is the biggest !'
    }

console.log(numLessThan(0)); //expected true
console.log(numLessThan(-1)); //expected true
console.log(numLessThan(2)); //expected false
console.log(numLessThan(20)); //expected number is the biggest
console.log(numLessThan(5)); //expected false
console.log(numLessThan(500)); //expected number is the biggest 