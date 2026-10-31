$(document).ready(function () {

    let counter = 2;

    $("#appendBtn").click(function () {
        counter++;
        $("#list").append("<li>Item " + counter + "</li>");
    });

    $("#prependBtn").click(function () {
        counter++;
        $("#list").prepend("<li>Item " + counter + "</li>");
    });

    $("#removeBtn").click(function () {
        $("#list li:last").remove();
    });

    $("#srcBtn").click(function () {
        $("#pic").attr("src", "https://picsum.photos/id/20/200/200");
    });

    $("#hrefBtn").click(function () {
        $("#link").attr("href", "https://www.wikipedia.org").text("Wikipedia");
    });

    $("#name").keyup(function () {
        $("#outName").text($(this).val());
    });

    $("#email").keyup(function () {
        $("#outEmail").text($(this).val());
    });

});