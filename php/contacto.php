<?php
	require "config.php";
	require "funciones.php";

	$nombre = $_POST['nombre'];
	$telefono = $_POST['telefono'];
	$correo = $_POST['correo'];
	$mensaje = $_POST['mensaje'];
	
	$resultBD = false;
	try
	{
		$connect = mysql_connect($config_host, $config_username, $config_password);
		mysql_select_db($config_database, $connect);
		
		$sql = "insert into contacto (nombre, telefono, correo, mensaje)
							 values ('$nombre', '$telefono', '$correo', '$mensaje');";
		//echo $sql;
		mysql_query($sql, $connect);
	}
	catch (Exception $e) 
	{
		$resultBD = true;
	}

	$text = crearMensajeContacto($nombre, $telefono, $correo, $mensaje);
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