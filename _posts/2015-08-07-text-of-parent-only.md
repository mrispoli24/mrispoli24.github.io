---
layout: post
title:  "jQuery to Return Text Only If NOT in a Child Node"
date:   2015-08-07
---

# Getting just the text of the parent but not its children.

Sometimes it's useful to get just the text of the parent node but not take any of it's children. Take this example:

```html
<span class="promotion">
  Enjoy up to 70% off at The End of Season Sale.
  <a href="https://www.mysupersite.com/details/">DETAILS</a>
  <a href="https://www.mysupersite.com/sale-shop-all/">SHOP NOW</a>
</span>
```

The secret is to use a few jQuery functions to clone the element, kill the children, and save the parent.

```js

jQuery('.promotion').clone().children().remove().end().text().trim();

```

There are a few other ways to do this but this one works without knowing what you are looking to remove, which keeps everything nice and automated. While it is a simple snippet I find myself using it quite often for quick development fixes and checks.
