---
layout: post
title:  "Front End Fundamentals | Part 1"
category: Lessons
date:   2016-08-12
---

# Front End Fundamentals | Part 1

The first time I was paid to do a website I had no idea what I was doing. An old friend called me one day after returning to New York from a stint as a ski bum in Eagle, Colorado and offered to pay me to build websites for small businesses.

> I can pay you $400 dollars a week cash, you'll just watch a bunch of videos and build people's online stores, I think you'll be really good at it.

While the pay may sound meager, I jumped at the opportunity to not get into another service industry nightmare. Besides, there were people mortgaging their future getting a degree in this stuff, so to be in the black $400 bucks was better than going in the red for thousands every week. And that's how a photography turned geography major becomes a front end web developer.

Looking back on the experience, there were a lot of things I wish I knew, fundamentals if you will, that I just skipped over and then backtracked through as I gained more challenging work. For example, after slicing and dicing a handful of photoshop documents and bringing them to life as web experiences, I still had no idea how exactly a web page got there. Setting up a local environment, what local environment? Don't the pages just open in the browser? As time wore on, and I became more skilled, these seemed like stupid questions, in fact I became more embarrassed to ask them the more experience I had.

So I begin this where I wish I had started it all. However, be advised if you are looking to manipulate databases, give a computer and brain, or do tons of complex mathematical problems (as I used to believe was necessary to be a decent programmer); then I suggest you look elsewhere. This stays focused on the front end, while giving context on the backend necessary to understand it. I love pretty things so let's keep this focused on the pretty stuff.

## A Brief History of the Internet

Who invented the internet? If you don't know, fear not, nobody cared to know who [Johannes Gutenburg](https://en.wikipedia.org/wiki/Johannes_Gutenberg) was either.

> Gutenberg died in 1468 and was buried in the Franciscan church at Mainz, his contributions largely unknown. This church and the cemetery were later destroyed, and Gutenberg's grave is now lost.

I however would be remiss if I let you enter the industry not knowing the father of the internet. [Sir Timothy Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) is widely regarded as the "father of the internet." He also represents the fact that in the modern world an individual needn't to be a warrior to be knighted.

In 1989 Tim implemented the first communication between a Hypertext Transfer Protocol (HTTP) client and server. So when you hear about *front end* or *client side* of the internet, the two are interchangeable terms; just as *back end* refers to the *server side*. But why did he do this? Was the vision as grand as the internet today? Not exactly, his original idea was for the internet to be a way for scientists to share and link research papers all in one place.

## Why do I always have to type http://...?

HTTP stands for [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) and it is simply the type of request we make to a server to get us the files we want. There are other protocols you will hear about such as *[HTTPS](https://en.wikipedia.org/wiki/HTTPS)*, which is what you will see most commonly on e-commerce and banking sites. This probably gives you a clue to what the "s" stands for--*secure*. The main difference here is all data being transferred between you and the server is encrypted, guarding against *man-in-the-middle* type attacks. Why isn't it used everywhere? Simply because it is totally necessary to encrypt ever blog post you read, but every time you enter your credit card information this is essential.

There are two other protocols you will hear when working on the web which are:

1. [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol) (FTP) and Secure File Transfer Protocol (SFTP) which are used to simply move files to a server without actually rendering them in a browser as you see with HTTP.
2. [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) (SSH) which creates a secure channel between your computer and a remote server using *public-key cryptography*, like FTP and SFTP we use this mainly for file transfers, we will touch more on this later.

## So how the heck does the internet work?

This is a valid question even for some web professionals. Being self-taught, I jumped right into constructing and styling websites with HTML and CSS without ever really getting a firm grasp of what really was going on when I typed in a web address. I just uploaded my changes using FTP and magically when I refreshed the page they were there.

As you can see, in my early days there were little clues as to what was going on. The short version is that files are stored on a server that is connected to the internet. These files have an IP address, or a location, just like your computer has one and every other machine operating on the world wide web. When you purchase a domain name from a provider like *godaddy*, you can update the *Domain Name Service* or *DNS* settings so that the web knows when you type that domain name, you actually want the files from *X* IP address. The IP address never goes anywhere, it is just under the hood. This is why when you make *DNS* changes it often takes time for it to propagate throughout the internet and you will see these warnings whenever you update *DNS*. As the name suggests, DNS is a *service* like the yellow pages of the internet that lets your computer know what IP belongs to what name.

So you type in a web address and hit enter, that then makes a request from the DNS for the proper IP, once the IP is received, an HTTP (or HTTPS) request is made to a server somewhere in the world connected to the internet for those files. Once received your browser then renders the files for you to see.

This is an incredibly simplified version, as the focus of these lessons is the front end. Stanford has a great white paper called "[How Does the Internet Work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)," for further reading.

## Some Web Server Background
