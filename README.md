# Episode 1 : Introduction to Node JS
- Node Js
    - Javascript runtime built on chromes v8 js engine.
    - Maintained by - Open JS foundation
    Node JS :  Run JS on Server but on any server - Run JS outside of the browser
    - Work with the file systems.
    • Core modules
        ○ Http - Launch a server and send a request
        ○ Https - Launch a SSL server
        ○ Path - 
        ○ Fs
        ○ OS
        ○ Event Loop : Keeps on running as long as there are event listeners registered.
        ○ Event Driven Architecture
        ○ Asynchronous I/O
        ○ Non-Blocking I/O
    
- Node Js ignited by v8 google chrome engine.

# Episode 2 : JS on Server
- JS on the server
- V8 Engine - Written in c++ - execute the program.
- JS ---------------> v8 Engine (c++) --------------------> Machine Language

# Episode 3 :  Lets Write Code
- REPL
 - Read the code
 - Evaluate the code
 - Print the code
 - Loop Again.

- Common JS Modules - synchronous - non-strict mode
- ES modules (ESM) - Standard JS - asynchronous - strict mode
- module.exports = {} is empty object
- module.export = {x,y } - we are attaching the x and y to empty object

- Nested modules
- module is a collection of code which is separate to itself. Private code.
- calculate
    - sum
    - multiply
    - index - (here we can import all the functions and variables from sum, multiply file  )
    - and calculte will be the separte module and will require calculate module.

# what require does
    - Suppose we are requiring one file sum.js then require creates one function and all the code of 
    sum.js will be added to the function

    function () {
        //all the code of the sum.js is here and we can not access functions and variables of that sum.js file outside
        //the file. The only way to access the function and variables is to export them from file.
    }
    IIFE - above function id IIFE - Immediately invked function expression - annonymous function

    {function (module, require) {
        function calculateSum(a,b) {
            return a+b
        }
    })(module.exports= {})

    - how module is coming here. Node js adds module to the above function.

# steps when we require a module
1. Resolving the module
    - import module, json file, node module imports
2. Loading the module
    - File content is loaded
3. Wraps inside the IIFE
4. Code evalution -  module.exports happens - returns
5. caching

# Libuv
- it takes or offloads the tasks of v8 engine
- aysnc i/o made simple
- middle layer between js and os


# Dive deep into v8 engine: 

# Express
- Express is a wrapper around the node js - built on node js
- To create a web server.
- Use 2nd approach- where mongo db itself uses aws to deploy the application.

