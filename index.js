$(document).ready(function () {
    console.log("jQuery is ready!");

    $("#idBtn").click(function () {
        $("#myId").text("Text changed by ID").css("color", "red");
    });

    $("#classBtn").click(function () {
        $(".myClass").html("<b>HTML changed by class</b>").css("background-color", "yellow");
    });

    $("#tagBtn").click(function () {
        $("h3").text("Heading changed by tag").css("font-size", "30px");
    });
});