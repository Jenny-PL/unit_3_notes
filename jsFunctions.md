
## Arrow functions
```
const doubleNumber = function(num) {
    return num + num;
}
```
**re-written as arrow function:**:
```
const doubleNumber = num => num + num;
```

## callback function



## anonymous function: 
```
const arr = [1,2,3,4,5];

arr.forEach(num => console.log(num*num));
```
alternately:
```
arr.forEach(num => {console.log(num*num)});
```
vs.
```
arr.forEach(function(num) {console.log(num*num)});
```

## closure
- A closure is a function nested within another function adn has access to any variables defined within its parent fx.
- Define a function within another function
- Reference a variable in the outer function from within the inner function.
- Make the inner function available outside the outer function (maybe by returning it)

```
const outer = function(num) {
    const inner = function() {
        console.log('Hello World');
        console.log(num);
    }
    return inner;
}

const myFunc = outer(100);   //this func will run and return inner. outer() is done running.
myFunc();    // will print 
```
