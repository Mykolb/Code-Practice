### JS-THE HARD PARTS

- Problem 1: if you read the fn line by line you would never read lines 3-5 because the function was never called. So it's like it didn't happen until it was called 

- As soon as we start running code, we create a global execution contect 
    - Reading the code line by line
    - Creating a memory where every single piece of datat with that memory will be stored (aka Global Variable Environment)


## Single thread (it goes line by line, one at a time one after another)##

- Define a fn by writing function
- call a fn (). () say go run that function

- multiyBy2 is undefined because it isn't called 

 When you execute a fn you create a new ##EXECUTION CONTEXT## :

    - The thread of execution (we go through the code in the function line by line)
    - A local memory ('variable environment) where anything defined in the fn is stored

 ##Call stack## (special data structure) way of storing data, allows us to track, where is Js/thread of execution currently in my code 
    - last thing you put in is the first thing in it
    - stack of calls to functions
    - Pushing: adding to stack
    - Popping: removing from stack

- anything defined inside fn is stored in local memory

# const/function word says to JS free up some space to store this stuff that's following. Is state and live data

-pure fns: no side effects, when I run a fn it's only consequence is the return value; not mutating/changing anything in global memory; 

- Higher order fn's 


- synchronous execution:  one thing at a time one thing after another; how it code runs in call stack

## Functions in JS = first class objects or citizens (they behave like objetcs, are objects) 
    functions are objects which means they can be treated like any other objects. assigned to variables, etc

    - They can co-exist with/be treated like any other js object:
        1. assigned to variables and properties of other objects(methods)
        2. passed as arguments into functions
        3. returned as values from functions


## Higher order function is just a function that can take in another function

            - call back is the baby function that can be passed in as an input(param)
            - higher order because it's grand and can have other functions inside it
            - takes in a function or passes out afunction
            - just a term to describe these functions
            - simplify our code and keep it dry
            - ALLOW US TO RUN ASYNC CODE 

## CLOSURE: 
    - when functions get called (), we create a live store of data (local memory/state) for that function's execution context
    - when the function finished executing, it's local memory is deleted (except the returned value)
    -But what id our functions could hold on to live data/state between executions?
    - this would let our fn's definition have an associated cache/persistent memory

    - IT STARTS WITH RETURNING US RETURNING A FN FROM ANOTHER FN

## CALLING A FN IN THE SAM SCOPE IT WAS DEFINED
    - where you define your functions determines what variables your function have access to when you call() the function
    - that is closure, the fn got a bond to its surrounding data on it's back and when it was defined came the backpack
    - backpack is persistent, it holds onto that data live, holds store of data on it's back
    - could be referred to as 'THE CLOSED OVER VARIABLE ENVIRONMENT (C.O.V.E)
    - will look in local memory, lexical scope === backpack === closure), then in global memory

## LEXICAL SCOPE
    - when a function is defined, it gets a [[scope]] property that references the local memory/variable environment in which it has been defined

    - EX: when we call incrementCounter fn it wwill always look first in its immediate local memrory(variable environment), then in the [[scope]] property before it looks any further up 

## JAVASCRIPT STATIC/LEXICAL SCOPING

    - what it means when we say JS is lexically or statically scoped

    - our lexical scope (the THE AVAILABLE LIVE DATA when our fn was defined ) is what determines our available variables and prioritization at fn execution, not where our fn is called 

    -Lexical means: the position of my fn definition, not where it gets invoked, is what determines what data I will have available to me, when my fn gets invoked

## THE POWER OF CLOSURE

    - Now: Our functions get memories - once, memorize
    - ADVANCED: we can implement the module pattern in JS

## Asynchronicity is the backbone of modern web dev in DJ
    - JS is a single threaded (one command executing at a time, one line of code at a time ) and has a synchronous execution model (each line is executed in order the code appears)

    - what if we need to wait some time before we can execute certain bits of code? 

    - API: There is some data out there that is not in my app but I can interact/interface with that functionality

    - API's referred to as interface because they are not apart of JS but interfaces(communictes) with the web browser ex: setTimeout 

    
## CALLBACK QUEUE
     - pass function definition to que, waiting for some condition to take p[lace on call stack
     - won't add to call stack until call stack is empty 
       
## 3 RULES FOR THE EXECUTION OF SYNCHRONOUSLY DELAYED CODE:
    - Hold each deferred fn in a queue (the callback queue) when the API 'completes
    - Add the fn to the call stack 9ie execute the fn) ONLY when the call stack is totally empty (Have the Event Loop check this condition)

    - Event Loop: process of checking is my call stack empty, does my callstack have a fn in it, checking, checking....until it can add the fn when the event loop says it's ok

##MANY THINGS WHERE WAITING WOULD BLOCK OUR THREAD AND WE USE BROWSER API's INSTEAD:
    - a timer to finish running
    - new info from server(Ajax)
    - indication that a portion of the page has loaded
    - user interaction (clicks, mouseovers, drags)
    - writing/reading to file system (Node)
    - writing/reading database (Node)

    -JS cannot speak to internet

## SOME COME BACK WITH DATA> THE DESIGN OF THE BROWSER API WE ARE USING DETERMINES HOW WE ACCESS THE RETURNED DATA 


## ASYNC CALLBACKS, WEB API'S, CALLBACK QUEUE & EVENT LOOP ALLOW US TO DEFER OUT ACTIONS UNTIL THE "WORK" (AN API REQUEST, TIMER, ETC) IS COMPLETED AND CONTINUE RUNNING OUR CODE LINE BY LINE IN THE MEANTIME

##ASYNC JS IS THE BACKBONE OF THE MODERN WEB LETTING US BUILD FAST NON BLOCKING APPS

## OOP= POPULAR PARADIGM FOR STRUCTURING COMPLEX CODE
    - easy to add features & ucntionality
    - Performant (effieient in terms of memory)
    - Easy for us and other developers to reason about(a clear structure)

## OBJECTS STORE FN's WITH THEIR ASSOCIATED DATA
    - encapsulation: binding together the data and functions that manipulate the data