$(function(){

    $(window).scroll(function(event) {
        var vitribody = $('body, html').scrollTop();
        var vitriShrink = $('h2.intro-text').offset().top;

        if (vitribody >= vitriShrink) {
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

