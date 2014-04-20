<?php 

$autor = $_POST["autor"];
$asunto = $_POST["asunto"];
$emailRespuesta = $_POST["emailRespuesta"];
$mensaje = $_POST["mensaje"];

$respuesta = "";

if(mail("iluzbel@hotmail.com",$asunto,$mensaje,$autor." email:".$emailRespuesta))
 $respuesta = $autor." tu mensaje ha sido enviado!";
else
 $respuesta = "Ha habido un problema, el mensaje no se ha podido enviar.";


echo $respuesta; 

?>		