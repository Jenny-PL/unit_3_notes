// school object:
let school = {
  status: "non-profit",
  location: "basement",
  opentime: 9,
  closetime: 5,
};

// instructor object (aka an object literal):
let instructor = {
  name: "Pam",
  module: 2,
  traits: ["funny", "smart"],
  primaryLesson: "OOP",
  teachLesson: function (duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  },

  gradeProject: function (project) {
    return `${this.name} is grading ${project}.`;
  },
};

// constructor function:
class Instructor {
  constructor(name, module, traits) {
    this.name = name;
    this.module = module;
    this.traits = traits;
  }
  teachLesson(duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  }
  gradeProjects(project) {
    return `${this.name} is grading ${project}.`;
  }
}

let pam = new Instructor("Pam", 2, ["funny", "smart"]);
//new operator invokes the constructor function to create a new class instance
let brittany = new Instructor("Brittany Storoz", 2, ["honest", "smart"]);
console.log(pam);
// Instructor { name: 'Pam', module: 2, traits: [ 'funny', 'smart' ] }
console.log(pam.name);
//Pam
console.log(pam.traits);
//[ 'funny', 'smart' ]

//Example with shapes:
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, side, sideLength) {
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `This is the perimter of the ${this.name}: ${this.side * this.sideLength}`
    );
  }
}
// const square = new Shape("square", 4, 5);
// square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
  constructor(name, side, sideLength) {
    super(name, side, sideLength);
    this.name = "square";
    this.side = 4;
  }

  calcArea() {
    console.log(
      `This is the area of this square: ${this.sideLength * this.sideLength}`
    );
  }
}

const square = new Square(undefined, undefined, 6);
square.calcArea();

// OOP practice from TDD Learn lesson
class Tool {
  constructor(name, quantity, reservations) {
    this.name = name;
    this.quantity = quantity;
    this.reservations = reservations;
  }
  render() {
    return `Tool: ${this.name}\nQuantity: ${this.quantity}`;
  }
}

// still getting errors on below prob from Tool Library Wave 2 prob#3:
class ToolLibrary extends Tool {
  constructor(tools) {
    super(name, quantity, reservations);
    this.tools = tools;
  }

  listTools() {
    let msg = "Tool List:";
    for (let tool of this.tools) {
      msg += `\nTool: ${tool.name}\nQuantity: ${tool.quantity}\nReserve Now!\nDonate Tool!`;
    }
    return msg;
  }
}
