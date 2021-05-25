<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WHILE / DO WHILE</title>
    <style>
    #class{
        height: 70vh;
        background-position: center;
        background-size: cover; 
    }
    </style>
</head>
<body>
    <h1>WHILE / DO WHILE</h1>
    <button id="clickMe">Click ME</button>

    <div id="class">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 1920 1080" onclick="show()">
        <g id="Component_76_3" data-name="Component 76 – 209" transform="translate(1471 407)" data-type ="0" opacity="0.4">
            <circle id="Ellipse_282-2" data-name="Ellipse 282" cx="27.5" cy="27.5" r="27.5" fill="#166fdd" opacity="0.206"/>
            <circle id="Ellipse_283-2" data-name="Ellipse 283" cx="17.5" cy="17.5" r="17.5" transform="translate(10 10)" fill="#166fdd"/>
        </g>
    </svg></div>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
    <script>
        var i=0;
        var translateX = [702,1816,1447,1447,1447];
        var translateY = [563, 387,403,503,773];
        var bgimage =["6","7","8","9"];

        function show(){
                $("#Component_76_3").attr("transform", `translate(${translateX[i]},${translateY[i]})`);
                $("#class").css('background-image',`url("./folde/screen${bgimage[i]}.png")`);
                i+=1;
        };
        
    </script>
    
    
</body>
</html>