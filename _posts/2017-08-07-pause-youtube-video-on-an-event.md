---
layout: post
title:  "Pause YouTube Video on an Event"
category: Tips and Tricks
date:   2017-08-07
---

Ever run a YouTube video inside a modal and have it keep playing after the user closes the modal. This is how to stop this annoying behavior.

First make sure you add the URL parameter `?enablejsapi=1` to the `src` attribute of the `iframe`.

Then use this function on any action to pause the video:

```js
pauseYouTube () {
    $('iframe[src*="youtube.com"]').each(function() {
        var iframe = $(this)[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  }
```
