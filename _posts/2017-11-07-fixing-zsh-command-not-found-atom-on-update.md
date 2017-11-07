---
layout: post
title:  "Fixing 'ZSH Command Not Found Atom' on Atom Update"
category: Tips and Tricks
date:   2017-11-07
---

Sometimes when Atom updates our quick command to open a project `atom .` does not work anymore. Typing the blow two commands fixes this issue.

```
rm /usr/local/bin/atom
ln -s /Applications/Atom.app/Contents/Resources/app/atom.sh /usr/local/bin/atom
```
