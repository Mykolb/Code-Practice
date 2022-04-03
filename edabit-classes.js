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


// Point Series 1: Skeleton
// Write a class called Point that represents a point in two-dimensional. It should have the following constructor:

// constructor(x, y)
// It should have the following properties:

// x

// y
// It should have the following methods:

// toString()
// Returns a string representation of this point, as [x=1, y=2].

// Point class
class Point {
	constructor(x, y) {
        // complete function
        this.x = x.toString()
        this.y = y.toString()
	}

    toString() {
        return `[x=${this.x}, y=${this.y}]`
    }

}


console.log((new Point(1,2)).x, 1, "Invalid X.");
console.log((new Point(1,2)).y, 2, "Invalid Y.");
console.log((new Point(1,2)).toString(), "[x=1, y=2]", "Invalid toString output.");


// Rectangle Series 1: Skeleton
// Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:

// constructor(x, y, width, height)
// Constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
// It should have the following properties:

// x

// y

// width

// height
// It should have the following methods:

// toString()
// Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

class Rectangle {
	constructor(x, y, width, height) {
        // complete function
        this.x = x
        this.y = y
        this.width = width
        this.height = height
	}

    toString() {
        return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
    }
}

console.log((new Rectangle(1,2,5,6)).x, 1, "Invalid X.");
console.log((new Rectangle(1,2,5,6)).y, 2, "Invalid Y.");
console.log((new Rectangle(1,2,5,6)).width, 5, "Invalid Width.");
console.log((new Rectangle(1,2,5,6)).height, 6, "Invalid Height.");
console.log((new Rectangle(1,2,5,6)).toString(), "[x=1, y=2, width=5, height=6]", "Invalid toString output.");

