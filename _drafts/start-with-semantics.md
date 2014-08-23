---
layout: post
title:  "Start With Semantics"
date:   2014-08-05
---

## Start With Semantics: Natural, Passive, Active

Back in 2001, right around the time Geocities was going out of style, I was learning to lead my first traditional rock climb outdoors. For those that don't know this is the art of taking what is called the *sharp end* and placing protective gear to catch you if you fall as you move up the wall. In other words, being the guy that goes first and puts the rope up the wall.

My uncle taught me about the three types of protection we use--natural, passive, and active. Natural pro is anything that already exists on the wall *naturally*. For example slinging a tree, or chockstone, or horn of rock. Passive protection involves the use of what are called *nuts* or *stoppers*. They are essentially pieces of metal attached to steel cable that can fit into "v-shaped" cracks. They are known as passive because they are simple machines in their function and perform no action on the rock other than being too big to fall out of the crack you place them in. Active pro, is the use of *spring-loaded camming devices* or *SLCD's*. They were a revolutionary development in rock climbing as they fit almost anywhere, able to take a load from multiple directions, and are extremely secure as they actively put pressure outward on the rock that only multiplies with greater force.

*"When you climb you want to look for natural pro first, passive second, and active last..."*

*--Uncle Jim*

Today, when teaching new climbers the craft of traditional leading, I always repeat this lesson as it still rings true for me today on any climb. It is a surefire way to maintain your most versatile gear for the longest amount of time, and keep your efficiency at it's peak.

These three types of pro can also be looked at as your basic web building tools: HTML, CSS, and JavaScript. The principle I learned all those years ago, I find myself applying to web development each day.

HTML being your natural pro, no web page can exist without it--it is the structural back bone of the page and also the easiest to write and render.

CSS can be looked at as your passive pro. As the presentation layer it adds life where there could just be drab text, and is also rather easy to write and fast for the browser to render.

JavaScript, your active pro, is the most versatile and also can manipulate the DOM in ways CSS and HTML cannot. At the same time it can also do everything the previous two languages can and more.

### Why Do Semantics Even Matter?

As a standards nut and perfectionist, I often find myself in debate about why exactly semantics are important with other developers. The standard response is always, *"Well it works. That's what's important. Who cares what is under the hood? The client can't see it."*

Taking pride in one's work is all about the unseen, what goes on when no one is looking. How would you like it if the person insulating your house did it in a sub par fashion, knowing no one would look beneath the sheet rock for a decade or more. It's about taking ownership of your craft, and doing it in the most efficient and eloquent method possible--because you want to be an example to follow.

Semantics ensures accessibility, which is at the core of the internet. Hyper Text Markup Language was originally created as a means for researchers to share information with one another. The tags themselves are designed to outline information, they were created to mean something. The internet's beauty is in it's ability to transfer information, HTML outlines that information and gives it meaning to both the computer and the user. It's easy to get caught up in the internet as a means for entertainment, sales, or marketing--but we cannot forget that it's revolutionary beauty is in the ability to share information in a universal format. Semantics ensures this primary mission lives on, even as the web becomes more cluttered with the obtuse.

Efficiency and extensibility are promoted by semantics. By separating structure, presentation, and behavior we use code in the most efficient way possible and also make it easier to make changes and upgrade that code well into the future. Again we keep the information in tact first and foremost, the rest is just noise.

Google loves semantics. Despite the theory that SEO is going the way of the Dodo Bird, it is still alive and well, and Google's crawlers respond well to good clean markup. Why make your clients work harder to climb those search engine ranks if they are fighting an uphill battle against bad markup.

If you have ever torn your hair out fixing cross browser bugs in a website you will understand the need for code to be written one way and read one way. It's difficult to build a universal tool when different browsers use and render it differently. Semantics and web standards move to standardize the code we write to appear one way all the time. This has begun to put an end to the wild west days where IE rendered code one way and Safari did it another. In order to expect companies to render all code without cross browser hacks, we have to start agreeing on one way to write it in the first place.

### How Do I Start Writing Semantic Markup?

It is important to note that this is an evolutionary process. Each time we build a site or refactor our applications we should strive to do this better, but there are no perfect solutions. My goal here is not to create evangelists or hipster code snobs, but to get us thinking in the proper manner.

#### Start With Structure

When we begin our build we should start with the HTML first. Get all of the information on the table. If this is a web page I should be able to access all of the important information, imagery, and navigate the links without any styling or scripting applied.

I should note there will be some exceptions for instance use of background images for responsive design and dynamic single page application with tools like node.js and angular.js. However, for the purposes of this post we just want to focus on the basics, building good habits early means you will be better suited to break the rules later.

*"I'm not a great programmer; I'm just a good programmer with great habits" - Kent Beck*

As we build out our HTML we want to make sure that when we make a heading that it is in fact a heading. Remember we are not using tags to style text and make it larger, we are just building an outline. There should be a single `<h1>` on the page and that will represent your title in most cases. The next level down will be our `<h2>` subheadings and beyond that we have our `<h3`, `<h4>`, `<h5>`, `<h6>`. In most cases you will not use all of these, and remember to make text bold or italic we want to use our `<strong>` and `<em>` *not* our heading tags.

Remember outlines from middle school? That is the effect our markup will take on.

{% highlight html %}
<h1>This is the title of my page, there will be only one per page</h1>
  <p>Here is some introductory text. Remember I am a paragraph not a tagline or byline.</p>
  <h2>This is a subheading for the next section of my post.</h2>
  <p>...</p>
      <h3>Here is another subheading</h3>
        <p>...</p>
      <h3>...and another</h3>
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
    <h2>...</h2>
    <p>...</p>
{% endhighlight %}

**But what about non-semantic text? Bylines, tag-lines, and standalone lines?**

For text with no apparent semantic significance we have a tag for that, it's called a `<span>` tag. Often we use it to style single words within a paragraph but in a semantic sense they really can be seen as a utility tag to be used inside of paragraphs of course but also on their own for single lines of text.

#### Next The Style

*Style is the difference, a way of doing, a way of being done. -Charles Bukowski*
