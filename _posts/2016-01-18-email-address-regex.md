---
layout: post
title:  "Regex to Validate Email Addresses"
category: Tips and Tricks
date:   2016-01-18
---

# Adding email address regex to form

The following uses a regex to check for a valid email address before attempting to submit a form.

```js
<script type="text/javascript">
jQuery(function(){
function formErrorHandler(value, e){
 try {
     var is_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (!is_email.test(value)){
       e.preventDefault();
       alert("Please enter a valid email");
    }
 }catch(error){}
};
jQuery('.mailchimp_signup_form').submit(function(e){
try {
 var email = jQuery(this).find('input[name="email"]').val();
 formErrorHandler(email, e);
} catch(error){};
});
});
</script>
```
