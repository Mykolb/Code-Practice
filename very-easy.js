
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

console.log(reverse([1,2,3,4]))
console.log(reverse([100,105,110, 115]))

//ES6 Syntax
//works
let rev = array => array.reverse().sort();


console.log(rev([6,7,8,9]))
console.log(rev([56,55,23,19]))

//max edge of a triangle 
function nextEdge(side1, side2) {
    maxEdge = (side1 + side2) - 1  
	return maxEdge
}

// console.log(nextEdge(20, 6), 2)
// console.log(nextEdge(34, 7), 5)
 
const edge = (s1, s2) => {
    max = (s1, s2) - 1 
    return max
    }

console.log(nextEdge(10, 6))
console.log(nextEdge(15, 7))

//concatenating two arrays using concat
arr1 = [1, 2, 3]
arr2 = [4,5,6]

const concat = (arr1, arr2) => {
    let joinedArray = arr1.concat(arr2)
       return joinedArray
   }

console.log(concat(arr1, arr2))

//concatenating using spread 


const spread = (arr3, arr4) => {
    let array = [...arr3, ...arr4]
       return array
   }

arr3 = [7, 8, 9]
arr4 = [10,11,12]

console.log(spread(arr3, arr4))

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

 function lessThanOrEqualToZero(num) {
     if(num <= 0) {
         return true
     } else {
         return false
     }
 }

console.log(lessThanOrEqualToZero(4))
console.log(lessThanOrEqualToZero(-2))

const lessThanZero = num => {
  return num <= 0 ? true : false 
}

console.log(lessThanZero(3))
console.log(lessThanZero(-10))

//find index of given item
//returns element ion first index of array
//item number tells you to start from that index 
function search(arr, item) {
    return arr.indexOf(item)
}

console.log(search(['apple', 'banana', 'oranges', 'pears'], 'strawberry')) // expected -1 b/c doesn't exist
console.log(search(['apple', 'banana', 'oranges', 'pears'], 'oranges')) //expected 2

const searching = (arr, item) => arr.indexOf(item)


console.log(searching(['red', 'blue', 'purple', 'yellow', 'taupe'], 'taupe')) //expected 4
console.log(searching(['red', 'blue', 'purple', 'yellow', 'taupe'], 'red')) //expected 0


//concat first/last name into string 

function concatName(firstName, lastName) {
    const last = lastName;
    const first = firstName;

return `${last}, ${first}`
}

console.log(concatName('Siri', 'Berry'))
console.log(concatName('Mary', 'Pat'))




const concatN = (firstName, lastName) => `${lastName}, ${firstName}`

console.log(concatName('Maya', 'Lynn'))
console.log(concatName('Dj', 'Khaled'))



//% modulus calculates remainder after division 
//if remainder after dividing by 5 is 0, return true, else false 
function divisibleByFive(n) {
	if (n % 5 === 0) {
		return true
	} else {
		return false
	}
}

console.log(divisibleByFive(5))
console.log(divisibleByFive(15))
console.log(divisibleByFive(2))

const divisibleFive = num => num % 5 === 0 ? true : false;

console.log(divisibleFive(5))
console.log(divisibleFive(20))
console.log(divisibleFive(23))
console.log(divisibleFive(41))

//get first item in array
function getFirstValue(arr) {
    return arr[0]
}

console.log(getFirstValue(['1', '2', '3']))
console.log(getFirstValue(['cheese', '2', 'dog', '7']))


const getFirst = arr => arr[0];

console.log(getFirst(['hey', 'hi', 'hello']))
console.log(getFirst(['soup', 'tomato', 'carrot', 'lettuce', 'broccoli']))


//divisible by 100
//% modulus calculates remainder after division 
//if remainder after dividing by 100 is 0, return true, else false 
function divisible(num) {
    if( num % 100 === 0) {
        return true
    }
    return false;
}

console.log(divisible(10))
console.log(divisible(200))
console.log(divisible(34))


const divisibles = num => num % 100 === 0 ? true : false;

console.log(divisibles(10000))
console.log(divisibles(5))


// Write a function that returns the length of a string. Make your function recursive.
//works!
// function length(str) {
// 	return str.length
// }

// console.log(length('hello'))
// console.log(length('i'))
// console.log(length('suuuuup'))



const length = str => str.length

