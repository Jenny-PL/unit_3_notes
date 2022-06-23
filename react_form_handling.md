# Form handling

We will use react's [**controlled component** design](https://reactjs.org/docs/forms.html#controlled-components)
- When any element is clicked, it emits an event named `click`.  When an `<input>` element is changed, it emits an event named `change`
- `<form>` elements usually contain 1 or more `<input>` elements. 
  - **default form behavior when it receieves a `sbumit` event:**  Bundle all form data (from various `<input>` elements together and send an HTTP request.)
  - **default behavior can be changed**:
    - by setting either the <form> tag's method and/or action attributes
    -  or with JavaScript.

Some take-aways:
- Forms allow users to interact with a site, providing some type of info (that info is generally stored in `value` attribute or `checked` attribute)
- useState can be used along with a form to capture the changeEvent, using the setState() function and passing in the value from the changeEvent: `setCityName(changeEvent.target.value);`
- It is important to make a copy of the original form, so that React will know there is a change.  This will trigger a re-render of the component. 
---
## Input types
### Text:
- events: change, input
```
<label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">
```
To get input value:
`let theText = myTextInput.value;`   

Other possible attributes:
- list (???)
- maxlength
- minlength
- pattern (regEx)
- placeholder: avoid/not good for accesibility
- size: number greater than 0/default is 20 (puts default on how many letters can be seen at once-- not inputted-- that would be maxlength)
- spellcheck: true/false
- required
### Checkbox
```
<input type="checkbox">
```
- attribute: checked  
- events: change, input
- Example with two options:
```
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked>
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Music</label>
  </div>
</fieldset>
```
### Radio Button: Can only choose one option
- attribute: checked (t/f boolean; indicates if an input is selected)
- events: change, input
- other common attributes: checked, required

```
<form>
  <p>Please select your preferred contact method:</p>
  <div>
    <input type="radio" id="contactChoice1"
     name="contact" value="email">
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone">
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="mail">
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```
### number
- attribute: value (indicates current number entered into input)
- events: change, input
- common other attributes: autocomplete, list, placeholder, readonly
```
<input id="number" type="number" value="42">
```
---
## Forms and state in controlled components
- Components hold state
- for each input, its value comes from the component's state
- when input chages, component's state is updated

```
 const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value
        })
    };
```

Component Form example: 
```
import { useState } from "react";

const CityNameInput = () => {
  const [cityName, setCityName] = useState("Seattle");

  // event handler:
  const renameCity = (changeEvent) => {
    debugger;
    setCityName(changeEvent.target.value);
    console.log(
      "Details about the element that fired the event:",
      changeEvent.target
    );
    console.log("The value of that element:", changeEvent.target.value);
  };

  return (
    <section>
      <h2>{cityName}</h2>
      <input onChange={renameCity} type="text" default="type city name here" value={cityName}/>
    </section>
  );
};

export default CityNameInput;
```