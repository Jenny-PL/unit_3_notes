# useEffect and Componenent lifecycles

[react component lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)  
[react documentation on lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

## Stages:
- **Mounting Stage**:
  - instance of component is being created and rendered in DOM
  - upon completion of stage, component is 'mounted'
- **Updating Stage** 
  - Componenent is re-rendered
- **Unmounting Stage**
  - Component is being removed from DOM

## useEffect
- useEffect is a **hook** (meaning... ??)
  - It can run after the component is inserted in DOM and renders, in update stage (after prop or state variable changes), or in unmounting stage - before a component is removed from the DOM
  - In general, it is called **after a component renders**
  - useEffect is a React hook that registers a function to be treated as an "effect." 
    - The effect runs the first time the component is rendered, as well as when any value in the dependency list changes. It does this by controlling the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.


# To use:
- Import: `import { useEffect } from "react";`
- Give it two parameters:
  - 1. callback Function
  - 2. dependency array
```
useEffect(function callback() {
    //side-effect...
}, [depencencies]);
```

Example:
```
useEffect(() => {
    console.log('I\'m in useEffect!');
    console.log('This will be called whenever an instance of this component mounts');
    console.log('or whenever pieceOfState is updated');
  }, [pieceOfState]);
```
- array to listen for (aka **dependency array**): 
  - In above example, `[pieceOfState]` is an array that holds references to props or state changes to **listen for**
  - If we don't define this array, useEffect will be called during every Update Stage. That is, every time the component re-renders.... can turn into an endless re-rendering loop.
  - Call use an empty list `[]` to indicate you're not watching for updates.  
    - This means callback function given will run **one time**, when component first renders.


Another example:  This will only run when **oranges** state variable changes:
```
import { useState, useEffect } from 'react';

function App() {

  const [apples, setApples] = useState(0);
  const [oranges, setOranges] = useState(0);

  useEffect(() => {
    console.log('I\'m in useEffect!');
    console.log('This is called when oranges updates,');
    console.log('NOT when apples updates');
  }, [oranges]);

  return (
    <div>
      <p>Apples: {apples}</p>
      <button onClick={() => setApples(apples + 1)}>Click Me to Update apples!</button>
      <p>Oranges: {oranges}</p>
      <button onClick={() => setOranges(oranges + 1)}>Click Me to Update oranges!</button>
    </div>
  );
}
```

Here is an example with an empty dependency array, so it will call only once, after component is rendered:
```
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('I\'m in useEffect!');
    console.log('This will be called ONLY when an instance of this component mounts');
    console.log('because our dependency list is empty');
  }, []);

  return (<h1>Demonstration of useEffect only called during mounting stage</h1>);
}
```
## Clean up Functions
- "Clean-up functions" describe functions responsible for "cleaning up potential side-effects," such as closing database connections. 
---


## Using useEffect to call APIs after a component mounts.
- helpful to allow the component to render, then make the API call asynchronously after the app is fully rendered on the screen

1. import axios:
    - `yarn add axios`
    - add `import axios from 'axios';` to each file that uses axios

Example using axios api to render a component 1x:
**Note the `[]` empty dependency array**
```
import { useEffect } from 'react';
import axios from 'axios';

const SomeComponent = () => {

  useEffect(() => {
    axios.get('some great url to make an API call to')
      .then((response) => {
        console.log('The data we get back from the HTTP response:', response.data);
      })
      .catch((error) => {
        console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
        console.log('The data from response with an error:', error.response.data);
      });
  }, []);

  return (<h1>My Perfect Component</h1>);
}
```
## Do we always need useEffect for API calls?

**No**.  In the event of an asynchronous call (ex onClick), we don't need to wrap the API call in useEffect, as the API call will only occur when onClick event occurs.