---
layout: post
title:  "Insta-tabs for Shopify PDP's"
date:   2016-01-19
---

# Create tabs from descriptions in Shopify

The following will create tabbed content in Shopify product pages by simply delimiting each section with a new `<h3>` followed by the inner content required.

## Use

In the Shopify WYSIWYG all content between `<h3>` headings will be made into tabs with the `<h3>` elements being the headings.

![shopify product wysiwyg](/images/shopify-wysiwyg-tabs-screenshot.png)

Which will produce this on the front-end:

![shopify tabs](/images/shopify-tabs-front-end.png)

## The Code

### jQuery

```js
function makePdpTabs() {
  try {
    // create tab containers
    jQuery('.product-single__description').prepend('<div id="tab-headings"></div><div id="tab-content"></div>')
    // loop through headings in description div and create divs to hold each tabbed content
    jQuery('.product-single__description h3').each(function(i,e){
      // add data attribute to h3
      jQuery(e).attr('data_tab','content_'+i)
      //add content to tab content
      jQuery('#tab-content').append('<div id="tab_'+i+'" class="tab" data_tab="content_'+i+'"></div>');
      jQuery(e).nextUntil('h3').andSelf().appendTo('#tab_'+i);
    });
    //add heading to tab-headings
    jQuery('.tab h3').appendTo('#tab-headings');
    //set first tab to active
    jQuery('*[data_tab="content_0"]').addClass('active');
    //set click event on  the tab
    jQuery('#tab-headings h3').click(function(e){
      //check if this pane is already active
      if (jQuery(this).hasClass('active')) {
        e.preventDefault();
      } else {
        //remove other active pane
        jQuery('.active').removeClass('active');
        //store data attribute
        var data_target = jQuery(this).attr('data_tab');
        jQuery('*[data_tab="'+data_target+'"]').addClass('active');
      }
    });
    // tabs hidden until dom manipulation finishes
    jQuery('.product-single__description').addClass('tab-ready');
  } catch(error){}
};
//when page is ready create tabs;
jQuery(function(){
  try {
    //if product page make tabs on document ready
    if (jQuery('meta[property="og:type"]').attr('content').toLowerCase() == 'product') {
      makePdpTabs();
    }
  } catch(error){}
});

```

### CSS

```CSS
/* hide description until tabs are ready */
.product-single__description {
 opacity: 0;
 visibilty: hidden;
  -webkit-transition: all 3ms linear;
  -moz-transition: all 3ms linear;
  -ms-transition: all 3ms linear;
  -o-transition: all 3ms linear;
  transition: all 3ms linear;

}
/* show description when tabs are ready */
.product-single__description.tab-ready {
  opacity: 1;
  visibility: visible;
}

#tab-headings h3 {
  display: inline-block;
  font-size: 12px;
  margin: 0;
  padding: 0 20px 0 0;
  color: #999;
  cursor: pointer;
  -webkit-transition: all 3ms linear;
  -moz-transition: all 3ms linear;
  -ms-transition: all 3ms linear;
  -o-transition: all 3ms linear;
  transition: all 3ms linear;
}

#tab-headings h3.active {
  color: #000;
}

.tab {
  display: none;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 3ms linear;
  -moz-transition: all 3ms linear;
  -ms-transition: all 3ms linear;
  -o-transition: all 3ms linear;
  transition: all 3ms linear;
}

.tab.active {
  display: block;
  opacity: 1;
  visibility: visible;
}

```
