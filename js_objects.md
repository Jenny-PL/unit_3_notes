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
**key**: string or number  
**values**: any data type, including arrays, etc...  

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
**Note**: Functions are treated as **objects**.  They have some key-value pairs, including a **name**: function name, 