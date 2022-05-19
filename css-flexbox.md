# Flexbox

[cheat sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- Most of the attributes are given to the parent.


## justify-content: aligns items horizontally
- value options:
  - start
  - end
  - center
  - space-between
  - space-around
  - space-evenly

Example:
```
#pond {
  display: flex;
justify-content: space-around;
}
```
## align-items: aligns items vertically (within a container)
- value options:
  - **flex-start:** align to the top of the container.
  - **flex-end:** Items align to the bottom of the container.
  - **center**
  - **baseline:** Items display at the baseline of the container.
  - **stretch**: Items are stretched to fit the container.

## align-self:
- Acts on a single element:
- Same value options as align-items

## align-content: align multiple lines (relative to other lines, within a container)
- value options:  (same as for align-items)
  - flex-start: Lines are packed at the top of the container.
  - flex-end: Lines are packed at the bottom of the container.
  - center: Lines are packed at the vertical center of the container.
  - space-between: Lines display with equal spacing between them.
  - space-around: Lines display with equal spacing around them.
  - stretch: Lines are stretched to fit the container.

## flex-direction:
- value options:
  - **row:** L --> R: 
    - Items are placed the same as the text direction.
  - **row-reverse**: R --> L: 
    - Items are opposite to the text direction.
  - **column**: Top --> bottom:
    -  Items are placed top to bottom
  - **column-reverse**: Bottom --> top:
    -  Items are placed bottom to top.

**Note:** If change flex direction is a column, **justify-content changes to the vertical and align-items to the horizontal**.

## order:
- asign new index location 
- default: 0
- example:
```
#pond {display: flex;}
.yellow {order:2;}
```


## flex-wrap
- values:
  - **nowrap**: Every item is fit to a single line
  - **wrap**: Items wrap around to additional lines.
  - **wrap-reverse**: Items wrap around to additional lines in reverse.

## flex-flow: combines 'flex-wrap' and 'flex-direction' properties:
- Example: `flex-flow: row wrap` to set rows and wrap them.