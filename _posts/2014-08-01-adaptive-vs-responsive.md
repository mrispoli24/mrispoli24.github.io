---
layout: post
title:  "Adaptive Vs. Responsive"
date:   2014-08-01 
---

## Adaptive Vs. Responsive: The Spectrum Problem

These days a common gripe that I have as an developer is the use of the term *responsive* as a buzz word. The question  in meetings is always posed, *"is your site responsive?"* As an integrator of third party software this becomes especially challenging, since a response of *yes* from an ecom director or marketing coordinator can mean just about anything from a completely fluid layout to a completely seperate m.dot template. 

From a designer / developer perspective the correct rhetoric would be is your site *adaptive* or is it *responsive*? However, does this really cover it? Are all sites that are *mobile optimized* sitting within one of these two predefined camps?

The short answer is *no*. 

Back when I was designing and building ecommerce sites for small businesses, in my mind, I had full control. There were two options, fixed width, or a fully eloquent responsive solution. I wanted the site to move like liquid, casually filling it's container perfectly at every browser resize. Then I learned about timelines, cost constraints, and client interference.

The fact is, you don't always get the option of a full redesign, and you don't always get the option of executing your vision completely. Sometimes the client's in-house designer, is bound to the old print media model, understanding little of the careful balance holding a site together across every resolution. A fully responsive site usually requires a full redesign of the previous site, and last minute changes can leave you tearing your hair out in frustration as your beutiful liquid mercury terminator get's shredded to bits. 

What most clients end up with, is something that works--something that makes both money and it's launch date.

### .The Spectrum Problem

What I have found is that most *mobile optimized* sites today (and I specify *mobile optimized* because some people still forgo mobile all together) exist on a spectrum. Much like in geometery where a square is a rectangle is also a parralellogram, but not the other way around--responsive is adaptive is mobile optimized but not necessarily vice versa.

Now many designers and developers are already rolling their eyes, but give me a chance to help this definition along. In the space of moblile web development, we encounter a schmorgasboard of hybrid solutions. If we try to define the whole of the mobile web in two camps, then we leave out the gray areas that exist, we lose the ability to scope a project effectively, speak intelligently with our clients, and get the full picture to our development team.

But where do we begin finding out what approach was used?

### .Device or Window-Size Detection

There are two main ways that a website decides how to adjust its layout.

**1. Device Detection:** Triggers new code based upon the device being used. This can either be done on the client-side by media queries in the CSS, or server-side code.

**2. Window Size:** Triggers based upon the size of the browser winow. This is typically done on the client-side using media queries in your stylesheet, but is also achievable, though inefficient, using javascript.

When a site relies upon device detection, we are looking at a site firmly on the *adaptive* end of the spectrum. When we look at window-size, we begin to tip towards the *responsive* end of the spectrum.

Take a look at the below CSS to see how this would look in standard media queries.

{% highlight css%}

/* Device Detection */

@media screen and (min-device-width: 768px) and (max-device-width: 1024px) { ... }

/* Window Size Detection */

@media screen and (min-width: 768px) and (max-width: 1024px) { ... }

{% endhighlight %}

Not too much of a difference there, but in terms of behavior, min/max-width will work when the browser is resized, whereas min/max-device-width requires a mobile device or simulator to trigger. For this reason device detection is often the most bothersome to work with. It also does not account for a user using a smaller browser window on their desktop or laptop, forcing an often bothersome horizontal scroll. For the best user experience, and adherence to true responsive design principles we are seeing window-size detection become most popular.

But how do we define these terms simply?

### .The Spectrum Defined

Going back to the geometry example, I see a few major definitions, or buzz words if you will, each nesting within one another like Russian matryoshka dolls.


#### Mobile Optimized

This encompasses any site with even the most primitive of mobile capabilities--all the way up to full on digital liquid mercury. It's just vague enough to show you have a clue where the current trends are going, but not specific enough to be presumtuous of anything ground-breaking. It shows the existance of a strategy, albeit it may be a poor one.


#### Adaptive

