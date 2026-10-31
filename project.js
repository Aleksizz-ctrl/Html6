$(document).ready(function () {

    $(".header").click(function () {
        $(".content").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

});