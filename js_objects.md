# Objects
This is the same idea as dictionaries in python.    

Example:

```
const testObj = {
  someNum: 5,
  someStr: 'this is a test string',
  someNestedObj: {
    someOtherNum: 4,
  }
};
```
To access the value: 
```
testObj.someStr;
```
OR
```
testObj['someStr'];
```
With square-bracket notation, can pass in a variable or the actual value (?)

---
## DataTypes allowed for key-value:
**key**: string or number  
**values**: any data type, including arrays, etc...  

---
## Creating a new, empty object:
```
const obj = new Object();
``` 
OR 
```
const obj = {};
```
The second method is prefered.

---


**object literals**:
```
Example:
 { 
     breakfast: 'cereal', 
     lunch: 'sandwhich', 
     dinner: 'japchae'
     }
```
---
## Nested objects:
Chain the syntax, and evaluated L --> R:  
Example:
```
const testObj = {
  someNestedObj: {
    someOtherNum: 4,
  }
};
```
`testObj.someNestedObj.someOtherNum;` // evaluates to 4

Other ways to write this:
`testObj['someNestedObj']['someOtherNum'];`    

Or a mixed approach is ok (however, generally, strive for consistency):
`testObj.someNestedObj['someOtherNum'];`

---
## Functions as objects
**Note**: Functions are treated as **objects**.  They have some key-value pairs, including a **name**: function name, 


---
##  More Examples: 

Object literal for a school that is a non-profit, in a basement, that opens at 9 and closes at 5:
```
let school = {
  status: 'non-profit',
  location: 'basement',
  open-time: 9,
  close-time: 5
}
```
## Creating a new instance of an object: (OOP)
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Define an object
const me = new Person('me', 34);
// We are creating a new person named "Me" aged 34.
```
To re-assign a value to a key-value pair within the object:
```
me.name = 'Jenny';
me['age'] = 'thirty-four'; // if use []s add ''s for strings
```
My new object with updated values:
```
me
//output: Person { name: 'Jenny', age: 'thirty-four' }
```