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

