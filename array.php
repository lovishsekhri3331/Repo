<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standard PHP primer - array</title>
</head>
<body>
    <h1>ARRAY</h1>
    <?php 
        $var = array(1,2,3,4,5,6,7,8,88,212,5,3,5423,23,4,23,45,23,542,35);
        $size = count($var);
        echo "<h1>$size</h1>";

        for($count= 0;$count<$size;$count++){
            echo "$var[$count]";
        }
    ?>
    
</body>
</html>