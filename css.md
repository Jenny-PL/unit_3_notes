# Cascading Style Sheets (CSS)
``` 
p {
    color: blue;
}
```
**Some notes**:  
Link CSS sheet to HTML sheet within the `<head>` section.
```
<head>
    <meta charset="UTF-8" />
    <title>My Recipe Blog</title>
    <link href="styles/style.css" rel="stylesheet">
</head>
```
---
## General tid-bits:

`.someClass {`    
  `margin: 5pm 10px 3px 20px`  
  `/* this goes clockwise! */`   
  `}`  
  If four values: **top - right- bottom- left**

  If only two values:  **top/bottom, left/right**  
  `.someClass {margin: 10px 20px }`  


---
## Classes:
- Group together several elements, including different types of elements, using a **class** attribute.    
- Example below with a class named "highlight" being applied to an h1 element:
```
<h1 class="highlight">Hello World!</h1>
```
- Within the CSS file, this **class** will be styled using a `.class_name`.
  - Example:
```
.highlight {
    background-color: yellow;
}
```
---
## ID's (IDs are specific)
- Each element can have **only one** ID
- Each ID can only be used **once** on a page  
```
<h1 id="home-page-title">Hello World!</h1>
```
- Within the CSS file, the **id** will be styled using `#id_name`.
  - Example:
```
#home-page-title {
  color: teal;
  font-size: 4rem;
}
```

## Specificity:

<mark>id > class > type-selector (ie- p, section) </mark> 

[More Detailed specificity info](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
---
## Flexbox: Aligns items within a container 

---
## CSS Grid: Creates grid layouts (horiz + vertical containers within a larger container)
[article with example code + design](https://developer.chrome.com/blog/css-grid/)  
CSS Grid Rules:
1.  One large container, called the grid container.
    1.  **Grid container** esignated with CSS rule: `display: grid;`
2.   "many elements" that make up the grid must be **direct children** of **grid container**
     1.   These items may have children inside (they will not be effected by grid layout)
- See more CSS notes in file: **css-grid.md**
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

**Side Note**: Internet Explorer 11 requires specifying the browser prefix `-ms-display: grid;`

