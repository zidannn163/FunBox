$(document).ready(function(){

    var back = $(".back"),
        center_height = $('.nyams').outerHeight() + $('h1').outerHeight() + 70,
        center_margin = ($(document).height() - center_height)/2,
        center        = $('.center'),
        nyam          = $('.nyam'),
        nyam_border   = $('.nyam-border');


    center.height(center_height);

    if ($(window).width() > 660 ){
        center.css({'padding-top': center_margin + 'px', "padding-bottom": center_margin + 'px'});
    }else if (($(window).width() < 660) && (center.css("padding-bottom"))){
        center.css({'padding-top': '', "padding-bottom": ''});
    }



    $(window).resize(function(){

        var center_height = $('.nyams').outerHeight() + $('h1').outerHeight() + 70,
            center_margin = ($(document).height() - center_height)/2,
            center        = $('.center');
            center.height(center_height);

        if ($(window).width() > 660 ){
            center.css({'padding-top': center_margin + 'px', "padding-bottom": center_margin + 'px'});
        }else if (($(window).width() < 660) && (center.css("padding-bottom"))) {
            center.css({'padding-top': '', "padding-bottom": ''});
        }
    });


    $(window).scroll(function(){
        back.css('background-position', '0 '+($(window).scrollTop()*0.4)+'px');
    });

    function nyamHover(item){
        item.on({
            mouseenter: function () {
                this.classList.add('hover');
            },
            mouseleave: function () {
                this.classList.remove('hover');
            }
        })
    }

    nyamHover(nyam_border)
  
});