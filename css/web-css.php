<style>
    * {
        box-sizing: border-box;
    }
	@font-face {
		    font-family: "fuenteAvala";
		    src: url("fonts/fuenteAvala.ttf") format("truetype");
	}

	@font-face {
		    font-family: "bebas";
		    src: url("fonts/BebasNeue_Regular.ttf") format("truetype");
	}

	@font-face {
		    font-family: "bebasBold";
		    src: url("fonts/BebasNeue_Bold.ttf") format("truetype");
	}

	@font-face {
		    font-family: "myriad";
		    src: url("fonts/MyriadPro_Regular.otf") format("opentype");
	}

	@font-face {
		    font-family: "baron";
		    src: url("fonts/BaronNeue_Bold.otf") format("opentype");
	}

	a {
		    text-decoration: none;
	}

	a img {
		    border-width: 0;
	}

	.body {
		    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(239, 247, 244, 0.75) 25%, rgba(255, 255, 255, 0.5) 50%, rgba(239, 247, 244, 0.25) 75%, rgba(255, 255, 255, 0) 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
	}

	.oscuro {
		    color: #111e43 !important;
	}

	.claro {
		    color: #024586 !important;
	}

	.rojo {
		    color: #b42218 !important;
	}

	.izq {
		    float: left;
		    margin-left: 2%;
		    margin-right: 1%;
		    width: 97%;
	}

	.der {
		    float: left;
		    margin-left: 1%;
		    margin-right: 2%;
		    width: 97%;
	}

	.cen {
		    float: left;
		    margin-left: 1%;
		    margin-right: 1%;
		    width: 98%;
	}

	.global-content {
		    min-width: 1200px;
		    width: 100%;
				//min-width: 1472px;
	}

	.container {
		    width: 100%;
	}

	#cabecera {
		    background-color: #024586;
		    background-image: url("images/logo.png");
		    background-position: 52px 17px;
		    background-repeat: no-repeat;
		    border-top: 17px solid #111e43;
		    color: #fff;
		    font-family: bebas;
		    min-height: 168px;
		    text-align: right;
	}

	#cabecera-redes {
		    margin: 10px 44px 0 0;
	}

	.boton-red-social {
		    margin: 0 4px;
	}

	#cabecera-movil {
		    font-size: 36pt;
		    margin-right: 35px;
		    text-shadow: 5px 5px #012d58;
	}

	#cabecera-movil a {
		    color: #fff;
	}

	#cabecera-tfno {
		    font-size: 60pt;
		    margin-right: 35px;
		    text-shadow: 5px 5px #012d58;
	}

	#cabecera-tfno a {
		    color: #fff;
	}

	#menu {
		    background-color: transparent;
		    border-bottom: 12px solid #024586;
		    font-family: bebasBold;
		    padding: 10px 0;
	}

	.menu-item {
		    display: inline;
		    font-size: 19.85pt;
	}

	.menu-item a {
		    color: #024586;
		    padding: 10px 20px;
		    text-decoration: none;
	}

	.menu-item a:hover {
		    background-color: #111e43;
		    color: #fff;
		    text-decoration: none;
	}

	.menu-current {
		    color: #000;
		    padding: 0 20px;
	}

	#cuerpo {
		    float: left;
	}

	#pie {
		    background-color: #024586;
		    color: #fff;
		    float: left;
		    font-family: myriad;
		    padding-top: 10px;
	}

	#pie a {
		    color: #fff;
		    font-family: myriad;
		    text-decoration: none;
	}

	.pie-parrafo {
		    float: left;
		    font-size: 10pt;
		    margin-left: 5%;
		    width: 20%;
	}

	.pie-parrafo h1 {
		    font-size: 12pt;
		    font-weight: 400;
		    margin: 0;
	}

	#pie-pie {
		    background-color: #111e43;
		    color: #fff;
		    float: left;
		    font-family: myriad;
		    font-size: 8pt;
		    text-align: center;
	}

	#pie-pie p {
		    margin: 10px 100px;
	}

	#pie-redes {
		    float: left;
		    text-align: right;
		    width: 20%;
	}

	#pie-logo {
		    background-image: url("images/logoPie.png");
		    background-repeat: no-repeat;
		    float: left;
		    height: 120px;
		    position: relative;
		    width: 421px;
	}

	.panel-visor {
		    margin-bottom: 10px;
		    margin-top: 10px;
		    width: 100%;
	}

	.visor {
		    height: 320px;
		    text-align: center;
		    width: 100%;
	}

	.visor-index {
		    height: 19px;
		    margin-top: 5px;
		    width: 100%;
	}

	.visor-item {
		    background-color: #024586;
		    border-left: 8px solid #fff;
		    cursor: pointer;
		    height: 19px;
		    width: 19px;
	}

	.visor-item-selected {
		    background-color: #111e43;
		    cursor: default;
	}

	.visor-bar {
		    background-color: #024586;
		    border-top: 3px solid #111e43;
		    height: 16px;
		    width: 100%;
	}

	.visor-image {
		    height: 320px;
		    width: 420px;
	}

	.cartel {
	}

	.cartel-borde {
		    background-color: #b52318;
		    box-shadow: 1px 1px 1px #888;
		    height: 4px;
		    margin: 4px 0;
		    width: 100%;
	}

	.cartel-text {
		    font-family: bebasBold;
		    font-size: 25pt;
		    height: 35px;
		    text-align: center;
		    width: 100%;
	}

	.cartel2 {
		    background-color: #b52318;
		    border-radius: 15px;
		    color: #fff;
		    font-family: Tahoma;
		    font-size: 30pt;
		    font-weight: 700;
		    padding: 15px 8px;
	}

	.tasador {
		    float: left;
		    text-align: center;
		    width: 100%;
	}

	.tasador h1 {
		    color: #b52318;
		    font-family: bebasBold;
		    font-size: 22pt;
		    margin: 40px 0 0;
		    text-align: left;
		    width: 100%;
	}

	.tasador form {
		    border-width: 0;
		    margin: 0;
		    text-align: left;
		    width: 100%;
	}

	.tasador-textfield {
		    background-color: #024586;
		    border-width: 0;
		    box-shadow: -1px 1px 1px 0 #111e43;
		    color: #fff;
		    font-family: myriad;
		    font-weight: 700;
		    height: 30px;
		    margin: 2px 0.25%;
		    padding: 0;
	}

	.tasador-textarea {
		    background-color: #024586;
		    border-width: 0;
		    box-shadow: -1px 1px 1px 0 #111e43;
		    color: #fff;
		    font-family: myriad;
		    font-weight: 700;
		    height: 57px;
		    margin: 2px 0.25%;
		    padding: 0;
	}

	.tasador-button {
		    background-color: #024586;
		    border-top: 3px solid #111e43;
		    border-width: 3px 0 0;
		    color: #fff;
		    cursor: pointer;
		    float: left;
		    font-family: fuenteAvala;
		    font-size: 8pt;
		    font-weight: 700;
		    height: 19px;
		    margin: 2px 0.25%;
		    padding: 0;
		    width: 12%;
	}

	.tasador-button:hover {
		    background-color: #111e43;
		    border-top-color: #024586;
	}

	.tasador-privacidad {
		    background-color: #024586;
		    border-top: 3px solid #111e43;
		    border-width: 3px 0 0;
		    color: #fff;
		    float: left;
		    font-family: Arial;
		    font-size: 7pt;
		    font-weight: 400;
		    height: 16px;
		    margin: 2px 0.25%;
		    padding: 0;
		    position: relative;
		    text-align: center;
		    width: 87%;
	}

	.tasador-privacidad a {
		    color: #fff;
	}

	.tasador-captcha {
		    background-color: #024586;
		    float: right;
		    margin: 0 0.25%;
		    position: relative;
		    width: 99.5%;
	}

	.tasador-captcha-text {
		    color: #fff;
		    float: right;
		    font-family: myriad;
		    font-size: 10pt;
		    font-weight: 700;
		    height: 100%;
		    margin: 8px 0;
		    position: relative;
	}

	.tasador-captcha img {
		    float: right;
		    position: relative;
	}

	.tasador-captcha input {
		    float: right;
		    position: relative;
	}

	.iconos {
		    float: left;
		    margin-bottom: 16px;
		    margin-top: 16px;
	}

	.icono {
		    float: left;
		    text-align: center;
	}

	.icono a {
		    border-width: 0;
	}

	.separador {
		    background-color: #024586;
		    border-top: 3px solid #111e43;
		    float: left;
		    height: 16px;
		    width: 100%;
	}

	.iconos-border-top {
		    margin-bottom: 12px;
	}

	.iconos-border-bottom {
		    margin-top: 30px;
	}

	.texto-bloque {
		    float: left;
		    font-family: Tahoma;
		    font-size: 14pt;
		    margin-bottom: 10px;
		    margin-top: 10px;
		    text-align: justify;
		    width: 100%;
	}

	.texto-bloque bold {
		    font-weight: 700;
	}

	.texto-bloque a {
		    color: #000;
	}

	.link-youtube {
		    float: left;
		    margin-top: 50px;
		    text-align: center;
		    width: 100%;
	}

	.logo_telemadrid {
		    float: left;
		    margin-top: 24px;
		    text-align: center;
		    width: 100%;
	}

	.partners {
		    float: left;
		    text-align: center;
		    width: 100%;
	}

	.stock {
		    color: #111e43 !important;
		    float: left;
		    font-family: bebas;
		    font-size: 32pt;
		    width: 100%;
	}

	.stock bold {
		    font-family: bebasBold;
	}

	.stock-iconos {
		    background-color: #f0f0f0;
		    border-bottom-left-radius: 15px;
		    border-bottom-right-radius: 15px;
		    float: left;
		    padding-bottom: 16px;
		    width: 100%;
	}

	.columnas {
		    float: left;
	}

	.columna {
		    float: left;
		    width: 50%;
	}

	.pop-up {
		    position: fixed;
		    width: 246px;
	}

	.pop-up iframe {
		    border-width: 0;
		    display: none;
		    height: 110px;
		    margin: 0;
		    width: 100%;
	}

	.titulo-texto {
		    color: #00387c;
		    font-family: bebasBold;
		    font-size: 24pt;
	}

	.lista {
		    float: left;
		    margin-left: 2%;
		    margin-right: 2%;
		    width: 96%;
	}

	.lista-title {
		    float: left;
		    font-family: baron;
		    font-size: 30pt;
	}

	.lista-item {
		    float: left;
		    margin-bottom: 16px;
		    width: 100%;
	}

	.lista-image {
		    float: left;
		    margin-right: 40px;
		    min-width: 300px;
	}

	.lista-image-novedad {
		    background-image: url("images/novedad.png");
		    background-repeat: no-repeat;
		    background-size: 273px 62px;
		    float: left;
		    height: 62px;
		    margin-bottom: 16px;
		    width: 273px;
	}

	.lista-image img {
		    clear: left;
		    float: left;
		    margin-bottom: 25px;
		    margin-top: 20px;
		    width: 273px;
	}

	.lista-item-panel {
		    float: left;
	}

	.lista-item-title {
		    color: #024586;
		    float: left;
		    font-family: bebasBold;
		    font-size: 25pt;
		    margin-bottom: 36px;
		    width: 100%;
	}

	.lista-item-text {
		    color: #000;
		    float: left;
		    font-family: Tahoma;
		    font-size: 14pt;
		    text-align: justify;
		    width: 100%;
	}

	.lista-item-text bold {
		    font-weight: 700;
	}

	.lista-item-text-title1 {
		    color: #b42218;
		    font-family: bebasBold;
		    font-size: 40pt;
	}

	.lista-item-text-title1 a {
		    color: #b42218;
		    text-decoration: none;
	}

	.lista-item-text-title2 {
		    color: #000;
		    font-family: bebas;
		    font-size: 17pt;
	}

	.lista-item-text-title3 {
		    color: #024586;
		    font-family: bebasBold;
		    font-size: 20pt;
	}

	.lista-item-text-title4 {
		    color: #024586;
		    font-family: bebasBold;
		    font-size: 17pt;
	}

	.lista-item-text-title5 {
		    color: #000;
		    font-family: bebas;
		    font-size: 25pt;
	}

	.lista-title-gestion {
		    color: #00387c;
		    font-family: bebasBold;
		    font-size: 24pt;
		    margin-bottom: 20px;
		    margin-top: 30px;
	}

	.lista-image-title {
		    float: left;
		    text-align: center;
		    width: 100%;
	}

	.gestion-titulo-texto {
		    margin-left: 2%;
		    margin-right: 2%;
		    width: 96% !important;
	}

	.gestion-cols-texto {
		    margin-bottom: 30px;
		    margin-top: 30px;
	}

	.cuadro-franquicias {
		    background-color: #94c4ff;
		    border-radius: 15px;
		    padding: 2%;
		    width: 96% !important;
	}

	.contacto-div {
		    float: left;
		    min-width: 300px;
		    padding-top: 30px;
		    width: 100%;
	}

	.contacto-mapa {
		    color: #00f;
		    float: left;
		    text-align: left;
	}

	.contacto-text {
		    float: left;
		    max-width: 320px;
		    padding: 0 20px;
	}

	.contacto-texto {
		    text-align: center;
	}

	.contacto-text h1 {
		    color: #111e43;
		    font-family: bebasBold;
		    font-size: 26pt;
		    margin: 0;
	}

	.contacto-text p {
		    color: #111e43;
		    font-family: bebas;
		    font-size: 18pt;
		    margin: 10px;
	}

	.contacto-text a {
		    color: #111e43;
		    text-decoration: none;
	}

	.mapa-iconos {
		    float: left;
		    width: 100%;
	}

	.body-movil {
		    background-image: none;
		    color: #fff;
		    margin: 0;
		    padding: 0;
		    text-align: center;
	}

	.body-movil a {
		    color: #fff;
		    text-decoration: none;
	}

	.cabecera-movil {
		    background-color: #024586;
		    border-top: 16px solid #111e43;
		    font-family: bebas;
		    font-size: 30pt;
	}

	.logo-movil {
		    margin-top: 16px;
	}

	.global-content-movil {
		    margin-right: auto;
		    max-width: 360px;
		    min-width: 300px;
		    width: 100%;
	}

	.lista-item-movil {
		    background-color: #024586;
		    border-color: #111e43;
		    border-style: solid;
		    cursor: pointer;
		    margin: 2% 1%;
		    padding: 2% 0;
	}

	.lista-title-movil {
		    font-family: bebas;
		    font-size: 16pt;
		    margin-top: 2%;
	}

	.lista-text-movil {
		    color: #000;
		    font-family: tahoma;
		    font-size: 10pt;
		    font-weight: 700;
		    margin-left: 2%;
		    text-align: left;
		    text-transform: uppercase;
	}

	.menu-item-movil {
		    background-color: #111e43;
		    border-color: #fff;
		    border-style: solid;
		    cursor: pointer;
		    font-family: fuenteAvala;
		    font-size: 14pt;
		    padding: 2% 1%;
		    text-transform: lowercase;
		    width: 96%;
	}

	.menu-inicio-movil {
		    background-image: url("images/menu-inicio.png");
		    background-origin: content-box;
		    background-position: right center;
		    background-repeat: no-repeat;
	}

	.pie-movil {
		    background-color: #024586;
		    font-family: tahoma;
		    font-size: 30pt;
		    padding: 2% 0;
	}

	.pie-parrafo-movil {
		    font-size: 10pt;
		    margin-left: 5%;
		    padding: 2% 0;
		    text-align: left;
		    width: 95%;
	}

	.pie-parrafo-movil h1 {
		    font-size: 12pt;
		    font-weight: 400;
		    margin: 0;
	}

	.pie-logo-movil {
		    background-image: url("images/logoPieMovil.png");
		    background-origin: content-box;
		    background-position: right top;
		    background-repeat: no-repeat;
		    height: 80px;
		    padding-right: 5%;
		    width: 95%;
	}

	.llamamos-movil {
		    width: 100%;
	}

	.llamamos-movil iframe {
		    border-width: 0;
		    height: 64px;
		    width: 100%;
	}

	.contacto-movil {
		    position: relative;
	}

	.cartel-movil {
		    margin-left: auto;
		    margin-right: auto;
		    width: 90%;
	}

	.cartel-borde-movil {
		    background-color: #b52318;
		    box-shadow: 1px 1px 1px #888;
		    height: 4px;
		    width: 100%;
	}

	.cartel-text-movil {
		    color: #111e43;
		    font-family: bebasBold;
		    font-size: 16pt;
		    padding: 5px 0;
		    text-align: center;
		    width: 100%;
	}

	.contacto-texto-movil {
		    padding: 5px 2%;
		    text-align: center;
		    width: 96%;
	}

	.contacto-texto1-movil {
		    color: #111e43;
		    font-family: bebasBold;
		    font-size: 12pt;
	}

	.contacto-texto2-movil a {
		    color: #b42218;
		    font-family: bebasBold;
		    font-size: 20pt;
	}

	.mapas-movil {
		    color: #111e43;
		    font-family: bebas;
	}

	.mapas-movil table {
		    margin-top: 12px;
	}

	.mapas-movil th {
		    font-size: 16pt;
		    text-align: left;
	}

	.mapas-movil tr {
		    text-align: left;
	}

	.mapas-imagen-movil {
		    text-align: right;
	}

	.mapas-movil a {
		    color: #111e43;
	}

	.separador-movil {
		    background-color: #024586;
		    border-top: 2px solid #111e43;
		    height: 8px;
		    width: 100%;
	}

	.contacto-mapa-movil {
		    color: #00f;
		    text-align: left;
	}

	.contacto-mapa-tabla-movil {
		    border-width: 0;
		    width: 100%;
	}

	.tasador-movil {
		    float: none !important;
	}

	.tasador-movil > .separador {
		    background-color: #024586;
		    border-top: 2px solid #111e43;
		    float: none !important;
		    height: 8px;
		    margin-bottom: 8px;
	}

	.tasador-movil > h1 {
		    margin-top: 0;
		    text-align: center;
	}

	.tasador-movil .tasador-privacidad {
		    float: none;
		    margin-left: 0;
		    position: relative;
		    width: 100%;
	}

	.tasador-movil .tasador-button {
		    float: none;
		    font-size: 10pt;
		    height: auto !important;
		    margin-left: 0;
		    padding: 4px 0;
		    position: relative;
		    width: 100%;
	}

	.boton-google-movil {
		    background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(235, 239, 244, 1) 10%, rgba(255, 255, 255, 1) 20%, rgba(235, 239, 244, 1) 30%, rgba(255, 255, 255, 1) 40%, rgba(235, 239, 244, 1) 50%, rgba(255, 255, 255, 1) 60%, rgba(235, 239, 244, 1) 70%, rgba(255, 255, 255, 1) 80%, rgba(235, 239, 244, 1) 90%, rgba(255, 255, 255, 1) 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
		    border-color: #111e43;
		    border-radius: 5px;
		    border-style: solid;
		    border-width: 1px;
		    box-shadow: 1px 1px 1px #888;
		    font-family: bebasBold;
		    font-size: 24pt;
		    margin-bottom: 4px;
		    padding: 8px 8px 0;
	}

	.boton-google-movil img {
		    margin-right: 4px;
		    margin-top: 12px;
	}

	.tasador2 {
		    background-color: #024586;
		    color: #fff;
		    font-family: Tahoma;
		    font-size: 1.5em;
		    margin: 4px auto;
		    padding: 8px 0;
		    text-align: center;
		    width: 540px;
	}

	.tasador2 .form_title {
		    padding-left: 8px;
		    text-align: left;
	}

	.tasador2 ul {
		    display: inline-block;
		    list-style-type: none;
		    margin: 0;
		    padding: 0;
		    width: 260px;
	}

	.tasador2 input[type="text"], .tasador2 input[type="email"], .tasador2 input[type="tel"], .tasador2 select {
		    border: medium none;
		    font-size: 1em;
	}

	.tasador2 input[type="text"], .tasador2 input[type="email"], .tasador2 input[type="tel"] {
		    margin: 4px 4px 0;
		    width: 240px;
	}

	.tasador2 select {
		    margin: 4px 4px 0;
		    width: 240px;
	}

	.tasador2 #privacidad {
		    font-size: 0.7em;
	}

	.tasador2 #obligatorios {
		    font-size: 0.5em;
	}

	.tasador2 #privacidad a {
		    color: #fff;
		    text-decoration: underline;
	}

	.tasador2 input[type="checkbox"] {
		    margin: 4px;
	}

	.tasador2 input[type="submit"] {
		    border: medium none;
		    color: #fff;
		    cursor: pointer;
		    font-size: 1em;
		    margin: 4px 5% 0;
		    padding: 8px 0;
		    width: 90%;
	}

	.tasador2 .form_title {
		    padding-left: 8px;
		    text-align: left;
	}

	.tasador2 .red_title {
		    background-color: #b52318;
		    color: #fff;
	}

	#texto_privacidad {
		    background-color: #fff;
		    cursor: pointer;
		    display: none;
		    height: 50%;
		    left: 25%;
		    padding: 2%;
		    position: fixed;
		    top: 25%;
		    width: 50%;
	}

	#fondo_texto_privacidad {
		    background-color: #000;
		    cursor: pointer;
		    display: none;
		    height: 100%;
		    left: 0;
		    opacity: 0.5;
		    position: absolute;
		    top: 0;
		    width: 100%;
	}

	#new-cabecera-cover {
		    background-color: #024586;
		    border-top: 17px solid #111e43;
		    color: #fff;
		    font-family: bebas;
				display:table;
	}

	#new-cabecera {
		    text-align: center;
			padding-left: 150px;
		display: table-row;
		width: 100%;
	}
	#new-cabecera>* {
		display: table-cell;
			text-align: center;
		vertical-align: top;
	}

	#new-cabecera-redes {
		margin: 8px;
		text-align: right;
	}

	#new-cabecera-telefonos {
		padding-top:16px;
	}

	#new-cabecera-movil {
			list-style: none;
		    font-size: 32pt;
		    text-shadow: 5px 5px #012d58;
	}
	#new-cabecera-movil>li:first-child {
		    font-size: 1.4em;
	}
	#new-cabecera-movil>li.icono-whatsapp {
	//	    list-style-image: url(images/icono_whatsapp.png);
	 background: url(images/icono_whatsapp.png) no-repeat left top;
	  padding: 3px;
	  margin: 0;
		font-size: 0.9em;
	}
	#new-cabecera-movil>img {
	//	height: 32px;
	}

	#new-cabecera-movil a {
		    color: #fff;
	}

	#new-cabecera-tfno {
		    font-size: 32pt;
		    text-shadow: 5px 5px #012d58;
	}
	#new-cabecera-tfno>img {
		height: 32px;
	}

	#new-cabecera-tfno a {
		    color: #fff;
	}

	#new-tasador {
	}

	.new-list {
		list-style: none;
		font-family: Arial;
		width: 100%;
		padding: 0;
	}
	.new-list>li {
		display: table-row;
		vertical-align: middle;
		background: #ffffff; /* Old browsers */
		background: -moz-linear-gradient(top,  #ffffff 0%, #bcbcbc 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#bcbcbc)); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(top,  #ffffff 0%,#bcbcbc 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(top,  #ffffff 0%,#bcbcbc 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(top,  #ffffff 0%,#bcbcbc 100%); /* IE10+ */
		background: linear-gradient(to bottom,  #ffffff 0%,#bcbcbc 100%); /* W3C */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#bcbcbc',GradientType=0 ); /* IE6-9 */
	}
	.new-list>li>* {
		display: table-cell;
		vertical-align: middle;
	}
	.new-list>li>img {
		text-align: right;
		display: block;
		padding: 0 8px 8px 0;
		border: none;
	}
	.new-list>li:last-child>img {
		padding: 8px !important;
	}
	.new-list>li>div {
		text-align: right;
		padding-right: 8px;
	}
	.new-list h1 {
		color: #004585;
		margin: 0;
		padding:0;
		font-size: 1.2em;
	}
	.new-list p {
		color: black;
		margin: 0;
		padding:0;
		font-size: 0.9em;
	}
	.new-list a {
		color: black;
		font-size: 1.1em;
	}
	.container-pop-up {
		//display: table-row;
	}
	.container-pop-up>* {
		//display: table-cell;
	}
	.new-pop-up {
		margin-top: 16px;
		text-align: center;
		background-image: url(images/image6.png);
		background-repeat: no-repeat;
		background-position: right center;
		background-size: contain;
	}
	.new-pop-up ul{
		list-style: none;
	}
	.new-pop-up a{
	    font-family: fuenteAvala;
	    font-size: 20pt;
	    padding: 8px 2px;
	}
	.new-pop-up img {
	    border-style: solid;
	    border-width: 2px;
	    border-color: rgb(180, 34, 24);
	    border-radius: 90px;
	    vertical-align: middle;
	}
	.new-pop-up iframe {
	    margin-top: -8px;
	    border: none;
	    display: none;
	}
	.texto_rojo_hover{
	    background-color: rgb(180, 34, 24);
	    color: white;
	}
	.texto_rojo_hover:hover{
	    color: rgb(180, 34, 24);
	    background-color: white;
	}
	.new-links {
		margin-top: -40px;
		text-align: center;
	}
	.new-links>* {
		display:inline-block;
	}
	.new-links ul{
		list-style: none;
	}
	.new-links ul img{
		height: 45px;
	}
	.pictures {
		text-align: center;
		padding: 12px 0;
		background: #ffffff; /* Old browsers */
		background: -moz-linear-gradient(top,  #ffffff 0%, #024586 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#024586)); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(top,  #ffffff 0%,#024586 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(top,  #ffffff 0%,#024586 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(top,  #ffffff 0%,#024586 100%); /* IE10+ */
		background: linear-gradient(to bottom,  #ffffff 0%,#024586 100%); /* W3C */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#024586',GradientType=0 ); /* IE6-9 */
	}

	.cabecera-picture {
		vertical-align: bottom !important;
	}
	#inicio-textotexto {
		font-size: 0.9em !important;
	}	
	.autoexclusivo {
		display: none;
	}
    #inicio-carrusel ul {
        list-style: none;
        width: 100%;
        padding: 0;
    }
    #inicio-carrusel ul li {
        display: none;
        width: 100%;
    }
    #inicio-carrusel ul li.view {
        display: inline-block;
    }
    #inicio-carrusel ul li img{
        width: 100%;
    }
    #inicio-financiacion {
        float: left;
        width: 100%;
    }
    #inicio-financiacion .cartel-text {
        margin-top: 0.75rem;
    }
</style>
