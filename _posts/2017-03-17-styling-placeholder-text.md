---
layout: post
title:  "Styling Placeholder Text"
category: Tips and Tricks
date:   2017-03-17
---

# Styling Placeholder Text

Styling placeholder text is a common design pattern since using the `label` attribute appears to not be in vogue at the moment with designers.

To do so requires more than just setting the `color` on the input, which works for typed text but not the placeholder.

```css
input {
  color: #000;
}
input::-webkit-input-placeholder {
   color: #000;
}
input::-moz-input-placeholder {
   color: #000;
}
input::-ms-input-placeholder {
   color: #000;
}
input::placeholder {
   color: #000;
}
```

Lots of code for something so simple but it’s all what we’ve got to deal with at the moment.
