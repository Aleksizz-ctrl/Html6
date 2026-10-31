$(document).ready(function () {

    function reset() {
        $("#box").stop(true).css({
            width: "100px",
            height: "100px",
            left: "0px",
            top: "0px",
            opacity: 1
        });
    }

    $("#basicBtn").click(function () {
        reset();
        $("#box").animate({
            width: "150px",
            height: "150px",
            left: "200px"
        }, 1000);
    });

    $("#seqBtn").click(function () {
        reset();
        $("#box")
            .animate({ left: "300px" }, 800)
            .animate({ top: "100px" }, 800)
            .animate({ width: "50px", height: "50px" }, 800)
            .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 800);
    });

    $("#combBtn").click(function () {
        reset();
        $("#box").animate({
            opacity: 0.4,
            width: "150px",
            height: "150px",
            left: "250px",
            top: "50px"
        }, 1500);
    });

    $("#resetBtn").click(reset);

});