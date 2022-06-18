# Lifting State Up

**Why?** State is not accessable to **App.js**  
How to deal with it:  
1. Create a "single source of truth"
   1. generally in `App.js` (however could be pulled up to the highest level container component... personal preference)
   2. Now we only need to update data in one place
2. Pass down data and event handlers to presentational components
3. Ensure that our event handlers "lift state up"

## Key conecepts:  
**container:**  
**presentation element:**  
Note: an element can be **Both** a container and presentation element!