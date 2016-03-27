# DavidMenu

DavidMenu let you customize you full screen menu simply. 
<br>
![DavidMenu.gif]()



## Setup

download the package and reference the JavaScript and CSS files manually:
```html
  <script src="assets/DavidMenu.min.js"></script>
  <link href="assets/DavidMenu.min.css" rel="stylesheet">
```

## Step

using jquery to control ```DavidFullMenu``` function:
```javascript
$( /*the object to trigger Full menu*/ ).on( "click", function() {
  DavidFullMenu(/*explain later*/);
});
```
<br>
<br>

## explain the function:
```javascript
  DavidFullMenu({

      /* first, put in the name and url you like!*/
      list: [ {title:"First",url:"http://lichin.me"},
              {title:"Second",url:"http://codepen.io/lichin-lin"},
              {title:"own by your mind",url:""},
             ],

      /* choose the animation!*/       
      DavidMenuAnimation:"FadeIn",

      /* finally, the color you want.*/
      DavidBackground: Autumn,
  });
```
___

## Argument & value
1.DavidMenuAnimation: ```moveUpMenu```,```moveDownMenu```,```appearMenu```,```popAppearMenu```,```FadeInMenu```,```SlideInMenu```
2.DavidBackground: ```Grass```,```Chill```,```Sky```,```Rose```,```Autumn```,```Wine```
