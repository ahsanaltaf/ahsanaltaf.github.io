
$(document).ready(function(){

    // hide .navbar first
    $(".mynav").hide();

        // set distance user needs to scroll before we fadeIn navbar
        var offset = $('#page-top').offset().top;

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > offset) {
                    $('.mynav').fadeIn();
                } else {
                    $('.mynav').fadeOut();
                }
            });
        });

});




$(".navnavbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});