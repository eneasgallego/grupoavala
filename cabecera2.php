<div  id="new-cabecera-cover" class="global-content">
	<div id="new-cabecera">
		<div id="new-cabecera-telefonos" >
			<img src="images/logo.png">
			<ul id="new-cabecera-movil">
				<li><a href="tel: +34900901085">900 901 085</a></li>
				<li class="icono-whatsapp"><a href="tel: +34645521298">645 521 298</a></li><!--<img src="./images/icono_whatsapp.png">-->
				<!--<li><a href="tel: +34910327673">910 327 673</a></li>-->
			</ul>
		</div>
		<div class="cabecera-picture">
			<img src="images/image2.png"/>
		</div>
		<div id="new-tasador" >
			<div id="new-cabecera-redes">
				<a href="http://www.facebook.com/grupo.avala" target="_blank"
					class="boton-red-social"><img src="./images/facebook.png"></a><a
					href="http://twitter.com/GrupoAvala" target="_blank"
					class="boton-red-social"><img src="./images/bp_twitter.png"></a><a
					href="http://www.google.com" target="_blank"
					class="boton-red-social"><img src="./images/bp_google.png"></a><a
					href="http://www.rss.com" target="_blank" class="boton-red-social"><img
					src="./images/bp_rss.png"></a>
			</div>
			<?php include "tasador2.php"; ?>
		</div>
	</div>
</div>



<div id="menu" class="global-content">
	<div id="menu-item-inicio" class="menu-item <?php echo $menu_current == "inicio" ? "menu-current" : ""; ?>" style="margin-left: 50px;">
		<?php echo $menu_current != "inicio" ? '<a href="index.php">' : ""; ?>INICIO<?php echo $menu_current != "inicio" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-como" class="menu-item" <?php echo $menu_current == "como" ? "menu-current" : ""; ?>>
		<?php echo $menu_current != "como" ? '<a href="como.php">' : ""; ?>CÓMO FUNCIONAMOS<?php echo $menu_current != "como" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-opciones" class="menu-item <?php echo $menu_current == "opciones" ? "menu-current" : ""; ?>">
		<?php echo $menu_current != "opciones" ? '<a href="opciones.php">' : ""; ?>OPCIONES DE CONTRATO<?php echo $menu_current != "opciones" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-gestion" class="menu-item <?php echo $menu_current == "gestion" ? "menu-current" : ""; ?>">
		<?php echo $menu_current != "gestion" ? '<a href="gestion.php">' : ""; ?>GESTIÓN DE VENTA<?php echo $menu_current != "gestion" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-faq" class="menu-item <?php echo $menu_current == "faq" ? "menu-current" : ""; ?>">
		<?php echo $menu_current != "faq" ? '<a href="faq.php">' : ""; ?>F.A.Q.<?php echo $menu_current != "faq" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-blog" class="menu-item <?php echo $menu_current == "blog" ? "menu-current" : ""; ?>">
		<?php echo $menu_current != "blog" ? '<a href="http://grupoavala.com/blog/">' : ""; ?>BLOG<?php echo $menu_current != "blog" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-franquicias" class="menu-item <?php echo $menu_current == "franquicias" ? "menu-current" : ""; ?>">
		<?php echo $menu_current != "franquicias" ? '<a href="franquicias.php">' : ""; ?>FRANQUICIAS<?php echo $menu_current != "franquicias" ? '</a>' : ""; ?>
	</div>
	<div id="menu-item-contacto" class="menu-item <?php echo $menu_current == "contacto" ? "menu-current" : ""; ?>">
		<?php echo $menu_current != "contacto" ? '<a href="contacto.php">' : ""; ?>CONTACTO<?php echo $menu_current != "contacto" ? '</a>' : ""; ?>
	</div>
</div>
