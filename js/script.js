(function($){
    $(function(){
        // Scroll to sections
        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top - 90}, 1000); // -50 je offset
        });
        $(".jq--scroll-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--pizza").offset().top - 90}, 1000);
        });
        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top - 90}, 1000);
        });
        $(".jq--scroll-galery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--galery").offset().top - 109}, 1000);
        });
        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top - 50}, 1000);
        });

        // Scroll to buttons
        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top - 50}, 1000);
        });
        $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top - 50}, 1000);
        });

        // Mobile navigation
        $(".jq--nav-icon").click(function(){
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });

        // Change hamburger to cross
        $(".jq--img-hamburger").click(function(){
            if($(".jq--img-hamburger").attr("src") == "/Pizza/images/menuHamburger.png")
            {
                $($(".jq--img-hamburger").attr("src","/Pizza/images/menuCross.png"));
            }
            else
            {
                $($(".jq--img-hamburger").attr("src","/Pizza/images/menuHamburger.png"));
            }
        });

    });
})(jQuery);
