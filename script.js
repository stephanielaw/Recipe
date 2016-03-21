$(document).ready(function () {

  //checkboxes beside shopping list  
     $('<input type="checkbox" value="1" />').prependTo('li');

  //hovering over preparation
     $("p").hover(function () {
        $(this).addClass("boldedText");
     },
      function(){
        $(this).removeClass("boldedText");
      });

   //remove all images
      $("span").click(function() {
        $(".photo").addClass("disappear");
        });  
      $("span").click(function() {
        $(this).addClass("disappear");
        });          

   });


