# Adding behavior with javascript


Example project structure: 
```
.
├── src
│   └── index.js
├── styles
│   └── style.css
└── index.html
```

Some options for naming js files:  

- name our JS files based on their content, such as a `changeCursor.js` file to hold code that changes the mouse cursor, or a `scrollToTop.js` file to define scrolling behavior.
- OR can make a JS file for each HTML file, where the files could share names (such as `index.js` to correspond to index.html).

## linking js inside html file:
The `<script> </script>` tag will hold pathway to js file.  It should be at the very end of the body tag.
- This way the browsers loads the pages' contents first, prior to worrying about the behaviors.
- Note: Just like CSS, we can include multiple `<script>`s in one page; they will  be loaded in order.
- 
```
<!-- index.html -->
...
<body>
  <!-- ... -->

  <script src="src/index.js" type="text/javascript"></script>
</body>
```
## Select an HTML element
**selecting elements using `document` element**  

Example: 
```
const fancyParagraphElement = document.getElementById("fancy-paragraph");
```

- **document.getElementById**	Returns the element that has the id attribute with the specified value
- **document.querySelector**	Returns the first element that matches the given CSS selector

These will return a list of elements.  WIll need to then access the individual elements by using loops or indexing:
- **document.getElementsByClassName**	Returns a list containing all elements with the specified class name
- **document.getElementsByTagName**	Returns a list containing all elements with the specified tag name  
  - Examples: 
    - `document.getElementsByTagName('h1')[0]`
    - `document.getElementsByTagName('nav')[1].innerHTML`


- **.documentquerySelectorAll**

## Add behavior to the selected element:
[List of properties and methods that can be used on an element](https://www.w3schools.com/jsref/dom_obj_all.asp)

Attributes: 
- **textContent**Sets or returns the textual content of a node and its descendants
- **className** Sets or returns the CSS class attribute of an element.
- **classList**	Read-Only Attribute. A list of the CSS classes applied to the element. The list itself can be modified by using its `add()` and `remove()` methods.  

Methods:
- **hasAttribute()** Returns true if an element has the specified attribute, otherwise false
- **setAttribute()** Sets or changes the specified attribute, to the specified value.


In this example, a highlight class was added to the element with id of "facts__fact--important". 
- Because we want add the class `highlight`, and not replace all the classes for the element,we included the current value of the element's classes.
```
const importantFact = document.getElementById("facts__fact--important");

importantFact.className = `${importantFact.className} highlight`;
```
Another example, this time modifying content on a webpage, to add an extra 2 elements to a list:
```
// Making a new item for a list, with li tag, then giving it text content

const newAppearanceFact = document.createElement("li");
newAppearanceFact.textContent = "covered in sand (when on a sandy beach)"

// initializing variable for the list to which the list item will be added

const appearanceList = document.getElementById("facts__list");

//appending new list item to the list

appearanceList.appendChild(newAppearanceFact);

// repeating the process with another new fact

const newerAppearanceFact = document.createElement("li");
newerAppearanceFact.textContent = "Unfriendly towards toes"
appearanceList.appendChild(newerAppearanceFact);
```

Some follow up Q's to look into:
- How do we delete an element from the DOM?
```
const element = document.getElementById("demo");
element.remove();
```
- How do we select all the children of one specific element?
```
const nodes = document.getElementById('ID_of_parent').childNodes  or const nodes = document.getElementById('ID_of_parent').children  (???)
```
- How do we add a new element to the beginning of the child list?
