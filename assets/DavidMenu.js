// ===== color ===== //
var Grass = "linear-gradient(135deg, #45CC93 0%, #47E593 25%,#70E989 50%,#A7E989 75%)";
var Chill = "linear-gradient(135deg, #00BFB8 0%, #3DCCC7 25%,#6EEAE8 50%,#B3EBEF 75%)";
var Sky = "linear-gradient(135deg, #1493FC 0%, #54B0FD 25%,#81D0FD 50%,#ADE8FD 75%)"; 
var Rose = "linear-gradient(135deg, #F44453 0%, #F45B69 25%,#FF8284 50%,#FFB0AA 75%)";
var Autumn = "linear-gradient(135deg, #E87153 0%, #F7825A 25%,#FFA56D 50%,#FFC77A 75%)";
var Wine = "linear-gradient(135deg, #841A53 0%, #843B62 25%,#84546E 50%,#84707B 75%)";
var animationType = "moveUpMenu";
var colorType = Grass;
var Davidcount = 0;
/*===== DavidFullMenu v0.2 =====

  use DavidFullMenu Function to 
  make your own full screen menu!  

===== DavidBackground sheet =====
Grass, Chill, Sky, Rose, Autumn, Wine
===== DavidBackground sheet =====
moveUpMenu, moveDownMenu, appearMenu,
popAppearMenu, FadeInMenu , slide    */

// vvvvv modify here vvvvvv //

$('.menu-button').on( "click", function() {

  DavidFullMenu({
      list: [ {title:"add",url:"http://lichin.me"},
              {title:"content",url:"http://codepen.io/lichin-lin"},
              {title:"you like by",url:""},
              {title:"javascript",url:"http://codepen.io/lichin-lin"},
             ],
      DavidMenuAnimation:"FadeInMenu",
      DavidBackground: Autumn,
  });
  
});

// ^^^^^ modify here ^^^^^ //



//===== Function start ===== //
function DavidFullMenu(content){
  
  if(Davidcount == 0){
    $('body').append('<div class="menu-container"><nav><ul class="menu-list"></ul></nav></div>');

    for(var i = 0; i < content.list.length;i++){
       $('.menu-container ul').append("<li><a href=" + content.list[i].url +  ">" + content.list[i].title + "</a></li>");
    }  
    Davidcount++;
  }
    if(content.DavidMenuAnimation == "moveUpMenu"){animationType = "moveUpMenu";}
    else if(content.DavidMenuAnimation == "moveDownMenu"){animationType = "moveDownMenu";}
    else if(content.DavidMenuAnimation == "appearMenu"){animationType = "appearMenu";}
    else if(content.DavidMenuAnimation == "popAppearMenu"){animationType = "popAppearMenu";}
    else if(content.DavidMenuAnimation == "FadeInMenu"){animationType = "FadeInMenu";}
    else if(content.DavidMenuAnimation == "slide"){animationType = "SlideInMenu";}

    if(content.DavidBackground == Grass){colorType = Grass;}
    else if(content.DavidBackground == Chill){colorType = Chill;}
    else if(content.DavidBackground == Sky){colorType = Sky;}
    else if(content.DavidBackground == Rose){colorType =  Rose;}
    else if(content.DavidBackground == Autumn){colorType = Autumn;}
    else if(content.DavidBackground == Wine){ colorType = Wine;$('.menu-container a').css("color","white");}  

    $('body').css("overflow","scroll");
    $('.menu-button').css("z-index", 3);
    $('.menu-button').toggleClass("addOnMenu");
    $('.menu-container').toggleClass("showOnMenu");
    $('.menu-container').css("background",colorType);
    $('.menu-container nav').toggleClass(animationType);    
};