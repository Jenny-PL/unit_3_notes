# JavaScript

## Functions

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

## Anonymous functions
- similar idea to lambda functions
- not named; not re-usable
- Can make your code more readable... shows exactly whats happening when iterating over a list with **forEach loop** or **map() function**.

Syntax:
```
function () {
    console.log(`My jelly bean guess is ${Math.floor(random.Math()*50)}`;
    }
```
- To invoke this function, wrap it in parathensis and place closed parathensis after it.  It is unlikely we'd want to do this... more likely, function will be called within a forEach loop, map(), or reduce().
```
(function () {
    console.log(`My jelly bean guess is ${Math.floor(random.Math()*50)}`;
    })();
```

**With arrow syntax**:
```
() => console.log(`My jelly bean guess is ${Math.floor(random.Math()*50)}`;
```

**Example use of anonymous Fx with forEach loop:**
```
const cashTips = [4, 7, 9, 12, 3, 18, 6];
let sum = 0;

cashTips.forEach((tip) => {
  sum += tip;
});

const average = sum / cashTips.length;
console.log(`The average cash tip is ${average}`);
```
    
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

## Template literals (aka string interpolation)
Use backticks and ${} for interpolation... similar to f-strings in Python
```
const name = "Xinting";
console.log(`Hi ${name}! How's it going?`);
//ouptut: Hi Xinting! How's it going?
```

## Some Learning Resources:
- [You don't know JS Yet](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch1.md)  
- [WesBos JS instruction](https://wesbos.com/javascript)  
- [YouTubeChannel- fun fun function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
- [CodeCademy](https://www.codecademy.com/learn/introduction-to-javascript)

