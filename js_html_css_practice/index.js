//example code here: https://replit.com/@JennyPL/Foreshadowing-State-Demo#scripts/index.js

//A button that is titled "Add Thing; "Thing" is relevant to your interest
//When the button is clicked, an element is added to the DOM and becomes visible

const state = {
  newBookCount: 0,
};

const addBook = (event) => {
  console.log("in addBook:", event);
  const newBook = document.createElement("li");
  newBook.textContent = document.getElementById("bookTitle").value;
  const bookList = document.getElementsByTagName("ul")[0];
  bookList.appendChild(newBook);
  updateNewBookCount();
};

//exxample creating a new list element:

// const newAppearanceFact = document.createElement("li");
// newAppearanceFact.textContent = "covered in sand (when on a sandy beach)";
// const appearanceList = document.getElementById("facts__list");
// appearanceList.appendChild(newAppearanceFact);

//call function when new book button is clicked:
const registerEventHandlers = (event) => {
  console.log("in event handler:", event);
  const bookButton = document.querySelector("#addBook");
  bookButton.addEventListener("click", addBook);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

//A "Thing Counter" feature: An element whose text displays the number of "Thing"s there are
//This text updates every time the "Add Thing" button is clicked

const updateNewBookCount = () => {
  state.newBookCount += 1;
  const bookCounterElement = document.querySelector("#newBookCount");
  bookCounterElement.textContent = `New Books read: ${state.newBookCount}`;
};

//"Dark mode/Light mode" feature, or a feature that changes the appearance of your site. Here are some tips:

//Create a button that turns on "Theme 1."
//When the button is clicked, it adds or removes specific classes from different HTML elements. These classes should determine background and text colors.

//Create a button that turns on "Theme 2."
//When this button is clicked, different classes are added or removed from the HTML. The site will have different background and text colors.

// const addCrab = () => {
//   const newCrab = document.createElement("span");
//   const crabContainer = document.querySelector("#crabContainer");
//   newCrab.textContent = "🦀";
//   crabContainer.appendChild(newCrab);
// };

// const registerEventHandlers = () => {
//   const crabButton = document.querySelector("#addCrabButton");
//   crabButton.addEventListener("click", addCrab);
// };

// document.addEventListener("DOMContentLoaded", registerEventHandlers);
