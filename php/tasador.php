<?php
	require "config.php";
	require "funciones.php";

	$nombre = $_POST['nombre'];
	$provincia = $_POST['provincia'];
	$telefono = $_POST['telefono'];
	$marca = $_POST['marca'];
	$modelo = $_POST['modelo'];
	$km = $_POST['km'];
	$cv = $_POST['cv'];
	$ano = $_POST['ano'];
	$combustible = $_POST['combustible'];
	$cilindrada = $_POST['cilindrada'];
	$importe = $_POST['importe'];
	$correo = $_POST['correo'];
	$mensaje = $_POST['mensaje'];
	$origen = $_POST['origen'];
	
	$resultBD = false;
	try
	{
		$connect = mysql_connect($config_host, $config_username, $config_password);
		mysql_select_db($config_database, $connect);
		
		$sql = "insert into tasador (nombre, provincia, telefono, marca, modelo, km, cv, ano, combustible, cilindrada, importe, correo, mensaje, origen)
							 values ('$nombre', '$provincia', '$telefono', '$marca', '$modelo', '$km', '$cv', '$ano', '$combustible', '$cilindrada', '$importe', '$correo', '$mensaje', '$origen');";
		//echo $sql;
		mysql_query($sql, $connect);
	}
	catch (Exception $e) 
	{
		$resultBD = true;
	}

	$text = crearMensajeTasador($nombre, $provincia, $telefono, $marca, $modelo, $km, $cv, $ano, $combustible, $cilindrada, $importe, $correo, $mensaje, $origen);
	$resultMailAvala = !enviarMail($emailAvala, $correo, $emailAvalaText, $text);
	
	$text = crearMensajeVuelta();
	$resultMailCliente = !enviarMail($correo, $emailAvalaText, $emailAvalaText, $text);
	
/* 	if ($resultBD)
	{
		$resultBD = $resultBD ? "true" : "false";
	}
	if ($resultMailAvala)
	{
		$resultMailAvala = "true";
	}
	if ($resultMailCliente)
	{
		$resultMailCliente = "true";
	}
 */		$resultBD = $resultBD ? "true" : "false";
		$resultMailAvala = $resultMailAvala ? "true" : "false";
		$resultMailCliente = $resultMailCliente ? "true" : "false";
	
	echo "{bd: $resultBD,mailAvala: $resultMailAvala,mailCliente: $resultMailCliente}";
?>