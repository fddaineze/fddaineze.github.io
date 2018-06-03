$(document).ready(function () {
    $('.page-load').addClass('effect');
    $('.page-loaded').removeClass('effect');
    var atual = '#home';
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('.full-size'+atual).addClass('achatado');
        atual = id;
        $('.full-size'+id).removeClass('achatado');
        $('html, body').scrollTop(0);
    });
});