---
layout: post
title:  "Mailchimp AJAX Integration"
date:   2016-01-20
---

# Mailchimp AJAX integration

The following describes using AJAX to implement Mailchimp on the Shopify platform. The allows for forms to be submitted seamlessly without directing users to another tab for confirmation.

## The form HTML

Shopify's form looks something like this in the *themes.liquid* page (if it's to be on every page).

```HTML
<form action="{{ form_action }}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
  <label for="Email" class="newsletter__label hidden-label">{{ 'general.newsletter_form.newsletter_email' | t }}</label>
  <div class="input-group">
    <input type="email" value="{% if customer %}{{ customer.email }}{% endif %}" placeholder="{{ 'general.newsletter_form.newsletter_email' | t }}" name="EMAIL" id="Email" class="input-group-field newsletter__input" autocorrect="off" autocapitalize="off">
    <span class="input-group-btn">
      <button type="submit" class="btn newsletter__submit" name="subscribe" id="Subscribe">
        <span class="newsletter__submit-text--large">{{ 'general.newsletter_form.submit' | t }}</span>
        <span class="newsletter__submit-text--small">
          <span class="icon icon-arrow-right" aria-hidden="true"></span>
        </span>
      </button>
    </span>
  </div>
</form>
```

The dynamic component `{{ form_action }}` is populated with the *Mailchimp form action URL* that is set in the *Newsletter* section of the *Theme Editor*.

## Mailchimp form action URL

The default form action from Mailchimp looks like this:

```
//sitename.us10.list-manage.com/subscribe/post?u=c234edsd2323423421q5ad&amp;id=2c3ss234c
```

It must be modified slightly to use `post-json` and add `&c=?` to the end of the URL if you are working in a staging environment (key here is the domain is different from what the go live domain will be).

```
//sitename.us10.list-manage.com/subscribe/post-json?u=c234edsd2323423421q5ad&amp;id=2c3ss234c&c=?
```

## The JS

Now on to the javascript. We will be using jQuery's `.ajax()` function in a `GET` request instead of the default `PUT` on the form. We will also be using `jsonp` as the data type. *Note that last part is especially important if you are working in a staging environment as it is the only way to allow for a cross-domain API request to go through. Otherwise you will get a 502 error.*

```js
function register($form) {
  jQuery.ajax({
    type: "GET",
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'jsonp',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { console.log('error') },
    success     : function(data) {
      if (data.result != "success") {
        console.log('poop');
      } else {
        console.log('woo hoo');
        formSuccess();
      }
    }
  });
}

// waits for form to appear rather than appending straight to the form. Also helps if you have more than one type of form that you want to use this action on.
jQuery(document).on('submit', '#mc-embedded-subscribe-form', function(event) {
    try {
      //define argument as the current form especially if you have more than one
      var $form = jQuery(this);
      // stop open of new tab
      event.preventDefault();
      // submit form via ajax
      register($form);
    } catch(error){}
  });
```

*Note remember to remove the console.log() stuff at go live to avoid showing it in the console. They are just there to help you test.*
