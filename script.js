
$(window).scroll(function(){
    $(".scroll").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  $(window).scroll(function(){
      $(".landing").css("opacity", 1 - $(window).scrollTop() / 1000);
    });

var submenu = document.getElementById('sub-menu-button');

$("#sub-menu-button").click(function(){
  $("sub-menu").css("display", "block");
});