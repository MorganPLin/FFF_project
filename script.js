var bar = $('#stickybar');

$(window).scroll(function() {
    if($(this).scrollTop() > 250) {
        bar.addClass("stickybarscrolled");
    else {
        bar.removeClass("stickybarscrolled")
    }
    }
})


$(".aboutme").click(function() {
    $('html, body').animate({
        scrollTop: $("#introtext").offset().top
    }, 800);
});