# OOP in JavaScript
[Intro to OOP in MDN](https://developer.mozilla.org/en-US/docs/learn/javascript/objects/classes_in_javascript)


Basic example of a class constructor:
```
class Person {

  name;  //declaring a property (class variable)

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

}
```

## extends (aka inheritence) example:
```
class Professor extends Person {

  teaches;               //declaring a new property

  constructor(name, teaches) {
    super(name);          // inherited from Person class
    this.teaches = teaches;
  }

// this will override introduceSelf method in Person class:

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }

}
```

```
const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();  
//output: 'My name is Walsh, and I will be your Psychology professor'

walsh.grade('my paper'); 
//output: some random grade
```