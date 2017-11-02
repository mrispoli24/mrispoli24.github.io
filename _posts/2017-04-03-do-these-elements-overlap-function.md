---
layout: post
title:  "Do These Items Overlap? JS Overlap Checker Function"
category: Tips and Tricks
date:   2017-04-03
---

The following is a small check I used to see if the top of one item overlaps the bottom of another. This can be modified to suit many different needs. Let’s go to the code.

```js
doesOverlap($topElem, $bottomElem) {
	// get the top of the lower element in the document flows position
	var bottomElemPos = $bottomElem.getBoundingClientRect().top + window.scrollY;
	// get the top position of the higher element in the document flow
	var topElemTop = $topElem.getBoundingClientRect().top + window.scrollY;
	// get the bottom position of the higher element in the document flow
	var topElemBottom = topElemTop + $topElem.getBoundingClientRect().height;
	// check if the position of the lower element overlaps any point of the higher element
	return bottomElemPos < topElemBottom && bottomElemPos < topElemTop;
}
```
