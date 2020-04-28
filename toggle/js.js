/*** COLOR CHANGER ***/
$("#color-toggle").on("click", function () {
    var e = this.io ^= 1;
    $("#color-palate").animate({
        right: e ? 0 : -155
    }, "slow");
});


$('#toggle-launcher').on('click', function () {
    $('.nav-launcher').show();
    $('.nav-tile').hide();
});

$('#toggle-tile').on('click', function () {
    $('.nav-tile').show();
    $('.nav-launcher').hide();
});

$('#toggle-launcher').trigger('click');


/*BRIGHT ACCENT CSS*/
$("#bright-green").on("click", function () {
    $("#switch_style").attr("href", "css/color_styles/green.css");
});
$("#bright-blue").on("click", function () {
    $("#switch_style").attr("href", "css/color_styles/blue.css");
});
$("#bright-orange").on("click", function () {
    $("#switch_style").attr("href", "css/color_styles/orange.css");
});
$("#bright-pink").on("click", function () {
    $("#switch_style").attr("href", "css/color_styles/pink.css");
});
$("#bright-purple").on("click", function () {
    $("#switch_style").attr("href", "css/color_styles/purple.css");
});
$("#bright-red").on("click", function () {
    $("#switch_style").attr("href", "css/color_styles/red.css");
});


