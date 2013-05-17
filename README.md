dependify.js
============
Development in progress....

A JavaScript library to hide and show elements on a page.

============
#Setup
You will need to apply some data-attributes to the element you want to hide and show.

+ **data-dependency-child** set this to the target you want to hide or show. 
+ **data-dependency-show** set this to what you want the element to show on.
+ **data-dependency-match** set this to what function  you would like to use.

You will also need to add a class to the element you want to trigger the change.

+ **dependency**

============
Functions
============

###Single
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

###Multiple
Hide and show multiple elements
```html
<div class="container">

  <select class="dependency" data-dependency-child="#multiple,#1,#2,#3" data-dependency-show="yes" data-dependency-match="multiple" >
    <option value="" selected></option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
  
  <div id="1" style="background-color:red;">Div 1</div>
  <div id="2" style="background-color:green;">Div 2</div>
  <div id="3" style="background-color:green;">Div 3</div>
  
</div>

```

###Array
Hide and show a selected number of elements.

```html
<div class="container">

  <select class="dependency" data-dependency-child="#1|#1,#2|#1,#2,#3" data-dependency-show="1|2|3" data-dependency-match="array" >
    <option value="" selected></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  
  <div id="1" style="background-color:red;">Div 1</div>
  <div id="2" style="background-color:green;">Div 2</div>
  <div id="3" style="background-color:green;">Div 3</div>
  
</div>

```

#Demo: http://jsbin.com/iluqal/40/