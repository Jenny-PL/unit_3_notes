// Closure example:

const outer = function (num) {
  const inner = function () {
    console.log("Hello World");
    console.log(num);
  };
  return inner;
};

const myFunc = outer(100); //this func will run and return inner. outer() is done running.
// nothing is printed, as inner is not yet called.

myFunc(); // will now print: Hello World  100

let closure_func = function (value1, value2) {
  let inner_func = function () {
    let newVal = value1 + value2;
    console.log(newVal);
    console.log("hello!");
  };
  return inner_func;
};

const PLACEHOLDER = true;
let v1 = "Hi";
let v2 = "friend";

let new_func = closure_func(v1, v2);
new_func();

// Functions from TDD Learn lesson:
const formatToolList = (toolsData) => {
  let msg = "Tool List:";
  for (let tool of toolsData) {
    msg += `\nTool: ${tool["name"]}\nQuantity: ${tool["quantity"]}\nReserve Now!\nDonate Tool!\n---`;
  }
  return msg;
};

const formatReservations = (resObj) => {
  let msg = `Reservations for ${resObj.tool}:`;
  for (let res of resObj["reservations"]) {
    msg += `\n- Return Date: ${res.returnDate}`;
  }
  return msg;
};

const formatLibrary = (toolList) => {
  let msg = "Tool Library:";
  let count = 1;
  for (tool of toolList) {
    let avail = tool.totalQuantity - tool["reservations"].length;
    msg += `\n${count}. ${tool.name} (Available: ${avail})`;
    count += 1;
  }
  return msg;
};
