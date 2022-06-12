# React

React organizes JS into similar items, to make code DRYer, easier to organize and maintain. 

These items are called **components**, and they are based on UI elements.  
- Components may contain: Styles, Complex logic, Data, State, & Event-handling

[documentation for creating react app](https://create-react-app.dev/docs/getting-started/)   

Steps to starting a react project:
1. `yarn create react-app app-name` 
2. then to access the app folders:
3. `cd app-name`
4. To start a server: ` yarn start`
5. By default, our front-end is viewable at **localhost:3000**
6. Note:
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

## JSX (JavaScript syntax extension)
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
3.  **Render the compnent at least 1x**
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
