$(document).ready(function () {
    // $target: variável que contem a classe do div ao qual o scroll é limitado.
    var $target = $('#home');
    
    // as classes effect-back e effect-color são responsaveis 
    // por animar a entrada do site ao ser carregado
    $('body').removeClass('effect-back');
    $('.content').removeClass('effect-color');
    
    // esse evento apenas cria um scroll suave ao utilizar o menu
	$('a[href^="#"]').on('click', function (e) {
        // primeiro interrompe o evento original
		e.preventDefault();
        // salva a posição do item de destino
        var id = $(this).attr('href');
        if (id=="#") id = "#home";
		var targetOffset = $(id).offset().top;
        // atualizo também o target para que ele limite somente a nova área
        $target = $(id);
        // e cria uma animação até ele
		$('html, body').animate({
			scrollTop: targetOffset
		}, 500);
	});
 
    $(document).scroll(function() {
        // offset é o valor do tamanho da tela
        // documentTop vai pegar a distância do total do scroll e o topo da página. Isso em relação ao $(document).
        // documentBot vai pegar esse valor e adicionar a altura da janela
        var offset      = $(window).height(),
            documentTop = $(document).scrollTop(),
            documentBot = $(document).scrollTop() + offset;
        
        $target.each(function() {
            var testtop = $(this).offset().top; // Topo do elemento
            var testbot = testtop + $(this).height(); // Base do elemento
            
            if (documentTop > testtop) {
                if (documentBot > testbot) {
                    // SCROLL ABAIXO DO PERMITIDO - posiciona a tela ao "final do div" - "altura da tela"
                    $('html, body').animate({
                        scrollTop: testbot-offset
                    }, 0);
                }
            } else {
                // SCROLL ACIMA DO PERMITIDO - posiciona a tela ao "começo do div"
                $('html, body').animate({
                    scrollTop: testtop
                }, 0);
            }
        });
    });

});
