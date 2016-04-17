<?php
	$emailAvala = "grupoavalaonline@gmail.com";
	$emailAvalaText = "Petición de tasación";

	function enviarMail($para, $desde, $titulo, $mensaje)
	{
		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$cabeceras .= "From: $desde\r\n";

		return mail($para, $desde, $mensaje, $cabeceras);
		//return mail($para, $desde, "aaaaaaaaaaaaaaaaa", $cabeceras);
	}
	
	function crearMensajeTasador($nombre, $provincia, $telefono, $marca, $modelo, $km, $cv, $ano, $combustible, $cilindrada, $importe, $correo, $mensaje, $origen)
	{
		$mensaje = '
			<html>
			<head>
			  <title>Tasador</title>
			</head>
			<body>
				<p>	
					Mensaje Tasación de Avala con tu coche:<br/>
					<br/>
					Nombre: '.$nombre.'<br/>
					Teléfono: '.$telefono.'<br/>
					eMail: '.$correo.'<br/>
					Provincia: '.$provincia.'<br/>
					Marca: '.$marca.'<br/>
					Año: '.$ano.'<br/>
					Modelo: '.$modelo.'<br/>
					Combustible: '.$combustible.'<br/>
					Km: '.$km.'<br/>
					CV: '.$cv.'<br/>
					Cilindrada: '.$cilindrada.'<br/>
					Importe: '.$importe.'<br/>
					Mensaje: '.$mensaje.'<br/>
					Origen: '.$origen.'
				</p>
			</body>
			</html>
		';
		
		return $mensaje;
	}
	
	function crearMensajeVuelta()
	{
		$mensaje = '
			<html>
			<head>
			  <title>Tasador</title>
			</head>
			<body>
				<div width="100%" style="background-color:rgb(2,69,134);padding:5px;"><img src="grupoavala.com/images/logo.png" /></div>
				<p>	
					¡Enhorabuena! Su petición ha llegado con éxito. Nos pondremos en contacto con usted en la mayor brevedad posible.
				</p>
				<p>	
					Está usted contactando con la ÚNICA empresa que se empeña por ti.
				</p>
				<p>	
					No empeñes tu coche, ¡AVÁLALO!.
				</p>
				<p>	
					El cliente siempre gana.
				</p>
				<p>	
					SIN RIESGOS.
				</p>
			</body>
			</html>
		';
		
		return $mensaje;
	}
	
	function crearMensajeContacto($nombre, $telefono, $correo, $mensaje)
	{
		$mensaje = '
			<html>
			<head>
			  <title>Contacto</title>
			</head>
			<body>
				<p>	
					Mensaje Contacto de Avala con tu coche:<br/>
					<br/>
					Nombre: '.$nombre.'<br/>
					Teléfono: '.$telefono.'<br/>
					eMail: '.$correo.'<br/>
					Mensaje: '.$mensaje.'<br/>
				</p>
			</body>
			</html>
		';
		
		return $mensaje;
	}
?>