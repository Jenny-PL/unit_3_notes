# Arrays in JS
[MDN documentation on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  

**Arrays are objects!**

## Constructing a new array
```
const list_a = new Array();  
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';

const list_b = ['dog', 'cat', 'hen']; //more common
```
## array.length
- will always be 1 more than the last index, **however won't necessarily give you the # of items in the array**.
```
const a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101  
```
In the above example the a.length returns 101, however there are only  4 items in the array.

## Iterating over arrays:
- **For loop**:
```
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```
- **For-of loop**:
```
for (const currentValue of a) {
  // Do something with currentValue
}
```
- **forEach**:
```
list_a.forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```
Example:
```
const list_a = ['dog', 'cat', 'hen'];

list_a.forEach((element)=> {
    console.log('A ' + element+' named beau');
    });
// ouput:
A dog named beau
A cat named beau
A hen named beau
```
- **for-in loop:**
  -  Not recommended. It will iterate over the **indices**  NOT the list elements.
  -  
## Adding to an array
```
a.push(item);
```
## Array instance methods:
`const list_a = ['dog', 'cat', 'hen'];`
- **array.at(index)**
  - `list_a.at(2)` // 'hen'
  - `list_a.at(-1)` // 'hen'
- array.concat()
- array.copyWithin()
- array.entries()
- array.fill()
- array.filter()
- array.find()
- array.findIndex()
- array.flat()
- array.flatMap()
- array.forEach()
- array.group()
- array.groupToMap()
- array.includes()
- array.indexOf()
- array.join()
- array.keys()
- aray.lastIndexOf()
- array.map()
- array.pop()
- array.push()
- array.reduce()
- array.reduceRight()
- array.reverse()
- array.shift()
- array.slice()
- array.some()
- array.sort()
- array.splice()
- array.toLocaleString()
- array.toString()
- array.unshift()
- array.values()