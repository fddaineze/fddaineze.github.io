<!DOCTYPE html>
<html lang="pt-br"> 

<head> 
    <!-- Basic Page Needs window.location.replace("http://pt.stackoverflow.com");
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Fortnite - Processando Conta</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="icon" type="image/png" href="img/favicon.jpg">
    <style>body, html{margin:0;padding:0;}</style>
</head>

<body>
    <?php 
    #==================================================
    # CUPONS ATIVOS
    #==================================================
    $cupons = array(
        "zeus", 
        "cavaleiro", 
        "fortloja", 
        "jimmy"
    ); 
    
    #==================================================
    # LINKS
    #==================================================
    $pagseguro-regedit:     "https://pagseguro-regedit";
    $mercadopago-regedit:   "https://mercadopago-regedit";
    $pagseguro-fps:         "https://pagseguro-fps";
    $mercadopago-fps:       "https://mercadopago-fps";
    ?>
   
    <div class="processo-compra">
        <p class="titulo clear no-space">
        
        <?php
        $loja = $_GET['loja'];
        $codigo = $_GET['codigo'];
        $produto = $_GET['produto'];
            
        if ($loja == "pagseguro" && $produto == "4 contas Alt")     echo 'VAIKR4I<br> 4 CONTAS PELO PS!<br>';
        if ($loja == "pagseguro" && $produto == "Full Acesso")      echo 'VAIKRAI<br> FULL ACESSO PELO PS!<br>';
        if ($loja == "mercadopago" && $produto == "4 contas Alt")   echo 'VAIKR4I<br> 4 CONTAS PELO MP!<br>';
        if ($loja == "mercadopago" && $produto == "Full Acesso")    echo 'VAIKRAI<br> FULL ACESSO PELO MP!<br>';
           
        if($codigo != "") {
            if (in_array($codigo, $cupons)) { 
                echo "Desconto Aprovado!<br>";
            } else {
                echo "Cupom inválido<br>";
            }
        }
            
        echo 'processando compra';
            
        #abaixo, criamos uma variavel que terá como conteúdo o endereço para onde haverá o redirecionamento:  
        $redirect = "&exemplo=";

        #abaixo, chamamos a função header() com o atributo location: apontando para a variavel $redirect, que por 
        #sua vez aponta para o endereço de onde ocorrerá o redirecionamento
        #header("location:$redirect");
        
        ?>
        
        </p>
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    
</body> 

</html>