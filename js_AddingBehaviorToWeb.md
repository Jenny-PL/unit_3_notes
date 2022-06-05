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
