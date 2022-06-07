// tasks array of objects

const tasks = [
  {
    id: 1,
    title: "Make Dinner",
    description: "spaghetti",
    isComplete: false,
  },
  {
    id: 2,
    title: "Exercise",
    description: "bike",
    isComplete: false,
  },
];

/**
 * Plan for getTasks():
 * 1.  Select a place to put the tasks: ul #"tasks"
 * 2.  Create a bunch of `li` elements storing the tasks:
 * use const newItem= document.createElement("li")
 * 3.  Add event Listeners to respond to clicks:
 * Add CSS class for complete or incomplete
 */
const getTasks = () => {
  // where to place list objects: in the ul
  const taskList = document.getElementById("tasks");
  for (let task of tasks) {
    const newListItem = document.createElement("li");
    newListItem.textContent = task.title;
    taskList.appendChild(newListItem);
    newListItem.className = "incomplete";
    newListItem.addEventListener("click", () => {
      task.isComplete = !task.isComplete; //changes isComplete attribute of task
      if (task.isComplete) {
        newListItem.className = "complete";
      } else {
        newListItem.className = "incomplete";
      }
      // alternate way to do if statement above:
      // newListItem.className = task.isComplete ? "complete" : "incomplete";
    });
  }
};

const resetList = () => {
  //adding a new item w/functionality:
  const resetButton = document.createElement("button");
  const taskContainer = document.getElementById("task-container");
  resetButton.textContent = "reset";
  taskContainer.appendChild(resetButton);
  // want to change color of resetButton on mouseover:
  resetButton.addEventListener("mouseover", () => {
    //add function here to change color
  });
  resetButton.addEventListener("click", resetHelper);
};

/**
 * update object attribute for task.isComplete
 * update HTML li class name
 */
const resetHelper = () => {
  for (let task of tasks) {
    task.isComplete = false;
  }
  const taskList = document.getElementsByTagName("li");
  for (let li of taskList) {
    li.className = "inComplete";
  }
};

// Another way to make sure the DOM is completely loaded
if (document.readyState !== "loading") {
  getTasks();
  reset();
} else {
  document.addEventListener("DOMContentLoaded", getTasks);
  document.addEventListener("DOMContentLoaded", resetList);
}
