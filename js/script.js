$(function () {
    $("#navbar-toggler").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            $("#navbarNav").collapse('hide');
        }
    });

    $("#navbar-toggler").click(function (event) {
        $(event.target).focus();
      });
});