# Data types in JS

## Number
- includes numbers with decimals
- [Number MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - Number.isInteger();
## String
- text/characters surounded by single or double quotes
- [built-in string methods from MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string)
- A few examples: length(), trim(), at(index), includes(), startsWith(), indexOf(), repeat(count), slice(), toLowerCase(), toUpperCase()

## Boolean
- true/false
- can be used as 'on/off' switch for yes/no Q's

## null
- `null` is the intentional absence of a value
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

## ternary operator: ?**
  
## More info:
[codecademy documentation](https://www.codecademy.com/resources/docs/javascript)