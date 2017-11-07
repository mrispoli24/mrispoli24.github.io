---
layout: post
title:  "Revert to Previous Commit in Git"
category: Tips and Tricks
date:   2017-10-31
---

I realize this is probably something that I should memorize but for some reason whenever I need to do this I find myself referencing my notes so perhaps this will be helpful to others.

```
git reset --hard <old-commit-id>
git push -f <remote-name> <branch-name>
```
