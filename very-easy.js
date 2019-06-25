
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


//RETURN A REVERSED ARRAY
//Works
function reverse(arr) {
	arr.reverse();
	return arr;
}

// console.log(reverse(['g', 'o', 'o', 'd']))
// console.log(reverse(['a', 'b', 'c', 'd']))

//ES6 Syntax take a string and return it reversed 
const revStr = str => {
    return str.split('').reverse('').join('')
}

//split method to turn string into a new array "hello" -> ['w', 'o', 'r', 'k']
//reverse method the new array ['w', 'o', 'r', 'k'] -> ['k', 'r', 'o', 'w']
//join method turns it back into a string ['k', 'r', 'o', 'w'] -> "krow"

console.log(revStr('work'));
console.log(revStr('hello'));

//reverse an array 
//works
function reverse(arr) {
    return arr.reverse()
}

// console.log(reverse([1,2,3,4]))
// console.log(reverse([100,105,110, 115]))

//ES6 Syntax
//works
let rev = array => array.reverse().sort();


console.log(rev([6,7,8,9]))
console.log(rev([56,55,23,19]))
