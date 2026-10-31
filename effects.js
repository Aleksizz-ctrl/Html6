$(document).ready(function () {

    $("#hideBtn").click(function () {
        $("#text").hide();
    });
    $("#showBtn").click(function () {
        $("#text").show();
    });
    $("#toggleBtn").click(function () {
        $("#text").toggle();
    });

    $("#fadeOutBtn").click(function () {
        $("#img").fadeOut();
    });
    $("#fadeInBtn").click(function () {
        $("#img").fadeIn();
    });
    $("#fadeToggleBtn").click(function () {
        $("#img").fadeToggle();
    });

    $("#slideUpBtn").click(function () {
        $("#panel").slideUp();
    });
    $("#slideDownBtn").click(function () {
        $("#panel").slideDown();
    });
    $("#slideToggleBtn").click(function () {
        $("#panel").slideToggle();
    });

});