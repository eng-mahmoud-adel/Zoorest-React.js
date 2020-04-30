import $ from 'jquery';

export const jquery= $(function() {
    "use strict";
    // adjusting the back-ground color while scrolling
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 50){
            $('header .navbar').css('background', 'transparent');
        } else{
            $('header .navbar').css('background', '#FFF');
        }
    });
});