console.log(length('hello'))
console.log(length('i'))
console.log(length('suuuuup'))




class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';


		
}
// Write the classes for StandardPlan and PremiumPlan here!

class StandardPlan extends BasicPlan {
			static hasHD = true;
			static numOfDevices = 2;
			static price = '$12.99';
	}



class PremiumPlan extends StandardPlan {
		static hasUHD = true;
		static numOfDevices = 4;
		static price = '$15.99';
	}


console.log(BasicPlan.canStream, true)
console.log(BasicPlan.canDownload, true)
console.log(BasicPlan.numOfDevices, 1)
console.log(BasicPlan.hasSD, true)
console.log(BasicPlan.hasHD, false)
console.log(BasicPlan.hasUHD, false)
console.log(BasicPlan.price, '$8.99')
console.log(StandardPlan.canStream, true, 'Remember to add the StandardPlan class!')
console.log(StandardPlan.canDownload, true)
console.log(StandardPlan.numOfDevices, 2)
console.log(StandardPlan.hasSD, true)
console.log(StandardPlan.hasHD, true)
console.log(StandardPlan.hasUHD, false)
console.log(StandardPlan.price, '$12.99')
console.log(PremiumPlan.canStream, true, 'Remember to add the PremiumPlan class!')
console.log(PremiumPlan.canDownload, true)
console.log(PremiumPlan.numOfDevices, 4)
console.log(PremiumPlan.hasSD, true)
console.log(PremiumPlan.hasHD, true)
console.log(PremiumPlan.hasUHD, true)
console.log(PremiumPlan.price, '$15.99')



// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
// return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

class Person {
	constructor(name, age, other) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
        // Write code here!
       if (other.age > this.age) {
           console.log(other.age)
        //    console.log(this.age)
           return `${other.name} is older than me.`
       } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
       } else {
        return `${other.name} is the same age as me.`
       }
		
	}
}

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2), "Joel is older than me.")
console.log(p1.compareAge(p3), "Lily is the same age as me.")

console.log(p2.compareAge(p1), "Samuel is younger than me.")
console.log(p2.compareAge(p3), "Lily is younger than me.")

console.log(p3.compareAge(p1), "Samuel is the same age as me.")
console.log(p3.compareAge(p2), "Joel is older than me.")


// Challenge
// Create a Book class using a JavaScript function - instantiable. x 
// It should have a author and published property. x

// Create an Author class using a literal object - singleton.

// It should have a name and books property.

// Create a Publisher class by using the new constructor and an anonymous function - singleton.

// It should have a authors and books property.

// Create a Review class using a class declaration - instantiable.

// It should have a rating and user property.
// Bonus (optional)
// Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.

// Notes
// All classes should begin with Capital letters.
// All class properties should have default(initial) values.


class Book {
    constructor(author, published) {
        this.author = author;
        this.published = published;
    }
}

class Author extends Book {
    constructor(name, books) {
        super(books, name)
        this.name = name;
        this.books = books;

    }
}

class Publisher extends Author {
    constructor(books, name) { 
        super(books)
        this.authors = authors;
        
    }
}

class Review {
    constructor(rating, user) {
        this.rating = rating;
        this.user = user; 
    }
}


let book = new Book 
let review = new Review 

console.log(book instanceof Book, true)
console.log(book.hasOwnProperty("author"), true, "The class Book needs to have a value for author.")
console.log(book.hasOwnProperty("published"), true, "The class Book needs to have a value for published.")
console.log(Author.hasOwnProperty("name"), true, "The class Author needs to have a value for name.")
console.log(Author.hasOwnProperty("books"), true, "The class Author needs to have a value for books.")
console.log(Publisher.hasOwnProperty("authors"), true, "The class Publisher needs to have a value for authors.")
console.log(Publisher.hasOwnProperty("books"), true, "The class Publisher needs to have a value for books.")
console.log(review instanceof Review, true)
console.log(review.hasOwnProperty("rating"), true, "The class Review needs to have a value for rating.")
console.log(review.hasOwnProperty("user"), true, "The class Review needs to have a value for user.")

if(typeof Bookstore === "undefined") {
	return null 
} else {
console.log(Bookstore.hasOwnProperty("books"), true, "The class Bookstore needs to have a value for books.")
console.log(Bookstore.hasOwnProperty("prices"), true, "The class Bookstore needs to have a value for prices.")
}