$(document).ready(function () {
    $('.page-load').addClass('effect');
    $('.page-loaded').removeClass('effect');
    var atual = '#home';
    
    $('.navbar-collapse a[href^="#"]').on('click', function (e) {
        setTimeout(function () {
            if ($('.navbar-toggle').css('display') != 'none') $('.navbar-toggle').trigger("click");
        }, 1000);
    });
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        if (id == "#") id = "#home";
        $('.full-size'+atual).addClass('achatado');
        atual = id;
        $('.full-size'+id).removeClass('achatado');
        $('html, body').scrollTop(0);
    });
});