Adaptive design takes the approach of setting the template to shift at predetermined widths or *breakpoints*. Traditionally this could either be done by serving up a new template (the m.dot method) based upon device detection, or through media queries. However, today, we see this definition applied mainly to the media query method only and serving up an m.dot template becoming a solution to simply achieve the buzz word of mobile optimization. To call this approach *adaptive* would be rather disingenuous by today's standards. But even when done by media query, it can either specify device-width or simply use window-width, but the site will appear to *snap* at these breakpoints to the next layout. One can see that in the adaptive definition alone there is a spectrum, but it's beginning to narrow.

If you are on a desktop, take a look at <a href="http://jsfiddle.net/mrispoli24/E2xsr/6/embedded/result/" target="_blank">this example</a>. I've made the break points a bit more drastic to emphasize the effect but be sure to take a look at how the Site content *snaps* to the next width. I used the window-size detection method so you can simply resize your browser window rather than load in a device.


#### Responsive

Responsive design means that the site will *respond* to any device constraints thrown at it. It involves the use of percentages for element and font size, fluid grids, and will scale the layout according to window-width *not* device-width. This is the latest craze in web design as it is the most forward thinking by ensuring consistent layout despite the myriad of new devices and screen sizes released each year. Does this mean that a responsive site is not also adaptive? No, it most certainly is adaptive it's just more graceful. But is an adaptive site also responsive? Not necessarily.  

If you are on a desktop, take a look at <a href="http://jsfiddle.net/mrispoli24/9L9wk/8/embedded/result/" target="_blank">this example</a>. When you resize the window, you  can see that rather than snapping to specific points, a *fluid grid* scales on it's own, reconfiguring the layout when necessary at smaller resolutions. 

Traditionally that would cover it for definitions, but I would like to add one more...


#### Fluid Responsive

This is the stuff web applications are made of, and what I consider to be the holy grail of web design. It's often not possible for more complex sites to achieve this status but it is becoming more popular with time. This is the digital liquid mercury I refer to, just pure unicorn blood. These sites will scale infinitely relying wholly on window-size detection just like their responsive parent, however they will never shift layout as is common with fluid grids. They often have to maintain a single column throughout, much like this blog, as two columns in a smart phone gets awful cumbersome.

Again, if you are on a desktop, see <a href="http://jsfiddle.net/mrispoli24/L5tDz/embedded/result/" target="_blank">this example</a>. As you can see the two colums scale infinitely without any change in layout. This type of site only works for very specific applications, as ecommerce sites in particular often have many different elements that would be better suited to the responsive design principle, but not full fluidity. Though rare, it is worth noting this type of site as it requires extra care to achieve this.

### .For The Visually Inclined

Here is a graphic to showcase the above definitions. If you are an account or project manager and in the business of scoping projects, you may want to consider adding zeros to your price as a client takes you from left to right on the chart.

<img class="elastic" src="/images/adaptive-responsive-spectrum.jpg" alt="the adaptive responsive spectrum chart">

You can also check out <a href="http://teamtreehouse.com/library/build-a-responsive-website/introduction-to-responsive-web-design/fixed-fluid-adaptive-and-responsive-2" target="_blank">this video</a> on <a href="http://teamtreehouse.com" target="_blank">teamtreehouse.com</a> for some additional clarity.

###.In Conclusion

These definitions in themselves do not clear up the multitude of methods or combination of methods used on the web today. I have seen partially responsive sites down to a certain width where they switch to an m.dot layout; and sites that scaled all the way down to mobile using a fluid grid but when loaded into a device pull up a completely different template. Hence the need to understand this as a spectrum rather than trying to categorize every site into two distinct categories. This is especially important when asked to scope a project, whether it be a full site rebuild, or a module living inside an existing layout.

The jumble of different ways businesses have attempted to bring their site into the mobile revolution is not influenced simply by purity of development but also by cost and usage constraints. Often we like to divide things into black and white, but there is a big gray area today in the mobile web, and the sooner we recognize it, the sooner we can adapt our business practices to it.













