---
layout: post
title:  "Frosted Glass Effect on Modals and Other Elements"
category: Tips and Tricks
date:   2017-05-10
---

I started getting real into Adobe Experience design lately and it makes it real easy to add these cool gaussian blurs to backgrounds of elements. I kinda went a little ape shit with it with my last few designs not realizing that it was not simply done with some new fancy CSS3 filters. You do need filters, but they don’t behave the way you would think.

My original thought was to use something like this: `filter: blur(15px)`. However, this will blur the element but not the content beneath it, producing some weird haze effect rather than a nice frosted glass look we want.

The real answer is to take the background image beneath it and add it to a pseudo element on the element with the blur. We can then line this up perfectly with he background beneath to produce the effect. That being said I started scrapping this technique because loading these images as background on all these elements is a little heavy and a bit harder to get right in responsive scenarios. As with many things, I should have been using it in moderation because I definitely was overdoing it.

Without further adieu here is the technique:

```css

body {
  background-image: url('<path_to_your_bg_image>');
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.frosted {
  position: relative;
  transform: translateX(0) translateY(0) translateZ(0);
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(0) translateY(0) translateZ(0);
    z-index: -1;
    background-image: url('<path_to_your_bg_image>');
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(15px) opacity(0.7) brightness(0.5);
  }
}
```
