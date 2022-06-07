# Loops & iterators
[codecademy loops cheatsheet](https://www.codecademy.com/learn/paths/introduction-to-javascript/tracks/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet)  

[Turing School JS loops practice](https://frontend.turing.edu/lessons/module-1/js-for-loops.html)  

[MDN documentation loop tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

## for loop:
syntax:   
**for (initiaize variable; conditional; re-assign) {  
        while conditions are met, do this code;  
        }**

3 expressions with iterator variable that usually appears in each expressions:
  1. The iterator variable is initialized
  2. checked against the stopping condition
  3. assigned a new value on each loop iteration (aka iteration statement)  
   

Example:
```
for (let num = 5;  num < 11; num ++) {
  console.log(num);
}
```

## for loop with .length
```
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
```

## nested for loops
- For each element in the outer loop array (obsFollowers below) the inner loop will run in its entirety:  

```
let bobsFollowers = ['amy', 'tim', 'heather','yip'];
let tinasFollowers = ['tim', 'heather', 'mia'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
```
---
## while loops
- **While loops are ideal when we don’t know in advance how many times the loop should run**  
  
Example of for loop converted to while loop:
```
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```

Another example **while loop**, here choosing a random card:
```
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;    //initializing variable
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
  
// (currentCard !== 'spade') is the stopping or test condition
// to iterate through the loop, currentCard is re-assigned with cards[Math.floor(Math.random() * 4)]

```

## do ... while... loops

you want a piece of code to **run at least once** and then loop based on a specific condition after its initial run

Example: We want to added at least 1 cup of sugar, then add up to the needed amount.
```
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded += 1;
  console.log(`We've added ${cupsAdded} cup(s) of sugar.`)
} while (cupsAdded < cupsOfSugarNeeded);
```
---
## Using `break` keyword in loops
```
const fruitArray = ["apple", "orange", "papaya", "melon"];

// Write your code below
for (let i= 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'papaya') {
    break;
  }
}
console.log("skipping the melon.")

// output: apple orange papaya skipping the melon.
```
---
## Other iterators: .forEach(), .map(), .filter()

## .forEach : applies func to each item in array
**Does not make a new list**  
```
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});
```
```
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitItem => console.log(`I want to eat a ${fruitItem}`));
```
or 
```
fruits.forEach(fruitItem => console.log('I want to eat a ' + fruitItem));
```


## .map(): applies func to each item in array
**returns a NEW list, which is altered by the func**
```
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

// output: [ 1, 4, 9, 16, 25 ]
```
Another example: 
```
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
   return animal[0];
   });

console.log(secretMessage.join('')); //output: HelloWorld
```
A diff example:
```
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNum =>{
    return bigNum/100;
  });
console.log(smallNumbers);  //output: [ 1, 2, 3, 4, 5 ]

```

## .filter()
**Returns a NEW array... altered from original as it takes out selected elements**
1. instantantiate a new variable, with let or const
2. assign that variable to oldArray.filter()
3. add a function with conditional to be applied to each item in array
```
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//output: [ 5, 3.14, 100 ]
```
Another example:
```
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => {
  return num <250;
});

console.log(smallNumbers); //Output:[ 200, 3.14, 7, 13 ]
```