// Day 0
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    parameterVariable = 'Welcome to 10 Days of JavaScript!'
    parameterVariable = 'HackerRank is the best!'
    console.log(parameterVariable)
}

greeting()


//day 1
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    //turned string into number
    let numbers = firstInteger + Number.parseInt(secondInteger)
    console.log(numbers)
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    //turned string decimal into decimal
    let decimals = firstDecimal + parseFloat(secondDecimal)
    console.log(decimals)
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    //concat 
    let strings = firstString + "" + secondString
    console.log(strings)
}

performOperation(4, 2.9, 'hi')


//day 1
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width
    return area
}
/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let sum = length + width
    let perimeter;
    // Write your code here
    perimeter = 2 * (sum)
    return perimeter;
}

console.log(getArea(4, 3))
console.log(getPerimeter(5, 5))


// day 1
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r = 5
    // Print the area of the circle:
    //ise Math.pow for exponent with base as r, and 2 as exponent
     let area = PI * Math.pow(r, 2)
     console.log(area)
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r
    console.log(perimeter)
}

main()

//day 2
function getGrade(score) {
    let grade; 
    // Write your code here
    if ( score > 25 && score <= 30 ) {
        grade = 'A'
        return grade 
    } else if (score > 20 && score <= 25) {
        grade = 'B'
        return grade 
    } else if (score > 15 && score <= 20){
        grade = 'C'
        return grade 
    } else if (score > 10 && score <= 15) {
        grade = 'D'
        return grade 
    } else if (score > 5 && score <= 10) {
        grade = 'E'
        return grade 
    } else {
    (score >= 0 && score <= 5) 
        grade = 'F'
    return grade 
    }
}

console.log(getGrade(22))
console.log(getGrade(27))
console.log(getGrade(15))
console.log(getGrade(18))
console.log(getGrade(6))
console.log(getGrade(4))


//day 2
function factorial(n) {
    if(n===0||n===1){
      return 1;
    }
    //works like 5! = 5 * (5-1) * (4-1)* (3-1) * (2-1)
    return n*factorial(n-1);
   }


// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

let letter1 = new Set();
console.log(letter1)
let letter2 = new Set();
console.log(letter2)
let letter3 = new Set();
console.log(letter3)
let letter4 = new Set();
console.log(letter4)


 

function getLetter(s) {
    let letter1 = new Set();
    console.log(letter1)
    let letter2 = new Set();
    console.log(letter2)
    let letter3 = new Set();
    console.log(letter3)
    let letter4 = new Set();
    console.log(letter4)




    letter1.add('a').add('e').add('i').add('o').add('u')
    console.log(letter1)

    letter2.add('b').add('c').add('d').add('f').add('g')
    console.log(letter2)

    letter3.add('h').add('j').add('k').add('l').add('m').add('n')
    console.log(letter3)

    letter4.add('n').add('p').add('r').add('s').add('t').add('v').add('w').add('x').add('y').add('z')
    console.log(letter4)

    switch (true) {
        case letter1.has(s.charAt(0)):
            return 'A';
            break;
        case letter2.has(s.charAt(0)):
            return 'B'
            break;
        case letter3.has(s.charAt(0)):
            return 'C'
            break;
        case letter4.has(s.charAt(0)):
            return 'D'
            break;
        default:
            break;

}
}



console.log(getLetter('rrs'))
console.log(getLetter('mxy'))
console.log(getLetter('bay'))



