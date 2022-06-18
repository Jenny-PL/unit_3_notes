# Data types in JS

## Number
- includes numbers with decimals
- [Number MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - Number.isInteger();
## String
- text/characters surounded by single or double quotes
- [built-in string methods from MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string)
- A few examples: length(), trim(), at(index), includes(), startsWith(), indexOf(), repeat(count), slice(), toLowerCase(), toUpperCase()
```
'hello'.length; //ouptut: 5
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'mars'); // "hello, mars"
'hello'.toUpperCase(); // "HELLO"
  ```
**One way to change a number to a string**: Add an empty string to it!  Any time a string is added to something else, everthing being added to that string is converted to a string prior to concatination.
```
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"
 5 + ''; // "5"
```

## Boolean
- `false`: includes `false`, `0`, `""`, `NaN`, `null`, `undefined`
- `true`: everything else
- can be used as 'on/off' switch for yes/no Q's
```
Boolean('');  // false
Boolean(234); // true
```
In conditional statements, 

## null
- `null` is the intentional absence of a value
- `null !== undefined`
## undefined
- `undefined` means that a given value does not exist 
- exmaple: a variable may be undefined if it has been created hasn't been assigned a value yet.
  
## Symbol
- symbols are unique identifiers, useful in more complex coding
  
## Object
- Collections of related data; like key-value pairs however the keys are called **properties**; similar to a dictionary in Python
- Some built-in objects:
  - examples: 
    - **console**
    - **Math**
      - [MDN Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
      - `Math.ramdom()`: returns a random number between 0 (inclusive) and 1 (exclusive)
      - `Math.floor()`: takes a decimal number, and rounds **down** to the nearest whole number. (`Math.ceil()` will find the nearest integer >= to the number)
      - `Math.trunc()`: removes decimals; returns the integer only
---
To check type in JavaScript use `typeof`:
- Example: `console.log(typeof 41.1);`
- output: `number`

---
## Convert str --> int
`parseInt()` Takes the base for the converstion as the second, optional argument:
```
parseInt('123'); // output: 123 
// this is base 10, so is equavalent to:
parseInt('123', 10); // output: 123 
```
If you wanted to convert binary num (base 2) to an int:
```
parseInt('110', 2) // output: 6
```

---
## Operators (+, - , *, /, %)

---
## Comparing with ===, ==, !=, !==:
```
const a = '1'
const b = 1
console.log(a != b)

// "1" == 1    //  true
// "1" !== 1    // true

// "1" === 1    // false
// "1" != 1    // false
```
- `===` means the values are the same **type** and the same **value**
- `==` means the values could be different types, but have the same value  
**vs**:

- `!==` means the values are **not** `===`
- `!=` means the values **are not** `==` 

## Also: && (and) || (or)
These will short circuit... 

---
## ternary operator: ?, aka conditional operator
```
condition ? exprIfTrue : exprIfFalse
```
An example:
```
const allowed = (age > 18) ? 'yes' : 'no';
```
In above example, if `(age >18)` evaluates to `true`, the ternary expression evaluates to `yes`....  `(age >18)`  evaluates to `false` the ternary expression evaluates to `no`
---
## switch statement: can be helpful if lots of case options
```
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}
```
**Note**: You need a `break` statement at the end of each case, **unless you want to fallthrough to the next case** (rare that you'd want that.. if you do, you should add a comment to note it is intentional)
- The `default` will execute if none of the other cases evaluate to true.

---
  
## More info:
[codecademy documentation](https://www.codecademy.com/resources/docs/javascript)