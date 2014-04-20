<?php 

$autor = $_POST["autor"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

$respuesta = "";

if(mail("iluzbel@hotmail.com",$mensaje,$asunto,$autor))
 $respuesta = $autor." tu mensaje ha sido enviado!";
else
 $respuesta = "Ha habido un problema, el mensaje no se ha podido enviar.";


echo $respuesta; 

?>		