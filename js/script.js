$(document).ready(function () {
    $('.page-load').addClass('effect');
    $('.page-loaded').removeClass('effect');
    var atual = '#home';
    $(atual+'-nav').addClass('active');
    
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
        $(atual+'-nav').removeClass('active');
        
        atual = id;
        $('.full-size'+atual).removeClass('achatado');
        $(atual+'-nav').addClass('active');
        
        $('html, body').scrollTop(0);
    });
});