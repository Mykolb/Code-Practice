//prob 1
const num = 3 //runs 1st
function multiplyBy2 (inputNumber) {
    const result = inputNumber*2
    return result 
}

const name = 'Will' //runs 2nd

const output = multiplyBy2(4); //runs 3rd
const newOutput = multiplyBy2(10);

//prob 2
function squared(num) {
 return num * num 
}

console.log(squared(10))
 
//prob 3 
//storing fn in memory under label copyArrayandMultiplyBy2
function copyArrayandMultiplyBy2(array) { //runs 1st
    let output = [];    //lines 24-27 not run because fn isn't called 
    for (let i = 0; i < array.length; i++) {    
        output.push(array[i] * 2)
    }
    return output
}
const myArray = [1, 2, 3] //runs 2nd
let result = copyArrayandMultiplyBy2(myArray) //result doesn't care about what happens with wi copyArray it cares what does that statement become in (myArray)


//array: [1, 2, 3] 
//output: [2, 4, 6]

//For loop index starts at 0, adds 1, (0+1=1)  is pushed into a new array and multiplied by 2 resulting in 2 at index[0].
//For loop runs again starting with 1, adds 1 (1+1=2), is pushed into a new array and multiplied by 2 resulting in 4 at index [1],  does the same for 3
// Once it hits 3, the length of the array is no longer less than and it stops running the for loop and hits return output 

//prob 5
function copyArrayandDivideBy2(array) { //runs 1st declare fn
    let output = [];    //lines 24-27 not run becaus fn isn't called 
    for (let i = 0; i < array.length; i++) {    
        output.push(array[i] / 2)
    }
    return output
}
const myArray = [1, 2, 3] //runs 2nd
let result = copyArrayandDivideBy2(myArray) //would initially be undefinded b/c JS doesn't know what it is, it isn't called 


//array: [1, 2, 3] 
//output: [0.5, 1, 1.5]


//prob 4 & 5 aren't DRY
//can generalize fn 
//EX:
function copyArrayAndManipulate(array, instructions) {  //1st declare fn; instructions replaced with the multiplyBy2 fn definition
    let output = [];    //lines 24-27 not run becaus fn isn't called 
    for (let i = 0; i < array.length; i++) {    
        output.push(instructions(array[i]))
    }
    return output
}
function multiplyBy2(input) { //2nd lil baby fn, if console.log(multiplyBy2), would get the whole fn definition
return input * 2
}

let result = copyArrayAndManipulate([1,2,3], multiplyBy2)


function copyArrayAndManipulate(array, instructions) { //<------- Higher order function 
    let output = [];   
    for (let i = 0; i < array.length; i++) {    
        output.push(instructions(array[i]))
    }
    return output
}
function multiplyBy2(input) { //<------ call back 
}

let result = copyArrayAndManipulate([1,2,3], multiplyBy2)




function instructionGenerator() { //func declaration runs first, skips middle b/c func isn't called ()
    function multiplyBy2 (num) { //tells JS to go free some space up in memory, use that label to refer to functionality we just defined
        return num*2
    }
    return multiplyBy2
}


let generateFunc = instructionGenerator() //generateFunc is a label, temp undefined; instructionGenerator runs b/c ()
//() say go look for this functions and do it's code, if there's input great, fill it in, if not go run me 

generateFunc(3) //would have to be called to run multiplyBy2 b/c multiplyBy2  are stored here
//starts new execution context 
//running globally


function outer() {
    let counter = 0;
    function incrementCounter() {
        counter ++
    }
    return incrementCounter
}

let myNewFunc = outer()
myNewFunc()

//lines 106-111 incrementCounter fun creates a special bond to immediate total surrounding live local mempory
//this fn gets a special bond to all surrounfing data
//incrementCounter gets reference to surrounding data when it gets defined in this case, counter is
 //that is closure, the  fn got a bond to its surrounding data on it's back and when it was defined came the backpack
//backpack is persistent, it holds onto that data live, holds store of data on it's back


function printHello() {
    console.log('Hello')
}
// setTimeout | printHello fn | complete
setTimeout(printHello, 0) // when setTimeout is done running it executes the printHello fn and 

console.log('Me first') //printed before printHello b

function printHello() { //print hello is asynchronously delayed
    console.log('Hello')
}

function blockFor1Sec() { //doing something here that just happens to take time for the computer to do; thousand millisecs before we come out of this function
    //blocks in the JS thread for 1 sec
    //assume for loop is in here 
}

setTimeout(printHello, 0)

blockFor1Sec()

console.log('First')




function display(data) { //define fn
    console.log(data.post)
}

//jquery
$.get('http://twitter.com/willsen/tweet/1', display)

console.log('First!')

//OOP
let user1 = {
    name: 'Will', 
    score: 3,
    increment: function() {
        user1.score++
    }
}

user1.increment()

//using dot notation

let user2 = {} //create empty obj

user2.name = 'Paul'; //assign propertied to that obj
user2.score = 2;
user2.increment = function() {
    user2.score++
}

//using obj.create

let user3 = Object.create(null)//create empty obj; null isn't reason that is it empty

user2.name = 'Sam'; //assign properties to that obj
user2.score =  8;
user2.increment = function() {
    user3.score++
}

//objects above not dry
//GENERALIZE!!
//while valid it would fill up memeory funning the same increment function 
function createUser(name, score ) {
    let newUser = {}
        newUser.name = name; //creating properties
        newUser.score = score;
        newUser.increment = function() {
            newUser.score++
        }
}

let user1 = createUser('Will', 3)
let user2 = createUser('Sam', 8)
user1.increment() //looks for user1 then look sin user1 onject ofr increment fn
user2.increment()

//using prototype nature of JS-solution 2 in full
//sophisticated but not standard 
function userCreator (name, score) {
    let newUser = Object.create(userFunctionStore) //create an empty obj; declaring variable and assigning an empty object with userFunction store set as object 
    newUser.name = name
    newUser.score = score
    return newUser
}

let userFunctionStore = {  //obj with 2 fn's stored in it
    increment: function(){this.score++},
    login: function()(console.log('You are logged in'))
}

let user1 = userCreator('Mary', 3)
let user2 = userCreator('Paul', 6)                
user1.increment()

//when we call the constructor fn with new in front we automate 2 things:
    //1. Create a new user obj
    //2. return the new user obj


    //new keyword automates alot of manual work
    function userCreator (name, score) {
        // let newUser = Object.create(userFunctionStore) //create an empty obj; declaring variable and assigning an empty object with userFunction store set as object 
        newUser.name = name
        newUser.score = score
        // return newUser
    }
    
   userCreator.prototype // {}
   userCreator.prototype.increment = function(){
       this.score ++ 
   }
    
    let user1 = new userCreator('Mary', 3)
    
    
    //ES 2015 version of prototype fn above 
    class User {
        constructor (name, score) {
            this.name = name
            this.score = score
        }


        increment() {
            this.score++
        }
        login() {
            console.log('login')
        }
    }

    let user1 = new User('Eva, 0')
    user1.increment()