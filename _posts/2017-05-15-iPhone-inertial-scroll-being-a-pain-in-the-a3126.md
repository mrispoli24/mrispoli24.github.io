---
layout: post
title:  "iPhone Inertial Scroll Being a Pain in the A$$?"
category: Tips and Tricks
date:   2017-05-15
---

Many times when we use scroll effects and modals in our sites they behave strangely on iPhone and rather buggy. I’ve found this to be in part due to the “hockey puck on ice” style scrolling that webkit implements.

To help normalize this I like to add:

```css
body {
  -webkit-overflow-scrolling: auto;
}
```

This disables this style of scroll on your pages which will help when you say need to scroll inside a modal but not have the body follow it about or have a sticky nav or other scrolling effect.

But sometimes if you have a fixed position element like a modal with a form in it in particular over the body you need to alter this property.

```css
body {
  -webkit-overflow-scrolling: touch;
}
```

It’s worth playing with both depending on the situation. With lots of scroll effects sometimes you have to disable it otherwise they get buggy. With modals you need to enable it because the fixed positioning gets safari all confused.

## Sticky Navs

Sticky nav’s and elements at the top of the page also present some problems with this scrolling and I like to use the following set of styles to help fix this:

```css
// sticky nav static class
.sticky-elem {
  transform: translateZ(0);
  -moz-transform: translatez(0);
  -ms-transform: translatez(0);
  -o-transform: translatez(0);
  -webkit-transform: translateZ(0);
	-webkit-transform: translate3d(0, 0, 0);
}
```
