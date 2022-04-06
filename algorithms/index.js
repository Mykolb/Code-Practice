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