
// Hamburger Menu
function close_menu() {
    $('.btn-hamburger, #main-nav').removeClass('open');
    $('html').removeClass('menu-open');
    bodyScrollLock.clearAllBodyScrollLocks();
}

function open_menu() {
    $('.btn-hamburger, #main-nav').addClass('open');
    $('html').addClass('menu-open');
    bodyScrollLock.disableBodyScroll(targetElement);
}

// Disable Scroll
const targetElement = document.querySelector('#main-nav');
$('.btn-hamburger').click(function () {
    if ($(this).hasClass('open')) {
        close_menu();
    } else {
        open_menu();
    }
})

// Detect window width
var isMobile = false;
var window_width = $(window).width();
function check_window_width() {
    if (window_width < 768) {
        $('body').addClass('mobile');
        isMobile = true;
    }
    else {
        $('body').removeClass('mobile');
        isMobile = false;
    }
    return window_width;
}
check_window_width();

var init_delay = true;
$(window).resize(function () {
    if ($(window).width() != window_width && init_delay) {
        $('#main-nav').removeClass('has-animation');
        window_width = $(window).width();
        init_delay = false;
        setTimeout(function () {
            check_window_width();
            resize_functions();
            init_delay = true
        }, 100);

    }
});

function resize_functions() {
    $('#main-nav').addClass('has-animation');
    close_menu();
}

$(document).ready(function () {

    // Page Navigation
    $("#main-header nav a").click(function() {
        var target = "#" + $(this).attr('data-target');
        close_menu();
        $([document.documentElement, document.body]).animate({
            scrollTop: ($(target).offset().top) - ($('#main-header').outerHeight())
        }, 500);
    });

});

$(window).on('load', function () {
    $('#main-nav').addClass('has-animation');
});