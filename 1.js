$(function(){

    //cuon chuot thay doi menu
    $(window).scroll(function(event) {
        var vitriBody = $('body, html').scrollTop();
        var vitriShrink = $('.heading').offset().top;

        if (vitriBody >= vitriShrink) {
            $('.menu-top').addClass('shrink');
        }
        else {
            $('.menu-top').removeClass('shrink');
        }
    });

    // click cuon chuot tu viet

    $('#n1').click(function(event) {
        $('body, html').animate({scrollTop:$('#about').offset().top}, 800);
    });

    $('#n2').click(function(event) {
        $('body, html').animate({scrollTop:$('#skill').offset().top}, 800);
    });

    $('#n3').click(function(event) {
        $('body, html').animate({scrollTop:$('#portfolio').offset().top}, 800);
    });

    $('#n4').click(function(event) {
        $('body, html').animate({scrollTop:$('#contact').offset().top}, 800);
    });

    $('#n5').click(function(event) {
        $('body, html').animate({scrollTop:$('#contact').offset().top}, 800);
    });



})

