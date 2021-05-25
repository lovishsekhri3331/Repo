<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standard PHP primer - String Mani</title>
</head>
<body>
    <h1>STRING MANIPULATION</h1>
    <?php 
        $var1 = "Hey my name is Lovish";
        $var2 = "and what is you name?";
        echo   $var1 .' '. $var2;
        echo  "</br>";
        echo  "</hr>";
        echo "FIRST LETTER UPPER CASE : " . ucfirst($var2);
        echo  "</br>";
        echo  "</hr>";
        echo " ALL letter to upper case : ". strtoupper($var1);
        echo  "</br>";
        echo  "</hr>";
        echo " ALL THE Letters in lower caser : ".strtolower($var1).'</br></hr>' ;
        echo " repeat string :".strtoupper(str_repeat("L", 17)) .'</br></hr>';
        echo "get a substring:".strtoupper(substr($var1,5,13))."</br>";
        echo " find postion: " .strpos($var1, "L")."</br>";
        echo "find character: " .strchr($var1, "y ")."</br>";
    ?>
    
</body>
</html>