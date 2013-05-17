dependify.js
============
Development in progress....

A JavaScript library to hide and show elements on a page.

============
#Setup
You will need to apply some data-attributes to the element you want to hide and show.

+ **data-dependency-child** set this to the target you want to hide or show. 
+ **data-dependency-show** set this to what you want the element to hide and show on.
+ **data-dependency-match** set this to what type of  you would like to use.

============

============
#Single

Hide and show a single element.


```html
<div class="container">

   <select class="dependency" data-dependency-child="#yes-test" data-dependency-show="yes" data-dependency-match="single" >
    <option value="" selected></option>
    <option value="yes">yes</option>
    <option value="no">no</option>
  </select>  
  
  <div id="yes-test">Showing a single target</div>
  
</div>

```



Demo: http://jsbin.com/iluqal/40/