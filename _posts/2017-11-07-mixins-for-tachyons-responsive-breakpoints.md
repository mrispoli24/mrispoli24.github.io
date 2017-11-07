---
layout: post
title:  "Mixins for Tachyons Responsive Breakpoints"
category: Tips and Tricks
date:   2017-11-07
---

The following is a responsive mixin you can use if you are or are becoming a fan of [Tachyons CSS framework](http://tachyons.io/) like I have. After a bit of a search online I realize that the whole world has gone package crazy. All I wanted was a simple mixin for the Tachyons responsive breakpoints to add to my SCSS file.  So here you are:

```css
@mixin breakpoint($class) {
  @if $class == ns {
    @media (min-width: 30em) { @content; }
  }

  @else if $class == m {
    @media (min-width: 30em) and (max-width: 60em) { @content; }
  }

  @else if $class == l {
    @media (min-width: 60em) { @content; }
  }
  @else {
    @warn "Breakpoint mixin supports: ns, m, l";
  }
}
```

And you can use it like this:

```css
.navigation__dropdown {
   width: 100%;

   @include breakpoint(l) {
      width: 50%;
   }
}
```

Ta-da no packages just a simple copy and paste.
