 $(function(){
    $(window).scroll(function(event) {
        var heightBody = $('body, html').scrollTop();
        /*var heightShrink = $('.title-header').offset().top;*/
        // khong tinh dc ???? bị lỗi chờ sửa?

        if (heightBody >= 170) {
            $('.menu-top').addClass('shrink');
        }
        else{
            $('.menu-top').removeClass('shrink');
        }

    });

    // sự kiện click cuộn chuột
    $('#n1').click(function(event) {
        $('body, html').animate({scrollTop:$('#about').offset().top}, 800)
    });

    $('#n2').click(function(event) {
        $('body, html').animate({scrollTop:$('#services').offset().top}, 800)
    });

    $('#n3').click(function(event) {
        $('body, html').animate({scrollTop:$('#portfolio').offset().top}, 800)
    });

    $('#n4').click(function(event) {
        $('body, html').animate({scrollTop:$('#contact').offset().top}, 800)
    });




})

