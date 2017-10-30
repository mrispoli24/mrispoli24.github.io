---
layout: post
title:  "Installing Custom Web Fonts"
category: Tips and Tricks
date:   2017-02-09
---

# Installing Custom Web Fonts

The following outlines adding custom font files, importing them, as well as a quick reference to the different weight names and what the mean from “Thin” to “Black.”

## File Type and Placement
I like to place my font files in a separate `/fonts` directory so you know where to find them and they are essentially their own entity.

If you are using a lot of fonts you can go a step further and place each family and weight into it’s own directory as well since you will have multiple files types for cross-browser compatibility.

The most common and well supported font formats that you should acquire for a custom font are `woff` and  `woff2`. That being said if you get others for greater support the next section show the order you should place them in for best support.

## @font-face rules

To import web fonts with the best possible support across legacy systems reference the following `@font-face` rule.

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('/fonts/webfont.eot'); /* IE9 Compat Modes */
  src: url('/fonts/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('/fonts/webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

Basic modern browser support can be achieved with he following:

```css
@font-face {
  font-family: 'MyWebFont';
  src:  url('/fonts/myfont.woff2') format('woff2'),
        url('/fonts/myfont.woff') format('woff');
}
```

Modern browsers from IE9+ will handle a `woff` font file.

Taken from this wonderful CSS Tricks article: [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

## Font Weights
The different font weight names can be rather confusing (ie. what the hell is “book”) so here is a list of font weights from the lightest to the heaviest.

1. Thin
2. Extra Light
3. Light
4. Book
5. Regular
6. Medium
7. Bold
8. Black
