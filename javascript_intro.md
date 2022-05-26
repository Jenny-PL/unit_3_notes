#

# Functions

**Note**: Javascript will let you not put in required parameters without throwing an error.  Istead those variables within the function will be 'undefined'.

## Function Expressions
``` 
const fizzBuzz = function(num) {
    if (num % 15 === 0) {
    return 'FizzBuzz';
    } else if (num % 3 === 0) {
    return 'Fizz';
    }
}
```
This function would be called with syntax:
```
fizzBuzz(7);
```
** General Syntax**:  
 `const functionName = function(paremeter, parameter) {
    code here;
    return something;
}`  


## VS. Function declarations:
```
function increaseQuantity(initial_qty) {
    return initial_qty + 1;
}
```
To call the function: 
```
increaseQuantity(5);
```

**Note:** Ada prefers **functional expressions** when defining functions. why?
- Proactively guard against bugs with scope and hoisting (?)
- Sets up good habits for more advanced JavaScript syntax


# Variables
## let 
`let food;`   // declaration of variable  
`food = 'pizza';`   // variable assignment  
`let food = 'pizza';` //declaration & assignemnt together
- **let** can be <mark>reassigned </mark>
- has **block scope**

## const
Same as above, but use `const` in place of `let`.  
- const **cannot** be reassigned. It is CONSTANT; fixed.
- has **block scope**

## var
Discouraged; out of fashion to use.
- If defined within a function, it will have scope throughout the entire function. If defined outside a function it will have global scope (aka not block scope)

# Learning Resources:
- [You don't know JS Yet](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch1.md)  
- [WesBos JS instruction](https://wesbos.com/javascript)  
- [YouTubeChannel- fun fun function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
- [CodeCademy](https://www.codecademy.com/learn/introduction-to-javascript)