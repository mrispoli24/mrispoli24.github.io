---
layout: post
title:  "Some Simple Useful Cookie Functions (vanilla js)"
date:   2016-01-17
---

# Simple Cookie functions

The following are simple js functions for setting, getting and checking cookies.

## Set Cookie

Sets a cookie.

```js
function setCookie(cname, cvalue, exdays) {
  try {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  } catch(error){}
}
```

| Argument | Description |
| -------- | ----------- |
| `cname` | The name of the cookie |
| `cvalue` | The value of the cookie |
| `exdays` | How long until the cookie expires in days |

## Check Cookie

Checks the existence of a cookie with a simple boolean return.

```js
function checkCookie(cname) {
  try {
    var check=getCookie(cname);
    if (check != "") {
      return true;
    }else{
      return false;
    }
  } catch(error){}
}
```

|Argument|Description|
|--------|-----------|
|`cname`|The name of the cookie to check|

## Get Cookie

Retrieves a cookie.

```js
function getCookie(cname) {
  try {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
} catch(error){}
```

|Argument|Description|
|--------|-----------|
|`cname`|The name of the cookie to retrieve|
