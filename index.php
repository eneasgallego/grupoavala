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
	content="empeño de coches, empeños de coches, empeñar el coche, empeño de vehiculos, dinero por mi coche"
	name="keywords">

<meta content="all" name="Robots">
<meta content="avalacontucoche" name="Author">
<meta content="Spanish" name="Language">

<title>Venta de Coches y vehículos</title>

	<?php include "misc.php"; ?>
	
</head>

<body class="body">
	<?php $menu_current = "inicio"; include "cabecera2.php"; ?>

	<div id="cuerpo" class="global-content">
		<div class="global-content columnas">
			<div class="columna">
				<div class="izq">
					<div class="container-pop-up">
						<div class="new-pop-up">
							<ul>
								<li>
									<a class="texto_rojo_hover" href="#">
										pulse aqui y le llamamos
										<img src="images/clicktocall.png">
									</a>
								</li>
								<li>
									<iframe height="64px"
										src="http://www.panelcliente.net/c2c/simple.php?id=48&amp;memberid=10060"></iframe>
								</li>
						</div>
					</div>
                    <div id="inicio-carrusel">
                        <ul>
                            <li class="view">
                                <img src="images/carrusel/carrusel1.jpg" alt="carrusel1"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel2.jpg" alt="carrusel2"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel3.jpg" alt="carrusel3"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel4.jpg" alt="carrusel4"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel5.jpg" alt="carrusel5"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel6.jpg" alt="carrusel6"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel7.jpg" alt="carrusel7"/>
                            </li>
                            <li>
                                <img src="images/carrusel/carrusel8.jpg" alt="carrusel8"/>
                            </li>
                        </ul>
                    </div>
				</div>
                <div id="inicio-financiacion" class="cartel">
                    <div class="cartel-borde"></div>
                    <div class="cartel-text">Financiación 100x100</div>
                    <div class="cartel-borde"></div>
                </div>
			</div>
			<div class="columna">
				<div class="der">
					<ul class="new-links">
						<li>
							<a href="http://www.youtube.com/watch?v=udWjDRuOzgU" target="_blank"
								class="link-youtube"><img src="./images/youtube.jpg"></a>
						</li>
						<li>
							<ul>
								<li><img src="images/santander.jpg"/></li>
								<li><img src="images/40principales.png"/></li>
								<li><img src="images/milanuncios.png"/></li>
								<li><img src="images/securitas.png"/></li>
								<li><img src="images/race.jpg"/></li>
							</ul>
						</li>
					</ul>
					<div id="inicio-textotexto" class="texto-bloque ">
						En el
						<bold>G.E. AVALA</bold>
						nos dedicamos a la compra-venta de coches de forma seria,
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
				</div>
			</div>
		</div>
        <div id="inicio-der-stock" class="stock">
            CONSULTE NUESTRO
            <bold>STOCK DE VEHÍCULOS</bold>
            <div id="inicio-der-stock-iconos" class="iconos stock-iconos">
                <div class="separador iconos-border-top"></div>
                <div class="icono" style="width: 20%">
                    <a href="https://www.coches.net/concesionario/avalamotor/" target="_blank" rel="nofollow"><img
                                src="./images/cochesnet.png"></a>
                </div>
                <div class="icono" style="width: 20%">
                    <a
                            href="https://www.autoscout24.es/profesionales/grupo-empresarial-avala/vehiculos"
                            target="_blank" rel="nofollow"><img src="./images/autoscout.png"></a>
                </div>
                <div class="icono" style="width: 20%">
                    <a
                            href="https://www.milanuncios.com/tienda/avala-motor-28950.htm"
                            target="_blank" rel="nofollow"><img src="./images/milanuncios.png"></a>
                </div>
                <div class="icono" style="width: 20%">
                    <a
                            href="https://www.vibbo.com/tienda/?ca=28_s&id=38741"
                            target="_blank" rel="nofollow"><img src="./images/vibbo.svg"></a>
                </div>
                <div class="icono" style="width: 20%">
                    <a
                            href="https://www.autocasion.com/profesional/avala-motor-1573276"
                            target="_blank" rel="nofollow"><img src="./images/autocasion.png"></a>
                </div>
            </div>
        </div>
	</div>
	
	<?php $noPopUp=true; include "pie.php"; ?>
	
</body>

</html>
<?php
	}
?>
