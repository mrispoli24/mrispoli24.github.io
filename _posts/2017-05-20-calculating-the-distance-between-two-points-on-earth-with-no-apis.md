---
layout: post
title:  "Calculating the Distance Between Two Points on Earth With No API's"
category: Tips and Tricks
date:   2017-05-20
---

It’s called the Haversine formula and I found it on stack overflow when looking to show a user’s distance from a given store location. Since I had both latitude and longitude for both you can make the calculation with this sweet little formula, I made some modifications for easier use. P1 and P2 are each objects that have a `lat` and `lng` key, I also returned miles since that was the use case I had at the time.

```js
//
var getDistance = function(p1, p2) {
	var rad = function(x) {
  		return x * Math.PI / 180;
	};
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // distance in meters
  var mi = d / 1609.344; // convert to miles
  return mi; // return miles
};
```

Here is the original stack overflow article: [javascript - Calculate distance between two points in google maps V3 - Stack Overflow](http://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3).
