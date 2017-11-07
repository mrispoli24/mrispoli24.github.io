---
layout: post
title:  "Setting Up 301 Redirects with Express"
category: Tips and Tricks
date:   2017-05-09
---

There’s a lot of crap out there about how to set up redirects in the express framework. for SEO purposes before going live. Nothing is simple and explicit so here it goes.

In your router the following functions will redirect one path to the new or use wildcards to alter a URL:

```js
router.get('/amenities.php', function(req,res){
  res.redirect('/amenities', '301');
});

router.get('/blog/*', function(req,res){
  res.redirect('https://blog.' + req.headers.host + req.path, '301');
});
```

And that’s it the first function will take `yourdomain.com/amenities.php` and redirect it to `yourdomain.com/amenities`. The second function will take any url formatted like `yourdomain.com/blog/<article_name_or_id_or_whatever>` and change it to `blog.yourdomain.com/blog/<article_name_or_id_or_whatever`. So if your migrating some old wordpress site to a fancy new node custom site and you need to redirect your old URL’s this should help you do it nice and easy.
