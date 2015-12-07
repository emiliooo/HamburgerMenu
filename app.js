

$(document).ready(function() {

    function setMenu() {
        $(window).on('resize', function() {
            if ($(window).width() < 700) {
                $('.nav').hide();
                $('.menuBtn').show();
            } else {
                $('.nav').show();
                $('.menuBtn').hide();
                $('.mobileMenu').hide();
            }
        });
    }

    function setClick() {
        $('.menuBtn').on('click', function() {
            $('.mobileMenu').toggle();
        });
    }

    setMenu();
    setClick();

});
