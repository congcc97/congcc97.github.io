$(function(){

    $(window).scroll(function(event) {
        var vitribody = $('body, html').scrollTop();

        if (vitribody >= 300) {
            $('.menu-top').addClass('shrink');
        }
        else {
            $('.menu-top').removeClass('shrink');
        }

    });

    // ham croll cho cac nut tren thanh menu
    $('#n5').click(function(event) {
        $('body, html').animate({scrollTop:$('#contact').offset().top}, 800);
    });
    $('#n4').click(function(event) {
        $('body, html').animate({scrollTop:$('#team').offset().top}, 800);
    });
    $('#n3').click(function(event) {
        $('body, html').animate({scrollTop:$('#about').offset().top}, 800);
    });
    $('#n2').click(function(event) {
        $('body, html').animate({scrollTop:$('#portfolio').offset().top}, 800);
    });
    $('#n1').click(function(event) {
        $('body, html').animate({scrollTop:$('#services').offset().top}, 800);
    });

});

