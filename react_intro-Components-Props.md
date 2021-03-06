# React
[Programming with Mosh React Tutorial-3.5hrs](https://www.youtube.com/watch?v=Ke90Tje7VS0)  
[Scrimba/YT React Course- 12hours!](https://www.youtube.com/watch?v=bMknfKXIFA8)

**React** is a JS open source library

**why is React nice?**
- Teamwork: Diff ppl can work on diff components... helps to share the workload and keep the code separate
- Interactive UI (<mark>per class notes, no more event listeneters...?</mark>)
- Virtual DOMs.... Are speedy (<mark>what is a virtual DOM?</mark>)
---
React organizes JS into similar items, to make code DRYer, easier to organize and maintain. 

These items are called **components**, and they are based on UI elements.  
- Components may contain: Styles, Complex logic, Data, State, & Event-handling
---

[documentation for creating react app](https://create-react-app.dev/docs/getting-started/)   


Steps to starting a react project:
1. `yarn create react-app app-name` 
2. then to access the app folders:
3. `cd app-name`
4. `yarn install` ? install dependencies
5. To start a server: ` yarn start`
6. By default, our front-end is viewable at **localhost:3000**
7. Note:
   1. Because React tries to autoload our app When it notes changes, and because VSCode automatically saves changes while we're working... our app can try to load while we're writing code... thus breaking it!
   2.  working with React, or other autoloading programs, it's best to disable the VSCode autosave feature. 
   3.  **Under the File menu, simply uncheck Auto Save!**



## Project structure
```
├── public
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── README.md
└── yarn.lock
```

## JSX (JavaScript Syntax Extension)
- html-like javascipt
- A few differences: 
  - certain things have slightly diff names (ie class becomes className)
```
<header className="App-header"></header>
```
  - components are named with uppercase letter!
  - must use correct syntax
  - wrap multi-line JSX in `()`s
  - `{/* comments have curly braces around them */}`

Example `<a>` tag: 
```
<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  Learn React
</a>
```

## Components
Components are:
- functions
- responsible for returning one JSX object, which determines how its rendered
- by convention, components are named with **CapitalCamelCase**    


How to use a component:
1. **Plan the component**:
   1. determine what want to display
   2. come up with a name (UpperCamelCase)
2. **Define the components**
   1. Create a new file
      1. Recommended:  Beside **App**, all component definitions will live inside a new folder: `src/components`
      2. Within this folder, each component should have it's own file, with a name matching the component name (ex: `src/components/StudentList.js`)
   2. Import React, and other dependencies
   3. create a function
      1. In order for the function to return **just one JSX object**, the JSX elements must be wrapped in one larger object (ex: `<section></section>`)
   4. export the component
3.  **Render the component at least 1x**
    1.  At the top of `App.js`, add import statement referring to file defining the component:
        1. `import StudentList from "./components/StudentList";`
     1. To render the component: 
        1. Include the component in any JSX object, using: `<ComponentName></ComponentName>`, or in this example: **`<StudentList></StudentList>`**

## Styling components
1. Make a new CSS file for each component
   1. Recommendation: keep CSS files in src/components
   2. Name CSS file to match Component file name, ex:
      1. `StudentList.css`
   3. Linke CSS file to **component file**:
      1. Add import statement at top of component file, ex:
      2. `import './StudentList.css';`
   4. When adding class selectors attributes to html elements, we must use **className**; in the CSS file, still use `.className` to select that element
---
## Components as Presentational or Container Components

**Presentational Components**: job is to display data  

**Container Components**: Use presentational components. Hold, manage, modify data. Send data to presentational components.
   - **Presentational components** are often nested inside container components.

---
## Props
- Read-only (cannot be modified)
- Props are name-value pairs
  - Values of props can be any data type, including other components or functions

General example:
```
import ComponentB from './ComponentB';

const ComponentA = () => {
  return <ComponentB varName="value goes here"></ComponentB>;
};

export default ComponentA;
```


Example of passing several props (properties) into the Component named Library:
```
const Library = () => {
  return (
    <div>
      <Book title="Hello Web App" author="Tracy Osborn" isbn="978-0986365911"></Book>
      <Book title="JavaScript Cookbook" author="Shelley Powers" isbn="9781491901885"></Book>
    </div>
  );
};
```


```
const ComponentB = (props) => {
  return <div>The value of varName: {props.varName}</div>;
};
```
or Instead of props.varName, we could alternatively use `props["varName"]`

**Note: key is needed**.  A key is a unique identifier for each piece of data. In example below, e-mail is used as the key.
```
const Student = (props) => {
  return (
    <ul key= {props.email}>
      {/* alternate ways to access property value: */}
      <li>Nickname: {props.name}</li>
      <li>Email: {props["email"]} </li>
    </ul>
  );
};

export default Student;
```
---
## Destructuring props:
 Props (properties) can be passed into a Component's function all in one bundle as `props` or in a destructured way, in which only the props that will be used are passed in: `{ name, email}`.  If props are passed in as a bundle, they are accessed using `{props.name}` and `{props.email}`.  If they are destructured, they are accessed by simply using `{email}` or `{name}`

---


## PropTypes
1. Import PropTypes into our component file: `import PropTypes from 'prop-types';`
2. Attach a propTypes member to our component function 
   1. `propTypes` will be an instance variable
   2. capitalization matters... check if `p` and `t` are properly cased in import statement, and within code block
3. Assign an object to the propTypes member, where **each key-value pair in the object is a prop name and a validator**
4. Some validator options:
   1. **string**, **array**, **func**,**number**, **object**, **element** (example: react element like `<img />`)
   2. **oneOf** example:  `name: PropTypes.oneOf(['Ada', 'Soo-ah', 'Chrissy'])`
   3. **oneOfType** example: `name: PropTypes.oneOfType([PropTypes.string, PropTypes.number)`
   4. **arrayOf** example: `PropTypes.arrayOf(PropTypes.number)`
   5. **objectOf** example: `courses: PropTypes.objectOf(PropTypes.string)` This requires an object whose values must be strings
   6. **shape** example: `student: PropTypes.shape({fullName: PropTypes.string, age: PropTypes.number})` This requires an object with specific fields and types
5. PropTypes will give a warning in console if mis-typed... will not cause an error.  The warning message can be used to debug.

```
import PropTypes from 'prop-types';

const ComponentA = (props) => {
    return (
        <span>{props.title}</span>
    );
};

ComponentA.propTypes = {
    title: PropTypes.string.isRequired,
    operate: PropTypes.func
};

export default ComponentA;
```
Other examples:  
propTypes is a new instance variable (??)
```
ClassInfo.propTypes = {
  numberStudents: Proptypes.number.isRequired,
};

export default ClassInfo;
```