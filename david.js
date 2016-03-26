// ===== color ===== //
var Grass = "linear-gradient(135deg, #45CC93 0%, #47E593 25%,#70E989 50%,#A7E989 75%)";
var Chill = "linear-gradient(135deg, #00BFB8 0%, #3DCCC7 25%,#6EEAE8 50%,#B3EBEF 75%)";
var Sky = "linear-gradient(135deg, #1493FC 0%, #54B0FD 25%,#81D0FD 50%,#ADE8FD 75%)"; 
var Rose = "linear-gradient(135deg, #F44453 0%, #F45B69 25%,#FF8284 50%,#FFB0AA 75%)";
var Autumn = "linear-gradient(135deg, #E87153 0%, #F7825A 25%,#FFA56D 50%,#FFC77A 75%)";
var Wine = "linear-gradient(135deg, #841A53 0%, #843B62 25%,#84546E 50%,#84707B 75%)";
var animationType = "moveUpMenu";
var colorType = Grass;
/*===== DavidFullMenu v0.2 =====

  use DavidFullMenu Function to 
  make your own full screen menu!  

===== DavidBackground sheet =====
Grass, Chill, Sky, Rose, Autumn, Wine
===== DavidBackground sheet =====
moveUpMenu, moveDownMenu, appearMenu,
popAppearMenu, FadeInMenu , slide    */

// vvvvv modify here vvvvvv //

DavidFullMenu({
    list: [ {title:"add",url:"http://codepen.io/lichin-lin"},
            {title:"content",url:"http://codepen.io/lichin-lin"},
            {title:"you like by",url:"http://lichin.me"},
            {title:"javascript",url:"http://lichin.me"},
           ],
    DavidMenuAnimation:"FadeInMenu",
    DavidBackground: Sky,
});

// ^^^^^ modify here ^^^^^ //



//===== Function start ===== //
function DavidFullMenu(content){
  
  $('body').append('<div class="menu-container"><nav><ul class="menu-list"></ul></nav></div>');
  
    for(var i = 0; i < content.list.length;i++){
      $('.menu-container ul').append("<li><a href=" + content.list[i].url +  ">" + content.list[i].title + "</a></li>");
    }
};
$('.menu-button').on( "click", function() {

  $(this).css("z-index", 3)
  $('.menu-button').toggleClass("addOnMenu");
  $('.menu-container').toggleClass("showOnMenu");
  $('.menu-container').css("background",colorType);
  $('.menu-container nav').toggleClass(animationType);
  
});

$('.colorPicker').on(
  { "focus": function() {
      this.selectedIndex = -1;
    }
  , "change": function() {
      if($(this).val() == 1){
        colorType = Grass;
      }else if($(this).val() == 2){
        colorType = Chill;
      }else if($(this).val() == 3){
        colorType = Sky;
      }else if($(this).val() == 4){
        colorType = Rose;
      }else if($(this).val() == 5){
        colorType = Autumn;
      }else if($(this).val() == 6){
        colorType = Wine;
        $('.menu-container a').css("color","white");
      }
      this.blur();
    }
  });
$('.animationPicker').on(
  { "focus": function() {
      this.selectedIndex = -1;
    }
  , "change": function() {
      if($(this).val() == 1){
        animationType = "moveUpMenu";
      }else if($(this).val() == 2){
        animationType = "moveDownMenu";
      }else if($(this).val() == 3){
        animationType = "appearMenu";
      }else if($(this).val() == 4){
        animationType = "popAppearMenu";
      }else if($(this).val() == 5){
        animationType = "FadeInMenu";
      }else if($(this).val() == 6){
        animationType = "SlideInMenu";
      }
      this.blur();
    }
  });
