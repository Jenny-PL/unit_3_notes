# Events 
[MDN tutorial on Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

[REPLit with Ex code for these notes](https://replit.com/@JennyPL/Foreshadowing-State-Demo#scripts/index.js) 

**Events**: Can be user initiated (ex- click on button) or some external stimuli (ex- message received)
- Some examples: long click, scroll, hover   
- To **fire/trigger/send** an event, you are initializing the process to run the code to handle the event
- To **listen to/handle/recieve** the event, you are making the response occur
- events happen an **html element** (ex: `<img>, <p>, <button>` tags)

[Web APIs](https://developer.mozilla.org/en-US/docs/Web/API): This is important documentation<mark>(???????)</mark>

1. **Prepare the page**:
   1. we need to have an element that can raise the events we want to receive.
   2. set up any other elements that we will modify in response to the event.
      1. Example: add buttons for input; make container to add something... 
```
<button id="addCrabButton">Add Crab</button>
<section id="crabContainer"></section>
```
2. **Build an event handler**: A function that will run wihen an event is triggered
   1. example to add crab pics to a page:
```
const addCrab = () => {
  const newCrab = document.createElement("span");
  const crabContainer = document.querySelector("#crabContainer");
  newCrab.textContent = "🦀";
  crabContainer.appendChild(newCrab);
};
```
3. **Register the Event Handler**
   1. `someElement.addEventListener("some event name", reactToEvent);`
   2. example
```
const registerEventHandlers = () => {
  const crabButton = document.querySelector("#addCrabButton");
  crabButton.addEventListener("click", addCrab);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
```
**why listen for DOM Content to be loaded?**   
We need to ask our document to wait and register the event handlers after the DOM has been completely loaded. This is because the JavaScript file often loads faster than the DOM does!  

4. **Getting info about specific events:**
   1. Each descrete event (ex- each 'click') is an object.
   2. You can get info about those specific events.
   3. For example, **add event parameter** into addCrab and registerEventHandlers functions, then you can:
      1. Add pring statements into the functions to see whats happing
 ```
 //console output:
 //console.log('in event: ', event)
in event handlers: Event { isTrusted: true }
in addCrab: PointerEvent { isTrusted: true }
```
