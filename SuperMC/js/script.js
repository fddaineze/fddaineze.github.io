$(document).ready(function () {
    
    /*  Efeito de rolagem e fechamento do menu ao clicar
    --------------------------------------------- */
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
        /* Fecha o nav mobile ao clique */
        if($('.navbar-toggle').css('display') !='none'){
            $('.navbar-toggle').trigger( "click" );
        }
        
        /* Navega suavemente até o link */
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;

		$('html, body').animate({
			scrollTop: targetOffset
		}, 500);
	});
    
});