<?php include('Mobile-Detect/Mobile_Detect.php'); 
     $detect = new Mobile_Detect(); //redireccionar a versión móvil si nos visitan desde un móvil o tablet 
	if (false || $detect->isMobile() || $detect->isTablet()) { 
	   include("movil.html"); 
	} else {
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta content="Empeños de coches, Dinero Coche, Aval Coche" name="title">
<meta
	content="Servicios de Empeños de coches. Dinero por tu coche sin dejar el vehículo con hasta el 80% de tasación: Reciba dinero por coche particular o de empresa de forma rápida y sencilla con la mejor tasación."
	name="description">
<meta
	content="empeño de coches, empeños de coches, empeñar mi coche, avala con tu coche, avalar con mi coche, dinero por mi coche, empeños coches, empeño coche"
	name="keywords">

<meta content="all" name="Robots">
<meta content="avalacontucoche" name="Author">
<meta content="Spanish" name="Language">

<title>Grupo Avala - Empeño de Coches - Dinero en menos de 24hs
	- Tu coche te avala</title>

	<?php include "misc.php"; ?>
	
</head>

<body class="body">
	<?php $menu_current = "inicio"; include "cabecera.php"; ?>

	<div id="cuerpo" class="global-content">
		<div class="global-content columnas">
			<div class="columna">
				<div class="izq">
					<div id="inicio-visor" class="panel-visor">
						<div id="inicio-visor-visor" class="visor">
							<img id="inicio-visor-visor-first" src=""
								class="visor-first visor-image">
						</div>
						<div id="inicio-visor-index" class="visor-index">
								<div class="visor-bar" style="width: 100%;"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="columna">
				<div class="der">
					<div id="tasador-inicio">
						<div id="tasador-inicio-cartel" class="cartel oscuro">
							<div id="tasador-inicio-cartel-borde1" class="cartel-borde"></div>
							<div id="tasador-inicio-cartel-text0" class="cartel-text"
								style="top: 4px; ">La 1º empresa de españa
								que se empeña por ti.</div>
							<div id="tasador-inicio-cartel-text1" class="cartel-text"
								style="top: 4px; display: none;">No empeñes tu coche,
								avalalo.</div>
							<div id="tasador-inicio-cartel-text2" class="cartel-text"
								style="top: 4px; display: none;">El cliente siempre gana.</div>
							<div id="tasador-inicio-cartel-borde2" class="cartel-borde"
								style="top: 35px"></div>
						</div>
						
						<?php include "tasador2.php"; ?>
						
					</div>
				</div>
			</div>
		</div>
		<div id="iconos-inicio" class="iconos global-content">
			<div class="icono" style="width: 25%">
				<img src="./images/icono_empenar.png" style="cursor: pointer;">
			</div>
			<div class="icono" style="width: 25%">
				<img src="./images/icono_gestion.png" style="cursor: pointer;">
			</div>
			<div class="icono" style="width: 25%">
				<img src="./images/icono_vender.png" style="cursor: pointer;">
			</div>
			<div class="icono" style="width: 25%">
				<img src="./images/icono_seguro.png" style="cursor: pointer;">
			</div>
			<div class="separador iconos-border-bottom"></div>
		</div>
		<div class="global-content columnas">
			<div class="columna">
				<div class="izq">
					<div id="inicio-texto" class="container">
						<div id="inicio-textotexto" class="texto-bloque ">
							En el
							<bold>G.E. AVALA</bold>
							nos dedicamos al empeño y compra-venta de coches de forma seria,
							rápida y práctica. Contamos con toda la experiencia e
							infraestructura necesarias para generar la confianza y seguridad
							que nuestros clientes necesitan.<br>Tenemos opciones de
							empeño tanto para empresas como para particulares, y con nosotros
							podrá obtener dinero urgente por su coche, empeñar su vehículo en
							<bold>menos de 24 horas</bold>
							incluso mientras sigue circulando con él, o simplemente vender su
							coche de manera rápida y efectiva, siempre teniendo la seguridad
							de que recibirá dinero urgente.<br>
							<bold>Somos los creadores del primer empeño de coches en
							el que el cliente siempre gana.</bold>
							<br>Disponemos de distintas modalidades de empeño entre las
							que podrá elegir, para adecuar a sus necesidades el tipo de
							empeño que más le convenga:<br>
							<bold>-Empeño de coches,</bold>
							motos o cualquier vehículo por el que desee conseguir dinero
							urgente: Dispondrá de su dinero en
							<bold>menos de 24 horas</bold>
							de forma sencilla y efectiva.<br>-
							<bold>Compramos coches:</bold>
							Nosotros nos ocupamos de todas las gestiones para que usted no
							tenga que preocuparse por nada y pueda sacarle el mayor partido a
							la venta de su coche.<br>
							<br>Si desea empeñar o vender su coche o vehículo y quiere
							información sobre cómo puede hacerlo, no dude en ponerse en
							contacto con nosotros tanto si es empresa como si es particular.<br>Utilice
							nuestra herramienta de tasación online sin compromiso o póngase
							en contacto con nosotros en nuestro teléfono gratuito y
							<bold>consiga dinero hoy mismo.</bold>
							<br>Solicite información relacionada con el empeño de coche
							o moto con cargas, deuda o embargo.<br>Incluso si el titular
							tiene algún tipo de carga o embargo, o se encuentra en los
							listados del
							<bold>ASNEF</bold>
							o el
							<bold>RAI</bold>
							podrá seguir empeñando su coche con nosotros.
						</div>
						<div id="inicio-texto-iconos" class="iconos partners">
							<div class="icono" style="width: 20%">
								<img src="./images/santander.jpg">
							</div>
							<div class="icono" style="width: 20%">
								<img src="./images/40principales.png">
							</div>
							<div class="icono" style="width: 20%">
								<img src="./images/milanuncios.png">
							</div>
							<div class="icono" style="width: 20%">
								<img src="./images/securitas.png">
							</div>
							<div class="icono" style="width: 20%">
								<img src="./images/race.jpg">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="columna">
				<div class="der">
					<div id="inicio-der" class="container">
						<div id="inicio-dercartel" class="cartel claro"
							style="margin-top: 10px;">
							<div id="inicio-dercartel-borde1" class="cartel-borde"></div>
							<div id="inicio-dercartel-text0" class="cartel-text"
								style="top: 4px">Somos los más económicos de España. Desde
								90€.</div>
							<div id="inicio-dercartel-borde2" class="cartel-borde"
								style="top: 35px"></div>
						</div>
						<a href="http://www.youtube.com/watch?v=udWjDRuOzgU" target="_blank"
							class="link-youtube"><img src="./images/youtube.jpg"></a>
						<div id="inicio-der-telemadrid" class="logo_telemadrid">
							<img src="./images/telemadrid.png">
						</div>
						<div id="inicio-der-texto" class="texto-bloque ">
							Reportaje de las noticias de
							<bold>Telemadrid</bold>
							con el fundador del
							<bold>G.E. Avala</bold>
							en el que explica la nueva modalidad de empeño en la que
							<bold>el cliente siempre gana.</bold>
							El
							<bold>G.E. Avala</bold>
							se desmarca del resto de compañías reinventando el empeño de
							coches.
						</div>
						<div id="inicio-der-stock" class="stock">
							CONSULTE NUESTRO
							<bold>STOCK DE VEHÍCULOS</bold>
							<div id="inicio-der-stock-iconos" class="iconos stock-iconos">
								<div class="separador iconos-border-top"></div>
								<div class="icono" style="width: 33.333333333333336%">
									<a href="http://autoexclusivo.coches.net/" target="_blank"><img
										src="./images/cochesnet.png"></a>
								</div>
								<div class="icono" style="width: 33.333333333333336%">
									<a
										href="http://profesionales.autoscout24.es/el-taller-de-autoexclusivo/vehiculos#atype=C&amp;cid=14598&amp;ustate=U,N,A&amp;sort=price&amp;results=20&amp;page=1"
										target="_blank"><img src="./images/autoscout.png"></a>
								</div>
								<div class="icono" style="width: 33.333333333333336%">
									<a
										href="http://www.segundamano.es/madrid/tiendas/?ca=28_s&amp;id=8072"
										target="_blank"><img src="./images/segundamano.png"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="iconos-pie-inicio" class="iconos global-content">
			<div class="separador iconos-border-top"></div>
			<div class="icono" style="width: 33.333333333333336%">
				<img src="./images/fotoPie4.jpg">
			</div>
			<div class="icono" style="width: 33.333333333333336%">
				<img src="./images/fotoPie2.jpg">
			</div>
			<div class="icono" style="width: 33.333333333333336%">
				<img src="./images/fotoPie3.jpg">
			</div>
		</div>
	</div>
	
	<?php include "pie.php"; ?>
	
</body>

<?php include "misc2.php"; ?>

</html>
<?php
	}
?>
