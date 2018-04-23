$(document).ready(function () {
    
    /*  Efeito de rolagem e fechamento do menu ao clicar
    --------------------------------------------- */
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
        /* Fecha o nav mobile ao clique */
        if ($('.navbar-toggle').css('display') != 'none'){
            $('.navbar-toggle').trigger( "click" );
        }
        
        /* Navega suavemente até o link */
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;

		$('html, body').animate({
			scrollTop: targetOffset
		}, 500);
	});
    
    /*  Mostral / Ocultar opções de compras
    --------------------------------------------- */
    $("a[rel=compra]").click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("data-compra");
     
        //colocando o fundo preto
        $('.mascara').show();
 
        //posicionando modal
        var left = 0 //($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $(".mascara").click( function(){
        $(this).hide();
        $(".modal_compra").hide();
    });
 
    $('.prod-close').click( function(){
        $(".mascara").hide();
        $(".modal_compra").hide();
    });
    
});