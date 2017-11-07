---
layout: post
title:  "Serializing From Data or an Object"
category: Tips and Tricks
date:   2017-05-27
---

This is a simple helper function to serialize a form element:

```js
function serialize(form) {
  var field, l, s = [];
  if (typeof form == 'object' && form.nodeName == "FORM") {
      var len = form.elements.length;
      for (var i=0; i<len; i++) {
          field = form.elements[i];
          if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
              if (field.type == 'select-multiple') {
                  l = form.elements[i].options.length;
                  for (var j=0; j<l; j++) {
                      if(field.options[j].selected)
                          s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
                  }
              } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                  s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
              }
          }
      }
  }
  return '&'+s.join('&').replace(/%20/g, '+');
}
```

Proper use would be to pass `elem.target` in on a submit listener for instance. This function was taken from [Serialize form data into a query string](https://plainjs.com/javascript/ajax/serialize-form-data-into-a-query-string-45/).

If you would like to serialize a simple object the function is much easier.

```js
function serialize(data) {
  var dataArr = [];
  for (key in data) {
    dataArr.push(key+'='+data[key]);
  }
  return '&'+dataArr.join('&').replace(/%20/g, '+');
}
```
