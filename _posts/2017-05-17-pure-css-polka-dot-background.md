---
layout: post
title:  "Pure CSS Polka Dot Background"
category: Tips and Tricks
date:   2017-05-17
---

Pure CSS polka dots that comes in handy from time to time. Background size determines the size of the tile the polka dot sits in and the background position should be half the width and height which offsets them so they don’t sit in straight lines. The percentage value in radial gradient determines how much of the square the dot takes up.

```css
/**
 * Polka dot
 */

body {
  background: #000;
  background-image:
    radial-gradient(#fff 20%, transparent 0),
    radial-gradient(#fff 20%, transparent 0);
  background-size: 400px 400px;
  background-position: 0 0, 200px 200px;
}
```

Some larger dots…

```css
body {
  background: #000;
  background-image:
    radial-gradient(#fff 30%, transparent 0),
    radial-gradient(#fff 30%, transparent 0);
  background-size: 600px 600px;
  background-position: 0 0, 300px 300px;
}
```
