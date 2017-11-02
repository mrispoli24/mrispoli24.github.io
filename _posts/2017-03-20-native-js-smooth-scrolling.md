---
layout: post
title:  "Native JS Smooth Scrolling"
category: Tips and Tricks
date:   2017-03-20
---

```js
// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
  behavior: 'smooth'
});
```

Browser’s are now implementing native smooths scroll, unfortunately as of this writing this only works on firefox. To implement elsewhere you will need the smoothscroll polyfill for NPM.

Polyfill for NPM: [smoothscroll-polyfill](https://www.npmjs.com/package/smoothscroll-polyfill)
Good example page: [smooth scroll polyfill](http://iamdustan.com/smoothscroll/)

## Quick implement polyfills

Quick implement with npm and/or bower.

In terminal:
```
npm install smoothscroll-polyfill

bower install requestAnimationFrame
```

In your code:
```js
require('smoothscroll-polyfill').polyfill();
```
