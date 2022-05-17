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