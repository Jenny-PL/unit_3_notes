# Concepts
Some links:
- [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [html validator: a tool to debug](https://validator.w3.org/#validate_by_uri+with_options)
## DOM: Document Object Model:
Visual representation of how the content on a webpage is related. A tree-model, where you can see parent, sibling, and child relationships.
- **Root**: `<html>` tag is the root of the DOM
- **Nodes**: Contain data
  - Each node may have only **one** parent node.
- **Branches**: Show relationships
- **Shadow DOM**: A browser's ability to include a subtree of DOM elements into the rendering of a document but not in the main document DOM tree. (ie-`<input type= "range" />` will contain info about styling and display, without the DOM explicitly listing it.)
## HTML
- **Semantic HTML**: Selecting the appropriate tag to describe contents within.  Important for navigating the site, accessibility.
- **Elements**
  - **Content elements**:
  - **Sectioning elements**: 
    - Examples: nav, header, footer, section
- **Tags**: Generally each element has an option & closing tag.  Few elements are self closing; examples:
  - `<img>` is self closing
  - `<br>`, `<hr>` are also self closing
- **Element Attributes**:  An attrtibute is an attribute-value pair; some elements have mulitple, others none.  Attributes may be required or optional:
  - `<a href="https://adadevelopersacademy.org/" alt="Link to Ada's webiste">Click here to visit Ada's website!</a>`
  - In above example, `hfref` attribute is required, while `alt` attribute is optional (but highly recommended for best practice)

- **Naming-Conventions**: index.html is typical name for main page content.
  - **kebab-case** or separating-with-a-dash is recommended while in Ada; no real convention/rules.
