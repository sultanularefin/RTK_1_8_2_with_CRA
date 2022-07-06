

#### Lexical scoping
###### Consider the following example code:


```js
function init()
{
var name = 'Mozilla'; // name is a local variable created by init

         function displayName()  // displayName() is the inner function, a closure

           { 
          alert(name); // use variable declared in the parent function
           }
displayName();
}


init();
```




**init()** creates a local variable called **name** and a function called **displayName()**. The **displayName()** function is an inner function 
that is defined inside init() and is available only within the body of the **init()** function. Note that the **displayName()** function has no local
variables of its own. However, *since inner functions have access to the variables of outer functions, displayName() can access the variable name 
declared in the parent function, init()*.

Run the code using this **JSFiddle** link and *notice that the alert() statement within the displayName() function successfully 
displays the value of the name variable*, which is declared in its parent function. 
* This is an example of lexical scoping, which describes how a parser resolves variable 
* names when functions are nested.
* The word lexical refers to the fact that lexical scoping uses the location where a variable is
* declared within the source code to determine where 
* that variable is available. Nested functions have access to variables declared in their outer scope.

#### Closure
Consider the following code example:
```js
function makeFunc()
 {
 	 var name = 'Mozilla';
  		function displayName() 
        {
   		 alert(name);
        }
  return displayName;
}
var myFunc = makeFunc();
myFunc();  // entry point
```

Running this code has exactly *the same effect as the previous example of the init() function above.* What's different (and interesting) 
is that the **displayName() inner function is returned from the outer function before being executed**.

At first glance, it might seem *unintuitive that this code still works*. **In some programming languages,
the local variables within a function exist for just the duration of that function's execution. Once makeFunc() finishes executing, 
you might expect that the name variable would no longer be accessible.**

####### However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that **functions in JavaScript form closures**. **A closure is the combination of a function and the lexical environment
within which that function was declared. This environment consists of any local variables that were in-scope at 
the time the closure was created.

In this case, **myFunc** is a reference to the instance of the function displayName that is created when makeFunc is run
. The instance of displayName maintains a reference to its lexical environment, within which the variable
name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.

Here's a slightly more interesting example—a makeAdder function:
```js
function makeAdder(x) {
return function(y) {
return x + y;
};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```



The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared.
This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run.

Here's a slightly more interesting example—a makeAdder function:
```js
function makeAdder(x) {
console.log("x in makeAdder: ", x);
return function(y) {
console.log("y in anonymous func: ", y);
return x + y;
};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

```
## output
```java
  dnesday__byvl$ node closure.js 
  x in makeAdder:  5
  x in makeAdder:  10
  y in anonymous func:  2
  7
  y in anonymous func:  2
  12
arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/outlander_march_05_22/april_6_wednesday__byvl$ 
    
```
 
 
 




## https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
The event loop
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 
This model is quite different from models in other languages like C and Java.





## CUstom Hook in React.
https://reactjs.org/docs/hooks-custom.html 



## HOC in React:
https://reactjs.org/docs/higher-order-components.html 




## interview : july_06_2022

1. event loop:
2. is javaScript single threaded.

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events,
 and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a **single thread**, 
but using a few smart data structures, it gives us the illusion 
of multi-threading. Let’s take a look at what happens on the back-end.


## virtual dom:

What is the Virtual DOM?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by 
a library such as ReactDOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. 
This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.





