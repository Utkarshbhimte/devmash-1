//Code stolen from css-tricks for smooth scrolling:
$(document).ready(function() {
  
    $('.scrollspy').scrollSpy();

    $.scrollify({
        section: "section",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: false,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });



    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        return false;
    });

    $(' #five p ').flowtype({
        minimum: 500,
        maximum: 1200,
        minFont: 12,
        maxFont: 20,
        fontRatio: 30
    });

    $('select').material_select();


    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        //      console.log("a   :" + wScroll);
        //        console.log(wScroll > $('#form').offset().top -50);
        //      console.log("b   :" + ($('#form').offset().top - 50));

        if (wScroll > $('#second').offset().top - 50) {
            $('#second p').removeClass("invisible").addClass("animated bounceIn");
        }

        if (wScroll > $('#three').offset().top - 50) {
            $('#three .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#three .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#three .button').removeClass("invisible").addClass("animated bounceIn")

        }

        if (wScroll > $('#four').offset().top - 50) {
            $('#four .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#four .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#four .button').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#five').offset().top - 50) {
            $('#five .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#five .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#five .button').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#team').offset().top - 50) {
            $('.mentorsImage').removeClass("invisible").addClass("animated bounceIn")
            $('.mentorsName').removeClass("invisible").addClass("animated flipInX")
            $('.mTitle').removeClass("invisible").addClass("animated flipInX")
            $('#team .fa').removeClass("invisible").addClass("animated flipInX")
        }

        if (wScroll > $('#form').offset().top - 50) {
            $('#form').removeClass("invisible").addClass("animated slideInDown")
        }

        if (wScroll > $('#form2').offset().top - 50) {
          $('form').removeClass("invisible").addClass("animated slideInDown")
          $('footer').removeClass("invisible").addClass("animated slideInRight")
        }

    });

});
