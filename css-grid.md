## CSS Grid
[article with example code + design](https://developer.chrome.com/blog/css-grid/)     
[Grid cheat sheet ](https://css-tricks.com/snippets/css/complete-guide-grid/)   

CSS Grid Rules:
1.  One large container, called the grid container.
    1.  **Grid container** esignated with CSS rule: `display: grid;`
2.   "many elements" that make up the grid must be **direct children** of **grid container**
     1.   These items may have children inside (they will not be effected by grid layout)

```
.container {
  display: grid;
  grid-template-columns: 200px 100px 50%;
  grid-template-rows: 100px 500px;
}
```
Alternately, can lay out row/ columns:
```
.container {
  display: grid;
  grid-template: 100px 500px / 200px 100px 50%;
}
```
**fractional units (fr)**: 
- the total # of fr make up the denominator
- Example: columns with sizes `1fr 1fr 2 fr 1fr`
  - Denominator: 1+1+2+1 = 5
  - This means relative size of columns would be 1/5, 1/5, 2/5, 1/5
  - **Note**: If other units are used within a column or row, the **fr** units will split up the **remaining space**
  - Example: `grid-template-columns:50px 1fr 1fr 1fr 50px;` 
    - Here, the three columns in the middle evenly split the space left after the 100px are used by start and end columns

**Side Note**: Internet Explorer 11 requires specifying the browser prefix `-ms-display: grid;`

## Examples:
**Set up the container, with grid:**  
```
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```
```
#garden {
  display: grid;
grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

## Add element to the grid
Syntax:
- `grid-column-start` and `-grid-column-end`, and/or `grid-row-start` and `grid-row-end`
  
- `grid-column-end: span 2` (this will instruct the element to span 2 columns from the starting point)
  - Alternately, it could be: `grid-column-start: span 2` if a value is given to `grid-column-end`
  - Other options: 
  - ` #water {grid-column: 2/ span 3;}` This starts at 2 --> 5
    - Same as: #water {grid-column: 2/5;}`



```
#water {
  grid-column-start: 1;
    grid-column-end:4;
}
```
**span example:**:
```
#water {
  grid-column-start: 2;
grid-column-end: span 2;
}
```
**Example combining row and columns:**
```
#poison {
grid-row: 5/6;        # starts at 5, span 1
grid-column: 2/3;     # starts at 2, span 1
}
```
**grid-area**:  
`grid area: grid-row-start/grid-column-start/grid-row-end/grid-column-end; }`

Example:
```
grid-area: 1/2/4/6;
```
**order**:
- By default, all grid items have an order of 0,
- Order can be set to any positive or negative value, to move elements around in the grid.
- Similar to moving their index (?)