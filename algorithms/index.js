// Convert Age to Days
// Create a function that takes the age in years and returns the age in days.
const calcAge = age => {
	return age*365
}

console.log(calcAge(10), 3650)
console.log(calcAge(0), 0)
console.log(calcAge(73), 26645)


// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
const frames = (minutes, fps) => {
	const totalFrames = minutes*fps*60
    return totalFrames
}

console.log(frames(1, 1), 60)
console.log(frames(10, 1), 600)
console.log(frames(10, 25), 15000)
console.log(frames(500, 60), 1800000)
console.log(frames(0, 60), 0)
console.log(frames(99, 1), 5940)
console.log(frames(419, 70), 1759800)
console.log(frames(52, 33), 102960)

// Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.
const makesTen = (a, b) => {
	return a === 10 || b === 10 || a+b === 10 ? true : false
}

console.log(makesTen(9, 10), true)	
console.log(makesTen(9, 9), false)	
console.log(makesTen(1, 9), true)	
console.log(makesTen(10, 1), true)	
console.log(makesTen(10, 10), true)	
console.log(makesTen(8, 2), true)	
console.log(makesTen(8, 3), false)	
console.log(makesTen(10, 42), true)	
console.log(makesTen(12, -2), true)


// Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
// You must calculate the number of people there will be in three decades from now.
// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.
function futurePeople(population, n) {
    const monthlyBirths = 12*30
    const decadeBirths = monthlyBirths*n
	const totalPeeps = population+decadeBirths
    return totalPeeps
}
console.log(futurePeople(256, 2), 976)
console.log(futurePeople(3248, 6), 5408)
console.log(futurePeople(5240, 3), 6320)

// Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
const acceptIntoMovie = (age, isSupervised) => {
	return age >= 15 || isSupervised === true ? true : false
}
console.log(acceptIntoMovie(14, true), true)
console.log(acceptIntoMovie(15, true), true)
console.log(acceptIntoMovie(16, true), true)
console.log(acceptIntoMovie(14, false), false)
console.log(acceptIntoMovie(15, false), true)
console.log(acceptIntoMovie(16, false), true)
console.log(acceptIntoMovie(14.99999, true), true)
console.log(acceptIntoMovie(14.99999, false), false)

// Sum of Cubes
// Create a function that takes a positive integer n, and returns the sum of all the cubed values from 1 to n.
// For example, if n is 3:
function sumCubes(n) {
    let sum = 0;
	for(let i=1; i <= n; i++ ) {
        console.log(sum += i**3)
        
    }
    return sum
}

console.log(sumCubes(1), 1)
console.log(sumCubes(2), 9)
console.log(sumCubes(3), 36)
console.log(sumCubes(4), 100)
console.log(sumCubes(5), 225)
console.log(sumCubes(6), 441)
console.log(sumCubes(7), 784)
console.log(sumCubes(8), 1296)
console.log(sumCubes(9), 2025)
console.log(sumCubes(10), 3025)
console.log(sumCubes(123), 58155876)
console.log(sumCubes(125), 62015625)
console.log(sumCubes(133), 79405921)
console.log(sumCubes(167), 196784784)
console.log(sumCubes(188), 315630756)
console.log(sumCubes(199), 396010000)
console.log(sumCubes(200), 404010000)
console.log(sumCubes(300), 2038522500)
console.log(sumCubes(400), 6432040000)
console.log(sumCubes(500), 15687562500)
console.log(sumCubes(12345), 5807306426319225)

// Four Passengers and a Driver
// A typical car can hold four passengers and one driver, allowing five people to travel around. 
// Given n number of people, return how many cars are needed to seat everyone comfortably.
function carsNeeded(n) {
    const passengerLimit = 5;
    return Math.floor(Math.ceil(n/passengerLimit))
}

console.log(carsNeeded(0), 0)
console.log(carsNeeded(1), 1)
console.log(carsNeeded(4), 1)
console.log(carsNeeded(5), 1)
console.log(carsNeeded(6), 2)
console.log(carsNeeded(18), 4)

// Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. 
// The first two letters are repeated twice with an ellipsis ... and space after each, 
// and then the word is pronounced with a question mark ?.
function stutter(word) {
	const splitIt = word.split(' ').join()
    const newString = String(splitIt)
    const stutterString = newString.slice(0, 2)+ '...'+ ' ' + newString.slice(0, 2)+'...'+ ' ' + newString+'?'
    return stutterString
}
console.log(stutter("incredible"), "in... in... incredible?")
console.log(stutter("am"), "am... am... am?")
console.log(stutter("outstanding"), "ou... ou... outstanding?")

// Create a function that returns the number of arguments it was called with.
// How Many D's Are There?
// Create a function that counts how many D's are in a sentence.
// Examples
// countDs("My friend Dylan got distracted in school.") ➞ 4
// countDs("Debris was scattered all over the yard.") ➞ 3
// countDs("The rodents hibernated in their den.") ➞ 3
function countDs(sentence) {
    const newSentence = sentence
    console.log((newSentence))

    let counter = 0;
    for(let i = 0; i <= newSentence.length; i++) {
      
        console.log(newSentence[i])
        if(newSentence[i] === "d" || newSentence[i] === 'D') {
            console.log(newSentence[i])
            console.log(counter++)

        }
       
    }
    // was returning in the for loop...doh!
    return counter
}

console.log(countDs("My friend Dylan got distracted at school"), 4)
console.log(countDs("Debris was scattered all over the place."), 2)
console.log(countDs("The rodents hibernated in their den."), 3)