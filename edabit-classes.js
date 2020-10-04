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

let Author = {
    name: this.name,
    books: this.books,
}

let Publisher = new class {
    constructor(authors, books) {
        this.authors = authors;
        this.books = books;
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

// if(typeof Bookstore === "undefined") {
// 	return null 
// } else {
// console.log(Bookstore.hasOwnProperty("books"), true, "The class Bookstore needs to have a value for books.")
// console.log(Bookstore.hasOwnProperty("prices"), true, "The class Bookstore needs to have a value for prices.")
// }



// Create a class that takes the following four arguements for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"

class Player {
	constructor(name, age, height, weight) {
        // complete function
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
	}
	
	getAge() {
        // complete function
        return `${this.name} is age ${this.age}`;
	}

	getHeight() {
        // complete function
        return `${this.name} is ${this.height}cm`;
	}
		
	getWeight() {
        // complete function
       return `${this.name} weighs ${this.weight}kg`;
	}
}		

player1 = new Player('Patrick Mahomes', 24, 188, 104)
player2 = new Player('Jimmy Garoppolo', 28, 188, 102)
player3 = new Player('Julio Jones', 31, 191, 100)

console.log(player1.getAge(), 'Patrick Mahomes is age 24')
console.log(player1.getHeight(), 'Patrick Mahomes is 188cm')
console.log(player1.getWeight(), 'Patrick Mahomes weighs 104kg')

console.log(player2.getAge(), 'Jimmy Garoppolo is age 28')
console.log(player2.getHeight(), 'Jimmy Garoppolo is 188cm')
console.log(player2.getWeight(), 'Jimmy Garoppolo weighs 102kg')

console.log(player3.getAge(), 'Julio Jones is age 31')
console.log(player3.getHeight(), 'Julio Jones is 191cm')




// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.




class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
        this.fullname = `${this.firstname} ${this.lastname}`
        this.email = (this.firstname + '.' + this.lastname + '@company.com').toLowerCase()
		
	}
}

emp1 = new Employee("John", "Smith")
emp2 = new Employee("Mary",  "Sue")
emp3 = new Employee("Antony", "Walker")
emp4 = new Employee("Joshua", "Senoron")

console.log(emp1.firstname, "John")
console.log(emp1.lastname, "Smith")
console.log(emp1.fullname, "John Smith")
console.log(emp1.email, "john.smith@company.com")
console.log(emp2.firstname, "Mary")
console.log(emp2.lastname, "Sue")
console.log(emp2.fullname, "Mary Sue")
console.log(emp2.email, "mary.sue@company.com")
console.log(emp3.firstname, "Antony")
console.log(emp3.lastname, "Walker")
console.log(emp3.fullname, "Antony Walker")
console.log(emp3.email, "antony.walker@company.com")
console.log(emp4.firstname, "Joshua")
console.log(emp4.lastname, "Senoron")
console.log(emp4.fullname, "Joshua Senoron")
console.log(emp4.email, "joshua.senoron@company.com")