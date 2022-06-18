# Hooks

[hooks documentation](https://reactjs.org/docs/hooks-intro.html)
```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
```
<SomeElement onClick={...}></SomeElement>
```

The **onClick** attributes indicate that `SomeElement` is listening for a click event. The … will be replaced with an event handler function (anonymous or named).

`[stateVariable, setStateVariable] = useState(initialValue)`  

## useState
`useState` is a function takes an `initialValue` and sets the `stateVariable` to this value the first time the component is rendered.   
- It returns **an array of two values**, the `stateVariable`, and a **function `setStateVariable`** that sets the `stateVariable.` 
Calling `setStateVariable` triggers a **re-render.**

```
const [pieceOfState, setPieceOfState] = useState('Initial value for pieceOfState.');
```
```
setPieceOfState('New value of pieceOfState.');
```

**Note**: Any non-state variables in your component are recalculated on each re-render (<mark>What does this mean?</mark>)
- **Don’t try to read the state variable right after calling the setState function.  It will have the OLD value.**  After the rerender, the new value of the state variable is pulled out of the special block of memory and placed into the const state variable. The state variable **is not updated until the rerender.**
- If you want to interact with the new value, you must do it after `setPieceOfState` function runs.
