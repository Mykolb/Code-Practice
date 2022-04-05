// Buggy Code (Part 1)
// Fix the code in the code tab to pass this challenge (only syntax errors). 
// Look at the examples below to get an idea of what the function should do
function cubes(a) {
	return a ** 3
}

console.log(cubes(2), 8)
console.log(cubes(3), 27)
console.log(cubes(4), 64)
console.log(cubes(5), 125)
console.log(cubes(10), 1000)

// Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?
function swap(a, b) {
	// b = a
	// a = b
	let t = [a, b] = [b, a]
	return t
}

console.log(swap(100, 200), [200, 100])
console.log(swap(44, 33), [33, 44])
console.log(swap(21, 12), [12, 21])
console.log(swap(10, 20), [20, 10])
//Mubashir


// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. 
// His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. 
// He needs your help to fix this code.

function nameString(name){
	let b = "Edabit"
	let result = name + b
  	return result
}

console.log(nameString("Mubashir"), "MubashirEdabit")
console.log(nameString("Matt"), "MattEdabit")
console.log(nameString("javaScript"), "javaScriptEdabit")
console.log(nameString("Airforce"), "AirforceEdabit")


// Fix the Expression
// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
const isSeven = (x) => {
	return x === 7 ? true:false;
}

console.log(isSeven(4), false) 
console.log(isSeven(9), false)
console.log(isSeven(7),  true)
console.log(isSeven(10),  false)
console.log(isSeven(20),  false)
console.log(isSeven(7),  true)

// Return a String as an Integer
// Create a function that takes a string and returns it as an integer.
function stringInt(str) {
	return parseInt(str)
}

console.log(stringInt("6"), 6)
console.log(stringInt("2"), 2)
console.log(stringInt("10"), 10)
console.log(stringInt("666"), 666)


