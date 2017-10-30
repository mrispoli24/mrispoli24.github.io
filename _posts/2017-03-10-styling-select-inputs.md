---
layout: post
title:  "Styling Select Inputs"
category: Tips and Tricks
date:   2017-03-10
---

# Styling Select Inputs

The following are some notes on styling forms that I would like to write down rather than always pulling up old code to find.

## The Select Input

Consider the following markup:

```html
<div class="input-field select-wrap col l6 m12 s12">
  <select id="preferredFloorplan" name="preferredFloorplan">
    <option value="" disabled selected>Preferred floorplan</option>
    <option value="Studio">Studio</option>
    <option value="Alcove Studio">Alcove Studio</option>
    <option value="Terrace Unit">Terrace Unit</option>
    <option value="One Bedroom">One Bedroom</option>
    <option value="One Bedroom Home Office">One Bedroom Home Office</option>
    <option value="Two Bedroom One Bath">Two Bedroom One Bath</option>
    <option value="Two Bedroom Two Bath">Two Bedroom Two Bath</option>
  </select>
</div>
```

It is fairly common to want to  style this differently than the browser would like, which becomes a bit of a pain.

Chrome will natively, and stubbornly round the corners on this input as well as provide it’s own arrow.

To reverse this behavior we do the following:

```css
select {
  padding-left: 0.75rem;
  font-size: 1rem;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  border-radius: 0;
}
```

This gives us a hair of padding to the left and the `-webkit` selectors will remove the default styling. But now we’ve lost our down arrow.

We can use a pseudo-selector to do this but we are going to need to use our wrapper to do so since pseudo-selectors are not allowed on the `select` element itself.

```css
.select-wrap::after {
  content: '';
  position: absolute;
  right: .75rem;
  top: 1.25rem;
  height: 0;
  width: 0;
  border-top: 8px solid $color-med-grey;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  pointer-events: none;
  z-index: 9;
}
```
