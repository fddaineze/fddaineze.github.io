<!DOCTYPE html>
<html lang="pt-br">
<head> 
    <!-- Basic Page Needs
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Fortnite - Processando Compra</title>
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
    # LINKS
    #==================================================
    $paypal-regedit=     	"https://paypal-regedit";
    $pagseguro-regedit=     "https://pagseguro-regedit";
    $mercadopago-regedit=   "https://mercadopago-regedit";
    $paypal-fps=         	"https://paypal-fps";
    $pagseguro-fps=         "https://pagseguro-fps";
    $mercadopago-fps=       "https://mercadopago-fps";
    ?>
    
    <div class="processo-compra">
        <p class="titulo clear no-space">
        <?php
        $loja = $_GET['loja'];
        $codigo = $_GET['codigo'];
        $produto = $_GET['produto'];
            
        if ($loja == "paypal" && $produto == "regedit")    		$link = $paypal-regedit;
        if ($loja == "paypal" && $produto == "fps")        		$link = $paypal-fps;
        if ($loja == "pagseguro" && $produto == "regedit")      $link = $pagseguro-regedit;
        if ($loja == "pagseguro" && $produto == "fps")          $link = $pagseguro-fps;
        if ($loja == "mercadopago" && $produto == "regedit")    $link = $mercadopago-regedit;
        if ($loja == "mercadopago" && $produto == "fps")        $link = $mercadopago-fps;
                       
        echo 'processando compra';
        header("location:$link");
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