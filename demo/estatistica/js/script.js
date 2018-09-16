$(document).ready(function () {
    
    // ------------------------------------------
    //  Funções de Menu
    // ------------------------------------------
    
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    
    // ------------------------------------------
    //  Funções de Entrada
    // ------------------------------------------
    
    //  Dados Brutos - Processar
    // ***********************************
    function processarDados() {
        var dados = [], erros = [], valor;
        for (var i = 1; i <= numEntradas; i++) {
            valor = document.getElementById('data-' + i).value;
            if(valor=="") { 
                dados.push(0); 
            } else {
                if(isNaN(valor)){
                    erros.push('<span class="erro">"' + valor + '" não é uma entrada válida</span><br>');
                } else {
                    dados.push(valor); 
                }
            }  
        }
        
        dados.sort();
        const object = document.querySelector('[data-rol]');
        object.innerHTML= 'ROL: ';
        for (var i = 0; i < dados.length; i++) {
            if(i != 0 ) { object.innerHTML+=' - ' }
            object.innerHTML+=dados[i];
        }
        
        const objecterro = document.querySelector('[data-entrada-error]');
        objecterro.innerHTML= '<span class="correto">Nenhum erro até agora :)</span>';
        if(erros!="") {
            objecterro.innerHTML= "";
            for (var i = 0; i < erros.length; i++) {
                objecterro.innerHTML+=erros[i];
            }
        }
    }
    
    //  Dados Brutos - Atualizar contador
    // ***********************************
    function attEntrada() {
        const object = document.querySelector('[data-entrada]');
        object.innerHTML = numEntradas;
        processarDados();
    }
        
    //  Dados Brutos - Adicionar campo
    // ***********************************
    function boxAddEntrada() {
        if(numEntradas == 0) {
            numEntradas++;
            const object = document.querySelector('[data-entrada-box]');
            object.innerHTML= '<input type="text" class="campo" id="data-' + numEntradas + '">';
        } else {
            var temp = numEntradas + 1;
            const object = document.getElementById('data-' + numEntradas);
            $('#data-' + numEntradas).after('<input type="text" class="campo" id="data-' + temp + '">');
            numEntradas++;
        }
        attEntrada();
    }
    
    //  Dados Brutos - Remover campo
    // ***********************************
    function boxRemEntrada() {
        if(numEntradas > 1) {
            document.getElementById('data-' + numEntradas).remove();
            numEntradas--;
            attEntrada();
        }
    }
    
    //  Dados Brutos - Limpar campo
    // ***********************************
    function resetEntrada() {
        numEntradas = 1;
        const object = document.querySelector('[data-entrada-box]');
        object.innerHTML= '<input type="text" class="campo" id="data-' + numEntradas + '">';
        attEntrada();
    }
    
    //  Dados Brutos - Criar entrada
    // ***********************************
    function simuleEntrada() {
        resetEntrada();
        var x;
        for (var i = 1; i < 10; i++) {
            x = Math.floor((Math.random() * 30) + 21);
            document.getElementById('data-' + i).value=x;
            boxAddEntrada();      
        }
        x = Math.floor((Math.random() * 30) + 21);
        document.getElementById('data-10').value=x;
        attEntrada();
    }
    
    var numEntradas = 0;
    boxAddEntrada();
        
    // ------------------------------------------
    //  Funções de Clique
    // ------------------------------------------
    
    // Links
    // ------------------------------------------
    $('#reset-entrada').on('click', function (e) { 
        e.preventDefault();
        resetEntrada(); 
    });
    
    $('#simule-entrada').on('click', function (e) {
        e.preventDefault(); 
        simuleEntrada(); 
    });
    
    // Botoes
    // ------------------------------------------
    $('#data-add-entrada').on('click', function () { boxAddEntrada(); });
    
    $('#data-rem-entrada').on('click', function () { boxRemEntrada(); });
    
    $('#reset-entrada-2').on('click', function () { resetEntrada(); });
        
    $('#processar-dados').on('click', function () { processarDados(); });
    
    $('#content').on('change', '.campo', function() { processarDados(); });
    
});
