
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
