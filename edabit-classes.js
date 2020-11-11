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


// class Book {
//     constructor(author, published) {
//         this.author = author;
//         this.published = published;
//     }
// }

// let Author = {
//     name: this.name,
//     books: this.books,
// }

// let Publisher = new class {
//     constructor(authors, books) {
//         this.authors = authors;
//         this.books = books;
//     }
// }

// class Review {
//     constructor(rating, user) {
//         this.rating = rating;
//         this.user = user; 
//     }
// }


// let book = new Book 
// let review = new Review 

// console.log(book instanceof Book, true)
// console.log(book.hasOwnProperty("author"), true, "The class Book needs to have a value for author.")
// console.log(book.hasOwnProperty("published"), true, "The class Book needs to have a value for published.")
// console.log(Author.hasOwnProperty("name"), true, "The class Author needs to have a value for name.")
// console.log(Author.hasOwnProperty("books"), true, "The class Author needs to have a value for books.")
// console.log(Publisher.hasOwnProperty("authors"), true, "The class Publisher needs to have a value for authors.")
// console.log(Publisher.hasOwnProperty("books"), true, "The class Publisher needs to have a value for books.")
// console.log(review instanceof Review, true)
// console.log(review.hasOwnProperty("rating"), true, "The class Review needs to have a value for rating.")
// console.log(review.hasOwnProperty("user"), true, "The class Review needs to have a value for user.")

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



// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Make sure only the first letter of each name is capitalised.

class Name {
	constructor(fname, lname, fullname, initials) {
        this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase()
        this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase()
        this.fullname = `${this.fname} ${this.lname}`
        this.initials = this.fname[0] + '.' + this.lname[0]
    }
}



a1 = new Name("john", "SMITH")
console.log(a1.fname, "John")
console.log(a1.lname, "Smith")
console.log(a1.fullname, "John Smith")
console.log(a1.initials, "J.S")

a2 = new Name("sARah", "fRolliE")
console.log(a2.fname, "Sarah")
console.log(a2.lname, "Frollie")
console.log(a2.fullname, "Sarah Frollie")
console.log(a2.initials, "S.F")


// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.


class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
    getTitle() {
        return "Title:" + ' ' + `${this.title}`
    }

    getAuthor() {
        return "Author:" + ' ' +`${this.author}`
    }
}

// Instantiate your Book constructor here
PP = new Book("Pride and Prejudice", "Jane Austen")
H = new Book("Hamlet", "William Shakespeare")
WP = new Book("War and Peace", "Leo Tolstoy")



console.log(PP.title, "Pride and Prejudice")
console.log(PP.author, "Jane Austen")
console.log(PP.getTitle(), 'Title: Pride and Prejudice')
console.log(PP.getAuthor(), 'Author: Jane Austen')
console.log(H.title, "Hamlet")
console.log(H.author, "William Shakespeare")
console.log(H.getTitle(), 'Title: Hamlet')
console.log(H.getAuthor(), 'Author: William Shakespeare')
console.log(WP.title, "War and Peace")
console.log(WP.author, "Leo Tolstoy")
console.log(WP.getTitle(), 'Title: War and Peace')
console.log(WP.getAuthor(), 'Author: Leo Tolstoy')



// You have to build a rudimentary architecture that will simulate a system of XP points distribution among two students that solve a series of given challenges on Edabit.

// Step 1: Build a class Challenge

// The constructor parameters are id and level. The id will be the numerical identifier of the challenge, and level will be a code made of two uppercased letters:

// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"
// Step 2: Build a method for class Challenge

// The name of the method inside class Challenge is points().

// The method must return the amount of points earned solving a challenge, based on the level of the challenge:

// VE = 5 XP
// EA = 10 XP
// ME= 20 XP
// HA= 40 XP
// VH = 80 XP
// EX = 120 XP
// Step 3: Build a class User

// The constructor parameters are name, xp and log. The name will be, trivially, the username. The xp is the accumulator that stores the XP points earned. The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.

// Step 4: Build a method for the class User

// The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter, it will accept an object of the Challenge class.

// The method must increment the xp of the user and store the challenge id into the array log.

// Step 5: Declare the instances needed for the tests

// Now that everything is ready, you have to set the exercise and declare the instances of the created classes, for sustaining the tests that are made. Start with the users declarations, they are two:

// user1 ➞ name = "Madam" | xp = 0 | log = []
// user2 ➞ name = "Steve" | xp = 0 | log = []
// Now, declare the challenges, they are six:

// challenge1 ➞ id = 1 | level = "VE";
// challenge2 ➞ id = 2 | level = "EA";
// challenge3 ➞ id = 3 | level = "ME";
// challenge4 ➞ id = 4 | level = "HA";
// challenge5 ➞ id = 5 | level = "VH";
// challenge6 ➞ id = 6 | level = "EX";
// Finally, you have to declare which are the challenges solved by the users, using the setter that you have implemented before:

// Madam solves the following challenges, in the order:

// challenge1 , challenge4 , challenge6
// Steve solves the,following challenges, in the order:

// challenge5 , challenge3, challenge2
// Step 6: The testing mechanics

// Tests will verify if after calling the properties and methods of the instance created by you, an expected result is returned. So, you don't have to return a result, but just being sure that everything is set according to Instructions.

// Examples
// user1.name ➞ "Madam"

// user2.xp ➞ 110
// // Steve has solved challenges 5, 3 and 2 (80 + 20 + 10 points)

// user1.log ➞ [1, 4, 6]
// // Remember to respect the order given in Instructions for to store data into the log

// challenge4.level ➞ "HA"

// challenge3.id ➞ 3

// challenge1.points ➞ 5