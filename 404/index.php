<?php
header('HTTP/1.0 404 Not Found', true, 404);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link href="../style/Reset.css" rel="stylesheet" />
        <link href="./index.css" rel="stylesheet" />
        <link href="./bread.css" rel="stylesheet" />
    </head>
    <body>
        <section id="section_bread">
            <ul>
                <li><a href="../index.html">Главная</a></li>
                <li>404</li>
            </ul>
        </section>
        <section id="error">
            <span>Error</span>
            <span>404</span>
        </section>
    </body>
</html>
