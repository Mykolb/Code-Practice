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