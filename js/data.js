var raw =

{

	tfno: '<a href="tel: +34900901085">900 901 085</a>',

	tfnoDoble: '<a href="tel: +34900901085">900 901 085</a> - <a href="tel: +34910327673">91 032 76 73</a>',

	tfnoMovil: '<a href="tel: +34691010620">691 010 620</a>',

	numMovil: '+34691010620',

	tfnoMovilLlamar: '<a href="tel: +34691010620">Llamar</a>',

	tfnoFijo: '<a href="tel: +34910327673">91 032 76 73</a>',

	numFijo: '+34910327673',

	email: 'info@grupoavala.com',

	blog: 'http://grupoavala.com/blog/'

};



var data = 

{

	vistas:

	{	

		findDefault: function ()

		{

			for (var i = 0 ; i < this.items.length ; i++)

			{

				var item = this.items[i];

				

				if (item.width === 'default')

				{

					return item;

				}

			}

			return null;

		},

		findWidth: function (width)

		{

			for (var i = 0 ; i < this.items.length ; i++)

			{

				var item = this.items[i];

				

				if (item.width !== 'default' &&

					width <= item.width)

				{

					return item;

				}

			}

			return this.findDefault();

		},

		getClasesUnselected: function (clase)

		{

			var clases = [];

			

			for (var i = 0 ; i < this.items.length ; i++)

			{

				var item = this.items[i];

				

				if (item.clase != clase)

				{

					clases.push(item.clase);

				}

			}

			

			return clases;

		},

		isDifferentVista: function (lastWidth, currentWidth)

		{

			var lastVista = this.findWidth(lastWidth);

			var currentVista = this.findWidth(currentWidth);

			

			return (lastVista.width != currentVista.width);

		},

		items: [

		{

			width: 360,

			clase: 'body-movil',

			funcion: 'mostrarWebMovil'

		},

		{

			width: 'default',

			clase: 'body',

			funcion: 'mostrarWebPC'

		}]

	},

	rutas:

	{

		imagen: './images/'

	},

	menu: [

	{

		id: 'inicio',

		text: 'INICIO',

		funcion: 'mostrarInicio'

	},

	{

		id: 'como',

		text: 'CÓMO FUNCIONAMOS',

		funcion: 'mostrarComo'

	},

	{

		id: 'opciones',

		text: 'OPCIONES DE CONTRATO',

		funcion: 'mostrarOpciones'

	},

	{

		id: 'gestion',

		text: 'GESTIÓN DE VENTA',

		funcion: 'mostrarGestion'

	},

	{

		id: 'faq',

		text: 'F.A.Q.',

		funcion: 'mostrarFaq'

	},

	{

		id: 'blog',

		text: 'BLOG',

		funcion: 'mostrarBlog',

		noCambiar: true

	},

	{

		id: 'franquicias',

		text: 'FRANQUICIAS',

		funcion: 'mostrarFranquicias'

	},

	{

		id: 'contacto',

		text: 'CONTACTO',

		funcion: 'mostrarContacto'

	}],

	redesSociales:

	{

		tagHover: '_mouseover',

		facebook: 

		{

			imagen: 'facebook.png',

			href: 'http://www.facebook.com/grupo.avala'

		},

		twitter: 

		{

			imagen: 'bp_twitter.png',

			href: 'http://twitter.com/GrupoAvala'

		},

		google: 

		{

			imagen: 'bp_google.png',

			href: 'http://www.google.com'

		},

		rss: 

		{

			imagen: 'bp_rss.png',

			href: 'http://www.rss.com'

		}

	},

	cabecera:

	{

		imagenes:

		{

			whatsapp: 'icono_whatsapp.png',

			line: 'icono_line.png',

			tfno: 'icono_telblanco.png'

		},

		textos:

		{

			movil: 'MOVIL: ' + raw.tfnoMovil + '',

			tfno: raw.tfnoDoble

		}

	},

	pie:

	{

		inferior: '<p>© 2014 Auto Efectivo All Rights reserved. Contacto. Empresa dedicada a empeños de coches. Reciba dinero por coche particular o de empresa de forma rápida y sencilla con la mejor tasación. Puede elegir entre empeños de coche sin dejar el vehículo, empeño con custodia del coche, la venta directa del coche disponiendo de su valor de tasación en menos de 24 horas o que a través de nuestra experiencia le gestionemos de forma eficaz la venta de su vehículo directamente en nuestras instalaciones.</p>',

		parrafos: [

		[

			'<h1>Información</h1>',

			'<p>Coches de ocasión</p>',

			'<p><a href="index.html?pantalla=como">¿Cómo funcionamos?</a></p>',

			'<p>Otros servicios</p>',

			'<p>Aviso legal</p>',

			'<p>Política de seguridad</p>',

			'<p>Política de privacidad</p>',

			'<p>Política de cookies</p>'

		],

		[

			'<h1>Oficina y depósito</h1>',

			'<p>c/ Antonia Lancha  nº13</p>',

			'<p>28019 - Madrid</p>',

			'<p>Tel: ' + raw.tfnoDoble + '</p>',

			'<p>Email: <a href="mailto: ' + raw.email + '">' + raw.email + '</a></p>',

			'<h1>Exposición y concesionario</h1>',

			'<p>Grupo Autoexplusivo</p>',

			'<p>Polígono Európolis</p>',

			'<p>c/ Munich, 13-15 657 765</p>',

			'<p>28230 - Las Rozas - Madrid</p>'

		],

		[

			'<h1><a href="index.html?pantalla=opciones">Opciones de contrato</a></h1>',

			'<p><a href="index.html?pantalla=opciones&seccion=empenarsin">Empeño de coches sin custodia</a></p>',

			'<p><a href="index.html?pantalla=opciones&seccion=empenar">Empeño de coches con custodia</a></p>',

			'<p><a href="index.html?pantalla=gestion&seccion=gestion">Gestión de venta de su vehículo</a></p>',

			'<p><a href="index.html?pantalla=gestion&seccion=vender">Compramos su vehículo</a></p>'

		]]

	},

	popup: 

	{

		imagen1: 'widgetclicktocall1.png',

		imagen2: 'widgetclicktocall2.png'

	},

	tasador:

	{

		privacidad: 

		{

			texto: [

			{

				texto: 'Enviando este formulario acepta nuestra política de '

			},

			{

				texto: 'privacidad y seguridad',

				link: '#'

			}]

		},

		title: 'TASADOR ONLINE',

		fields: [

		{

			type: 'TextField',

			params:

			{

				field: 'nombre',

				width: '49.5%',

				title: 'Nombre y apellidos'

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'provincia',

				width: '24.5%',

				title: 'Provincia',

				requerido: true

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'telefono',

				width: '24.5%',

				title: 'Teléfono',

				requerido: true,

				validar: 'numero',

				limite: 9,

				minCaracteres: 9

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'marca',

				width: '24.5%',

				title: 'Marca'

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'modelo',

				width: '24.5%',

				title: 'Modelo'

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'km',

				width: '12%',

				title: 'Km',

				validar: 'numero',

				limite: 9

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'cv',

				width: '12%',

				title: 'C.V.',

				validar: 'numero',

				limite: 9

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'ano',

				width: '24.5%',

				title: 'Año',

				validar: 'numero',

				limite: 4

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'combustible',

				width: '49.5%',

				title: 'Combustible'

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'cilindrada',

				width: '49.5%',

				title: 'Cilindrada',

				validar: 'numero'

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'importe',

				width: '49.5%',

				title: 'Importe',

				validar: 'decimal'

			}

		},

		{

			type: 'TextField',

			params:

			{

				field: 'correo',

				width: '49.5%',

				title: 'Correo electrónico',

				requerido: true,

				validar: 'email'

			}

		},

		{

			type: 'TextArea',

			params:

			{

				field: 'mensaje',

				width: '99.5%',

				title: 'Mensaje'

			}

		}],

		validar: function (field)

		{

			if (field.params.validar)

			{

				var value = field.value;

			

				if (value != '' && value != field.params.title)

				{

					if (value.length < field.params.minCaracteres)

					{

						return ' debe tener como mínimo ' + field.params.minCaracteres + (field.params.minCaracteres == 1 ? ' caracter' : ' caracteres');

					}

				

					if (field.params.validar == 'email')

					{

						if (value.indexOf(' ') >= 0)

						{

							return ' no puede tener espacios';

						}

						else

						{

							var parts = value.split('@');

							

							if (parts.length < 2)

							{

								return ' debe tener una @';

							}

							else if (parts.length > 2)

							{

								return ' sólo puede tener una @';

							}

							else

							{

								var part = parts[0];

								if (part.length == 0)

								{

									return ' debe haber texto antes de la @';

								}

								

								part = parts[1];

								if (part.indexOf('.') < 0)

								{

									return ' debe tener un . después de la @';

								}

								else

								{

									var parts2 = part.split('.');

									

									var text = parts2[parts2.length - 1];

									if (text.length == 0)

									{

										return ' debe haber texto después del .';

									}

									

									text = [];

									for (var i = 0 ; i < parts2.length - 1 ; i++)

									{

										text.push(parts2[i]); 

									}

									

									text = text.join('.');

									if (text.length == 0)

									{

										return ' debe haber texto antes del .';

									}

								}

							}

						}

					}

					else if (field.params.validar == 'decimal')

					{

						var numVal = parseFloat(value);

						

						if (numVal != value)

						{

							return ' debe tener un número';

						}

					}

					else if (field.params.validar == 'numero')

					{

						var numVal = parseInt(value);

						

						if (numVal != value)

						{

							return ' debe tener un número';

						}

					}

				}

			}

			

			return false;

		},

		submit: function (idForm, origen)

		{

			var form = $('#' + idForm);

			

			var fields = form.children();

			var fieldWrong = null;

			var placeholder = '';

			var par = 

			{

				origen: origen

			};

			for (var i = 0 ; i < fields.length ; i++)

			{

				var jField = $(fields[i]);

				

				var value = jField.val();

				if (typeof(value) === 'undefined')

				{

					value = jField.html();

				}



				var required = jField.attr('required');

				

				if (required)

				{

					placeholder = jField.attr('placeholder');

					if (value == '' || value == placeholder)

					{

						fieldWrong = jField;

						break;

					}

				}

				

				var field = this.fields[i];

				if (field)

				{

					field.value = value;

					par[field.params.field] = value;

					var validar = this.validar(field);

					if (validar)

					{

						alert(field.params.title + validar);

						return;

					}

				}

			}

			

			if (fieldWrong != null)

			{

				alert('Es necesario rellenar ' + placeholder);

				return;

			}

			

			$.post("php/tasador.php", par, function (response)

			{

				var res = eval('(' + response + ')');

				

				if (res.mailAvala)

				{

					alert ("Ha habido problemas para enviar el formulario.");

				}

				else

				{

					alert("Petición enviada correctamente,\nrecibirá un email y un sms confirmándolo.");

				}

			});

		}

	},

	stock:

	{

		title: 'CONSULTE NUESTRO <bold>STOCK DE VEHÍCULOS</bold>',

		items: [

		{

			src: 'cochesnet.png',

			link: 'http://autoexclusivo.coches.net/'

		},

		{

			src: 'autoscout.png',

			link: 'http://profesionales.autoscout24.es/el-taller-de-autoexclusivo/vehiculos#atype=C&cid=14598&ustate=U,N,A&sort=price&results=20&page=1'

		},

		{

		

			src: 'segundamano.png',

			link: 'http://www.segundamano.es/madrid/tiendas/?ca=28_s&id=8072'

		}]

	},

	inicio:

	{

		meta: 

		{

			title: 'Grupo Avala - Empeño de Coches - Dinero en menos de 24hs - Tu coche te avala',

			description: 'Reinventamos el Empeño de Coches. Préstamos inmediatos hasta el 85% del valor de su vehículo. Liquidez al instante. Los mas económicos de España',

			keywords: 'empeño coche, empeños de coches, dinero por mi coche, máxima tasacion, credito rapido, avala con tu coche, credito asnef'

		},

		visor:

		{

			items: [

			{

				src: 'inicio.gif'

			}]

		},

		tasador:

		{

			title: 

			{

				text: [	'La 1º empresa de españa que se empeña por ti.',

						'No empeñes tu coche, avalalo.',

						'El cliente siempre gana.'],

				color: 'oscuro'

			}

		},

		iconos:

		{

			items: [

			{

				src: 'icono_empenar.png',

				handler: function()

				{

					web.cambiarPantalla('opciones', 'empenar');

				}

			},

			{

				src: 'icono_gestion.png',

				handler: function()

				{

					web.cambiarPantalla('gestion', 'gestion');

				}

			},

			{

				src: 'icono_vender.png',

				handler: function()

				{

					web.cambiarPantalla('gestion', 'vender');

				}

			},

			{

				src: 'icono_seguro.png',

				handler: function()

				{

					web.cambiarPantalla('opciones', 'seguro');

				}

			}]

		},

		izq:

		{

			text: 'En el <bold>G.E. AVALA</bold> nos dedicamos al empeño y compra-venta de coches de forma seria, rápida y práctica. Contamos con toda la experiencia e infraestructura necesarias para generar la confianza y seguridad que nuestros clientes necesitan.<br/>Tenemos opciones de empeño tanto para empresas como para particulares, y con nosotros podrá obtener dinero urgente por su coche, empeñar su vehículo en <bold>menos de 24 horas</bold> incluso mientras sigue circulando con él, o simplemente vender su coche de manera rápida y efectiva,  siempre teniendo la seguridad de que recibirá dinero urgente.<br/><bold>Somos los creadores del primer empeño de coches en el que el cliente siempre gana.</bold><br/>Disponemos de distintas modalidades de empeño entre las que podrá elegir, para adecuar a sus necesidades el tipo de empeño que más le convenga:<br/><bold>-Empeño de coches,</bold> motos o cualquier vehículo por el que desee conseguir dinero urgente: Dispondrá de su dinero en <bold>menos de 24 horas</bold> de forma sencilla y efectiva.<br/>-<bold>Compramos coches:</bold> Nosotros nos ocupamos de todas las gestiones para que usted no tenga que preocuparse por nada y pueda sacarle el mayor partido a la venta de su coche.<br/><br/>Si desea empeñar o vender su coche o vehículo y quiere información sobre cómo puede hacerlo, no dude en ponerse en contacto con nosotros tanto si es empresa como si es particular.<br/>Utilice nuestra herramienta de tasación online sin compromiso o póngase en contacto con nosotros en nuestro teléfono gratuito y <bold>consiga dinero hoy mismo.</bold><br/>Solicite información relacionada con el empeño de coche o moto con cargas, deuda o embargo.<br/>Incluso si el titular tiene algún tipo de carga o embargo, o se encuentra en los listados del <bold>ASNEF</bold> o el <bold>RAI</bold> podrá seguir empeñando su coche con nosotros.',

			iconos: [

			{

				src: 'santander.jpg'

			},

			{

				src: '40principales.png'

			},

			{

				src: 'milanuncios.png'

			},

			{

				src: 'securitas.png'

			},

			{

				src: 'race.jpg'

			}]

		},

		der:

		{

			title: 'Somos los más económicos de España. Desde 90€.',

			imagenYoutube: 'youtube.jpg',

			hrefYoutube: 'http://www.youtube.com/watch?v=udWjDRuOzgU',

			imagen: 'telemadrid.png',

			texto: 'Reportaje de las noticias de <bold>Telemadrid</bold> con el fundador del <bold>G.E. Avala</bold> en el que explica la nueva modalidad de empeño en la que <bold>el cliente siempre gana.</bold> El <bold>G.E. Avala</bold> se desmarca del resto de compañías reinventando el empeño de coches.'

		},

		pie:

		{

			items: [

			{

				src: 'fotoPie4.jpg'

			},

			{

				src: 'fotoPie2.jpg'

			},

			{

				src: 'fotoPie3.jpg'

			}]

		}

	},

	como:

	{

		meta: 

		{

			title: 'Grupo Avala - Empeñar mi Coche - Empeñar Coches - Empeño de Coches',

			description: 'Reinventamos el Empeño de Coches. Préstamos inmediatos hasta el 85% del valor de su vehículo. Liquidez al instante. Los mas económicos de España',

			keywords: 'empeño coche, empeños de coches, dinero por tu coche, mas economicos, credito urgente, tu coche te avala, credito asnef'

		},

		visor:

		{

			items: [

			{

				src: 'como1.jpg'

			}]

		},

		tasador:

		{

			title: ['La 1º empresa de españa que se empeña por ti.',

					'No empeñes tu coche, avalalo.',

					'El cliente siempre gana.'],

			color: 'oscuro'

		},

		texto: '<span class="titulo-texto">¿Cómo funciona un empeño?</span><br/>El empeño de <bold>coche o moto</bold> es un trámite muy sencillo que se puede explicar en <bold>4 rápidos pasos</bold>:<br/><br/><span class="titulo-texto">1-Tasación del vehículo:</span> utilice nuestra herramienta de tasación online o contacte con nosotros por mail o teléfono y tasaremos rápidamente su vehículo, pudiendo ofrecerle <bold>hasta un 85%</bold> del valor del coche bajo la tasación <bold>GANVAM</bold> según marca y modelo.<br/><br/><span class="titulo-texto">2-Acérquese a nuestras instalaciones:</span> Una vez tasado el vehículo, ya sea empresa o particular, solo deberá acercarse a una de nuestras instalaciones para terminar de gestionar el empeño de su <bold>coche o moto</bold>.<br/>No se olvide de traer todos los papeles en regla (Permiso de circulación, ficha técnica…) para poder realizar el contrato y disfrutar del dinero en <bold>menos de 24 horas</bold> sin ningún contratiempo.<br/>Si el coche que desea empeñar tiene alguna carga, deuda o embargo, no se preocupe y consúltenos las opciones para este tipo de casos sin ningún compromiso. <bold>Aceptamos empeños con deuda o embargo</bold>.<br/><br/><span class="titulo-texto">3-Firme el contrato:</span> Elija la modalidad de contrato de empeño o gestión de venta que más le convenga entre las opciones que le ofrecemos (empeño de coche con custodia, empeño de coche sin custodia, empeño seguro, gestión de venta o venta de coche), y tras verificar la documentación y el vehículo, se procederá a la firma del contrato.<br/>En el momento de la firma el cliente deberá aportar la documentación necesaria del vehículo para la formalización del empeño del coche, así como el juego de llaves. Además deberá ser el propietario del mismo.<br/>La firma del contrato se realizará en nuestras instalaciones, pero si el cliente no pudiera desplazarse, pondremos a su disposición nuestro servicio de recogida en <bold>toda España</bold> para su comodidad y tranquilidad.<br/><br/><span class="titulo-texto">4-Pago inmediato:</span> El pago se realizará en el momento de la firma del contrato, ya sea en efectivo, por transferencia bancaria, cheque bancario, cheque bancario conformado o como más le convenga.<br/>Realice el empeño de su coche o la gestión de venta en <bold>menos de 24 horas</bold> y disfrute <bold>hasta del 85% del valor</bold> de la tasación de su vehículo rápidamente.<br/>Si desea dinero urgente por su coche contacte con nosotros.'

	},

	opciones:

	{

		meta: 

		{

			title: 'Grupo Avala - Nuevo empeño Avala - Empeño sin dejar el Coche - Empeños sin custodia',

			description: 'Reinventamos el Empeño de Coches. Préstamos inmediatos hasta el 85% del valor de su vehículo. Liquidez al instante. Los mas económicos de España',

			keywords: 'empeño coche, empeños de coches, dinero por mi coche, dación en pago, credito rapido, avala con tu coche, con custodia, sin dejar el coche, sin custodia'

		},

		title: 'opciones de contrato',

		titleCartel: [	'La 1º empresa de españa que se empeña por ti.',

						'No empeñes tu coche, avalalo.',

						'El cliente siempre gana.'],

		separador: true,

		items: [

		{

			title: '<a id="seguro">EMPEÑO AVALA:</a>',

			text: '<span class="lista-item-text-title1">NO EMPEÑES TU COCHE… ¡AVÁLALO!</span><br/><br/><span class="lista-item-text-title2">EL PRIMER Y ÚNICO MODELO DE EMPEÑO EN EL QUE EL CLIENTE SIEMPRE GANA.</span><br/><br/><span class="lista-item-text-title2">SOMOS LA PRIMERA EMPRESA DE ESPAÑA QUE APLICA LA “DACIÓN EN PAGO” AL EMPEÑO DE COCHES.</span><br/><br/><span class="lista-item-text-title2">PIERDA EL MIEDO A QUEDARSE SIN DINERO Y SIN COCHE.</span><br/><br/><span class="lista-item-text-title3">Siga los pasos de un empeño tradicional, pero quédese tranquilo:</span><br/><br/><span class="lista-item-text-title4">1-Tase su vehículo:</span> Una vez tasado, le daremos por su coche o moto hasta el 65% de su valor real, siempre con la mayor tasación posible.<br/><br/><span class="lista-item-text-title4">2-Firme el contrato:</span> Acérquese a nuestras oficinas y una vez firmado el contrato de empeño de su coche o moto, usted podrá seguir disfrutando de su vehículo y al mismo tiempo conseguir un dinero extra de forma rápida y efectiva. Además podrá decidir cuando quiere cancelar el contrato de empeño de su coche.<br/><br/><span class="lista-item-text-title4">3-Reciba el dinero:</span> Le pagamos en el acto.<br/><br/><span class="lista-item-text-title5">SI POR CUALQUIER MOTIVO NO PUEDE PAGAR LA CUOTA, GESTIONAMOS LA VENTA DEL COCHE  PARA QUE PUEDA PAGAR LO ADEUDADO Y CONSIGA AÚN MÁS DINERO. <span class="rojo">¡NO PIERDA EL DINERO Y EL COCHE!</span></span>',

			image: 'opciones1.jpg',

			novedad: true

		},

		{

			title: '<a id="empenar">Empeño de Coche con Custodia:</a>',

			text: '<span class="lista-item-text-title3">EL MÉTODO MÁS BENEFICIOSO E INMEDIATO PARA OBTENER LA MÁXIMA RENTABILIDAD POR SU COCHE.</span><br/><br/><span class="lista-item-text-title4">1 –Tase su vehículo:</span> Una vez haya tasado su coche o moto le daremos hasta el 85% de su valor real, siempre con la máxima tasación posible.<br/><br/><span class="lista-item-text-title4">2 - Firme el contrato:</span> Acérquese a nuestras oficinas y una vez firmado el contrato de empeño de su coche o moto, este quedará inmovilizado en nuestras instalaciones, siendo custodiado las 24 horas del día hasta el momento de su retirada. Dispondrá de 30 días naturales para recoger su vehículo. No obstante, si durante ese período de tiempo no dispone del dinero necesario para cancelar el contrato de empeño de su coche o moto, podrá solicitar las prórrogas que sean necesarias sin ningún problema.<br/><br/><span class="lista-item-text-title4">3 - Reciba el dinero:</span> Le pagamos en el acto.<br/><br/>',

			image: 'opciones2.jpg'

		},

		{

			title: '<a id="empenarsin">Empeño sin dejar el coche o Empeño de Coche sin Custodia:</a>',

			text: '<span class="lista-item-text-title3">DINERO URGENTE POR SU COCHE SIN DESPRENDERSE DE ÉL.</span><br/><br/><span class="lista-item-text-title4">1 –Tase su vehículo:</span> Una vez tasado, le daremos por su coche o moto hasta el 65% de su valor real, siempre con la máxima tasación posible.<br/><br/><span class="lista-item-text-title4">2 - Firme el contrato:</span> Acérquese a nuestras oficinas y una vez firmado el contrato de empeño de su coche o moto, usted podrá seguir disfrutando de su vehículo y al mismo tiempo conseguir un dinero extra de forma rápida y efectiva. Además podrá decidir cuando quiere cancelar el contrato de empeño de su coche.<br/><br/><span class="lista-item-text-title4">3 - Reciba el dinero:</span> Le pagamos en el acto.<br/><br/>Sin duda la modalidad de empeño de coche más flexible del mercado.',

			image: 'opciones3.jpg'

		},

		{

			title: 'EL PAGO:',

			text: '<span class="lista-item-text-title3">AVALA le asegura el pago inmediato por su coche o moto en todas las modalidades de contrato:</span><br/><br/>Empeño de Coche con Custodia, el Empeño de coche sin custodia, Compra de Coche o Gestión de Venta de Vehículo le proporcionarán dinero urgente en <bold>menos de 24 horas.</bold><br/><br/>El pago se realizará en el momento de la firma del contrato, ya sea en efectivo, mediante cheque bancario, cheque bancario conformado, transferencia bancaria o como a usted le resulte más cómodo.',

			image: 'opciones4.jpg'

		}]

	},

	gestion:

	{

		meta: 

		{

			title: 'Grupo Avala - Gestión de venta de Vehículos - Anticipo de hasta el 65% - Dinero desde 15 Minutos',

			description: 'Gestionamos la venta de su vehículo. Consiga el dinero que necesita, su coche lo avala. Liquidez al instante. Los mas económicos de España',

			keywords: 'Gestion de venta de vehiculos, vendemos tu coche, anticipo dinero, máxima tasacion, compramos tu coche usado'

		},

		lista:

		{

			title: 'GESTIÓN DE VENTA: VENDEMOS TU COCHE',

			image: 'gestion1.jpg',

			items: [

			{

				text: '<a id="gestion"><span class="lista-item-text-title3">¡EL PRECIO LO PONES TÚ!</span></a><br/><br/><span class="lista-item-text-title3">¡TE ADELANTAMOS HASTA EL 65% DEL VALOR DE TU COCHE EN EL ACTO!</span><br/><br/><span class="lista-item-text-title3">¡TE PAGAMOS EN 15 MINUTOS!</span><br/><br/><span class="lista-item-text-title3">¡ACEPTAMOS COCHES COMO FORMA DE PAGO!</span><br/><br/>Si necesitas dinero urgente te adelantamos hasta el 65% del valor de tu coche en el acto.<br/>Nosotros nos ocupamos de gestionar la compra venta de tu coche usando nuestra dilatada experiencia e instalaciones para que puedas sacar la máxima rentabilidad a la venta de tu vehículo y librándote de la carga de los trámites de la venta. Disponemos de más de 3000m2 de instalaciones para exponer tu coche, además de una amplia cartera de clientes interesados de antemano en la compra de vehículos.<br/><br/>También <bold>ACEPTAMOS COCHES COMO FORMA DE PAGO</bold>, proporcionando garantía y financiación a cada coche con nuestras distintas entidades financieras asociadas <bold>(Santander y BBVA)</bold>.<br/>No pierdas dinero por tu coche malvendiéndolo y marca el precio tú mismo ahorrando tiempo y esfuerzo.<br/>Nosotros te asesoramos para que sepas cuánto vale tu coche y cual es el mejor precio posible para venderlo.<br/>Garantizamos la venta de tu vehículo y… <bold>¡¡¡NO COBRAMOS SI EL COCHE NO SE VENDE!!!</bold><br/><br/><bold>¡ARREGLAMOS TU COCHE Y FINANCIAMOS LA REPARACIÓN!</bold><br/><br/><bold>SI TU VEHÍCULO TIENE ALGÚN DESPERFECTO NO TE PREOCUPES, NOSOTROS NOS OCUPAREMOS DEL ARREGLO NECESARIO PARA QUE PUEDAS SACARLE EL MAYOR PARTIDO POSIBLE A LA VENTA.</bold><br/><br/><bold>¡ACEPTAMOS COCHES CON AVERÍAS O SINIESTRADOS!  NO IMPORTA EL ESTADO DEL VEHÍCULO.</bold><br/><br/><bold>TENEMOS INSTALACIONES CON TALLER PROPIO DE MECÁNICA, CHAPA Y PINTURA PARA DEJAR TU COCHE EN PERFECTO ESTADO</bold><br/><br/><br/><span class="cartel2">¡TE PAGAMOS EN 15 MINUTOS!</span><br/><br/>',

				image: ['gestion2.jpg','gestion6.jpg','gestion4.jpg']

			},

			{

				text: '<a id="vender"><span class="lista-item-text-title3">COMPRAMOS TU COCHE:</span></a><br/>Si lo que deseas es vender tu coche, nosotros te lo compramos.<br/><br/>Te aseguramos el pago de forma inmediata en cuanto tu coche esté tasado.<br/><br/>Máxima tasación posible y <bold>¡PAGAMOS EN 15 MINUTOS!</bold><br/><br/><span class="lista-item-text-title3">EL PAGO:</span><br/><bold>G. E. AVALA</bold> Te asegura el pago inmediato por tu coche.<br/><br/>El pago se realizará en el momento de la firma del contrato, ya sea en efectivo, mediante cheque bancario, cheque bancario conformado, transferencia bancaria o como a ti te resulte más cómodo.',

				image: 'gestion5.jpg'

			}]

		},

		text: '<span class="lista-item-text-title3">TENEMOS 2 OFICINAS EN MADRID, EXPOSICIÓN, TALLER Y DEPÓSITO A TU DISPOSICIÓN PARA QUE PUEDAS ACERCARTE CON TU COCHE Y GESTIONAR LA VENTA DE LA MANERA MÁS CÓMODA POSIBLE.</span>',

		textoColumnas: '<bold>OFICINAS, CONCESIONARIO, TALLERES Y EXPOSICIÓN:</bold><br/>Calle munich 13/15<br/>Európolis-Las Rozas<br/>Madrid<br/><br/><br/><bold>TALLER, OFICINA Y DEPÓSITO:</bold><br/>Calle Antonia lancha nº13<br/>Plaza elíptica<br/>Madrid'

	},

	faq:

	{

		meta: 

		{

			title: 'Grupo Avala - Empeños de Coches - Dinero por mi Coche - Empeño Coche',

			description: 'Reinventamos el Empeño de Coches. Préstamos inmediatos hasta el 85% del valor de su vehículo. Liquidez al instante. Los mas económicos de España',

			keywords: 'empeño coche, empeños de coches, dinero por mi coche, máxima tasacion, credito rapido, avala con tu coche'

		},

		visor:

		{

			items: [

			{

				src: 'faq1.jpg'

			}]		

		},

		text1: '<span class="titulo-texto">PReguntas frecuentes</span><br/><br/>' +

				

				'<span class="lista-item-text-title3">¿En qué consiste el empeño de coches?</span><br/><br/>' +

				'Es la manera más cómoda y sencilla de conseguir dinero de forma urgente sin tener que desprenderse de su coche o vehículo.<br/><br/>' +

				'Si dispone de un coche en propiedad y necesita dinero urgente, empeñar su coche es la mejor opción, ya que podrá disponer del dinero que necesite en 24 horas como máximo, sin tener que renunciar a conducir su vehículo.<br/><bold>G.E. Avala</bold> le garantiza dinero por el empeño de su coche, además de la oportunidad de continuar utilizándolo pagando una cuota cómoda y asequible.<br/><br/>' +

				'El empeño de coches que ofrece <bold>G.E. Avala</bold> es la forma de empeño más favorable y que se mejor se adapta a sus necesidades si necesita dinero urgente,  ya que podrá disfrutar del coche a la vez que obtiene la mayor liquidez.<br/><br/>' +

				

				'<span class="lista-item-text-title3">¿Por qué empeñar el coche con G.E. Avala?</span><br/><br/>' +

				'<span class="lista-item-text-title4">Precio: </span><bold>G.E. Avala</bold> es la empresa de empeño más rentable y que más se preocupa por sus clientes. Consúltenos sin compromiso y compare precios.<br/><br/>' +

				'<span class="lista-item-text-title4">Seguridad: </span>La seguridad de su vehículo está garantizada. Mantenemos su coche con custodia vigilado las 24 horas, incluyendo un seguro a todo riesgo y video vigilancia en caso de empeño con custodia.<br/><br/>' +

				'<span class="lista-item-text-title4">Máxima tasación de su vehículo: </span>Puede obtener hasta el 85% del valor de su coche.<br/><br/>' +

				'<span class="lista-item-text-title4">Pago rápido: </span>Podrá disponer del dinero  en un máximo de 24 horas e incluso <bold>si es en la misma provincia en una hora.</bold> es la empresa de empeño más rentable y que más se preocupa por sus clientes. Consúltenos sin compromiso y compare precios.<br/><br/>' +

				'<span class="lista-item-text-title4">Atención personalizada: </span>Si tiene cualquier consulta, puede ponerse en contacto con nosotros en el <bold>teléfono gratuito ' + raw.tfnoDoble + '</bold> dónde le asesoraremos y resolveremos todas sus dudas.<br/><br/>' +

				'<span class="lista-item-text-title4">Máxima flexibilidad y discreción: </span><bold>G.E. Avala</bold> le da la posibilidad de continuar usando su coche una vez realizado el empeño para continuar con su rutina habitual. Además, podrá recuperar su coche en el momento que lo desee, eligiendo el plazo de cancelación de su contrato.<br/><br/>' +

				

				'<span class="lista-item-text-title3">¿Cuáles son las condiciones del servicio?</span><br/><br/>' +

				'Una vez reciba el dinero, dispondrá del tiempo que desee para cancelar el contrato, independientemente del empeño que haya elegido, ya sea la modalidad coche con custodia o coche sin custodia.<br/><br/>',

		

		text2: '<span class="lista-item-text-title3">¿Se puede empeñar un coche aunque tenga deuda?</span><br/><br/>' +

				'Sí. Aceptamos vehículos con deuda.<br/><br/>' +

				'Póngase en contacto con nosotros en nuestro teléfono de atención personalizada: <bold>' + raw.tfnoDoble + '</bold> para solicitar información sobre el empeño de coches con deuda.<br/><br/>' +

				'<span class="lista-item-text-title4">Pago inmediato: </span>El pago se realizará en el momento de la firma del contrato, ya sea en efectivo, por transferencia bancaria, cheque bancario, cheque bancario conformado o como más le convenga.<br/>' +

				'Realice el empeño de su coche o la gestión de <bold>venta en menos de 24 horas</bold> y disfrute <bold>hasta del 85%</bold> del valor de la tasación de su vehículo rápidamente.<br/>' +

				'Si desea <bold>dinero urgente</bold> por su coche contacte con nosotros.<br/><br/>' +

				

				'<span class="lista-item-text-title3">¿Puedo empeñar mi coche aunque no tenga en vigor el seguro, la ITV o el impuesto de circulación?</span><br/><br/>' +

				'Sí. Podrá empeñar su coche con nosotros sin problema independientemente de la situación en la que se encuentre su vehículo.<br/><br/>' +

				'No dude en ponerse en contacto con nosotros en nuestro teléfono de atención personalizada: <bold>' + raw.tfnoDoble + '</bold> para solicitar información sobre el empeño de coches con este tipo de incidencia.<br/>'

	},

	franquicias:

	{

		meta: 

		{

			title: 'Grupo Avala - Franquicias - Empeño de Coches - Empeño de Motos',

			description: 'Reinventamos el Empeño de Coches. Préstamos inmediatos hasta el 85% del valor de su vehículo. Liquidez al instante. Los mas económicos de España',

			keywords: 'empeño coche, empeños de coches, dinero por mi coche, asesoramiento, credito rapido, avala con tu coche, franquicia'

		},

		visor:

		{

			items: [

			{

				src: 'franquicias1.jpg'

			}]		

		},

		text1: 	'<span class="lista-item-text-title3">Forma parte de G. E. Avala:</span><br/><br/>' +

				'La Franquicia G. E. Avala da un servicio de capital dirigido tanto a particulares como a empresas mediante el empeño de todo tipo de vehículos, coches, motos, furgonetas, camiones y todo tipo de vehículo en general.<br/><br/>' +

				'Una franquicia que se va expandiendo por toda la geografía española que genera un gran volumen de negocio y a la vez cumple con una necesidad social.<br/><br/>' +

				'El equipo de desarrollo realiza un estudio de tu zona, ayudándote a encontrar el local ideal para tu proyecto.<br/>' +

				'Prepararemos un plan de negocio con una estimación de la inversión y una proyección de negocio.<br/>' +

				'Avala con tu Coche cuenta con personal especializado en la instalación de negocios y te acompañamos en todas las etapas del proceso.<br/><br/>' +

				'G. E. Avala la empresa más grande de empeños de España.<br/><br/>' +



				'<span class="lista-item-text-title3">¿Qué les ofrecemos a nuestros franquiciados?</span><br/><br/>' +

				'G. E. Avala le garantiza los clientes, enviándole los contactos de los clientes que demandan un empeño en su zona.<br/>' +

				'Le proporcionamos todas las herramientas necesarias para la iniciación de la actividad.<br/><br/>' +

				'<span class="lista-item-text-title4">Asesoramiento telefónico Gratuito: </span>Ponemos a su disposición una serie de expertos en el teléfono que atenderán todas las dudas que puedan surgirle con el día a día.<br/><br/>' +

				'<span class="lista-item-text-title4">Asesoramiento Inmobiliario: </span>El equipo de desarrollo realiza un estudio de tu zona, ayudándote a encontrar el local ideal para tu proyecto, ya sea en compra o en alquiler.<br/><br/>' +

				'<span class="lista-item-text-title4">Estudio Avanzado: </span>estudiamos la oferta y la demanda en el sector de Empeño de coches de su zona, recomendándole la mejor estrategia de negocio a seguir.<br/><br/>' +

				'<span class="lista-item-text-title4">Asesoramiento Legal: </span>G. E. Avala ofrece a los franquiciados asesoramiento legal disponiendo de un equipo de abogados que resolverán todas sus dudas.<br/>' +

				'Únase a G. E. Avala. Y contara con todo asesoramiento y respaldo de la mayor empresa de empeños de España.<br/><br/>' +

				'<span class="lista-item-text-title4"> </span><br/><br/>',

		

		text2: 	'<span class="lista-item-text-title3">Inversión Garantizada:</span><br/><br/>' +

				'¡G. E. Avala garantiza la inversión de sus franquiciados!<br/>' +

				'Garantizamos la compra del stock al franquiciado si el cliente transcurrido el plazo acordado en contrato de empeño no vuelve a recoger su vehículo.<br/><br/>' +



				'<span class="lista-item-text-title3">¿Cómo funciona G. E. Avala?</span><br/><br/>' +

				'El interesado se dirige a nuestras instalaciones con el vehículo que desea empeñar.<br/>' +

				'Se procede a la comprobación del vehículo así como de la documentación (esta debe estar en regla).<br/>' +

				'Se firma la operación.<br/>' +

				'Se efectúa el pago.<br/><br/>' +

				

				'<span class="lista-item-text-title3">¿Qué pasa con el vehículo?</span><br/><br/>' +

				'<span class="lista-item-text-title4">En el Empeño con Custodia: </span>El cliente deposita el vehículo en las instalaciones del franquiciado con el que firma el contrato.<br/><br/>' +

				'<span class="lista-item-text-title4">En el Empeño sin Custodia: </span>El cliente disfruta del vehículo durante la duración del contrato.<br/><br/>' +



				'<span class="lista-item-text-title3">¿Si el cliente no retira el vehículo?</span><br/><br/>' +

				'La Franquicia garantiza en contrato la compra de todo el Stock. Sin gasto para el franquiciado.'

	},

	contacto:

	{

		meta: 

		{

			title: 'Grupo Avala - Empeña tu Coche - Dinero por mi Coche - Aval Coche - Dinero Urgente',

			description: 'Reinventamos el Empeño de Coches. Préstamos inmediatos hasta el 85% del valor de su vehículo. Liquidez al instante. Los mas económicos de España',

			keywords: 'empeño coche, empeños de coches, dinero por mi coche, máxima tasacion, credito rapido, avala con tu coche, aval, vehiculo'

		},

		titleCartel: [	'La 1º empresa de españa que se empeña por ti.',

						'No empeñes tu coche, avalalo.',

						'El cliente siempre gana.'],

		text:	'<span class="lista-item-text-title3">contacte con nosotros en los siguientes teléfonos:</span><br/><br/>' +

				'<span class="lista-item-text-title1">' + raw.tfnoDoble + '</span><br/><br/>' +

				'<span class="lista-item-text-title1">' + raw.tfnoMovil + '</span><br/><br/>' +

				'<span class="lista-item-text-title3">o por correo electrónico:</span><br/><br/>' +

				'<span class="lista-item-text-title1"><a href="mailto: ' + raw.email + '">' + raw.email + '</a></span><br/><br/>',

		mapas: [

		{

			src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3039.0423720318604!2d-3.7201133!3d40.3857535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227bc368f5ee5%3A0xb91b4afbc24f3f1c!2sCalle+de+Antonia+Lancha%2C+13!5e0!3m2!1ses!2ses!4v1397869892586',

			href: 'https://www.google.com/maps/place/Calle+de+Antonia+Lancha,+13/@40.385768,-3.720112,15z/data=!4m2!3m1!1s0xd4227bc368f5ee5:0xb91b4afbc24f3f1c?hl=es-ES',

			title: 'Oficina y depósito',

			textos: ['c/ Antonia Lancha nº13',

					 '28019 - Madrid',

					 'tel: ' + raw.tfnoDoble + '',

					 'Email: <a href="mailto: ' + raw.email + '">' + raw.email + '</a>'],

			images: [

			{

				src: 'oficina.jpg'

			},

			{

				src: 'puerta.jpg'

			}]

		},

		{

			src: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1517.0113430453393!2d-3.885726405546335!3d40.49688138578063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sc%2F+Munich%2C+13-15+europolis!5e0!3m2!1ses!2ses!4v1397872166236',

			href: 'https://www.google.com/maps/place/Calle+Munich,+13/@40.4971547,-3.8855011,17z/data=!3m1!4b1!4m2!3m1!1s0xd4183678c1f8951:0x1cc1c6a953580c82?hl=es-ES',

			title: 'Exposición y concesionario',

			textos: ['Grupo Autoexclusivo',

					 'Polígono Európolis',

					 'c/ Munich, 13-15',

					 '28230 - Las Rozas - Madrid'],

			images: [

			{

				src: 'contacto1.jpg'

			},

			{

				src: 'contacto2.jpg'

			},

			{

				src: 'contacto3.jpg'

			}]

		}],

		formulario:

		{

			title: 'Formulario de contacto',

			fields: [

			{

				type: 'TextField',

				params:

				{

					field: 'nombre',

					width: '49.5%',

					title: 'Nombre'

				}

			},

			{

				type: 'TextField',

				params:

				{

					field: 'telefono',

					width: '49.5%',

					title: 'Teléfono',

					requerido: true,

					validar: 'numero',

					limite: 9,

					minCaracteres: 9

				}

			},

			{

				type: 'TextField',

				params:

				{

					field: 'correo',

					width: '99.5%',

					requerido: true,

					title: 'Correo electrónico',

					validar: 'email'

				}

			},

			{

				type: 'TextArea',

				params:

				{

					field: 'mensaje',

					width: '99.5%',

					title: 'Mensaje'

				}

			}],

			validar: function (field)

			{

				if (field.params.validar)

				{

					var value = field.value;

				

					if (value != '' && value != field.params.title)

					{

						if (value.length < field.params.minCaracteres)

						{

							return ' debe tener como mínimo ' + field.params.minCaracteres + (field.params.minCaracteres == 1 ? ' caracter' : ' caracteres');

						}

					

						if (field.params.validar == 'email')

						{

							if (value.indexOf(' ') >= 0)

							{

								return ' no puede tener espacios';

							}

							else

							{

								var parts = value.split('@');

								

								if (parts.length < 2)

								{

									return ' debe tener una @';

								}

								else if (parts.length > 2)

								{

									return ' sólo puede tener una @';

								}

								else

								{

									var part = parts[0];

									if (part.length == 0)

									{

										return ' debe haber texto antes de la @';

									}

									

									part = parts[1];

									if (part.indexOf('.') < 0)

									{

										return ' debe tener un . después de la @';

									}

									else

									{

										var parts2 = part.split('.');

										

										var text = parts2[parts2.length - 1];

										if (text.length == 0)

										{

											return ' debe haber texto después del .';

										}

										

										text = [];

										for (var i = 0 ; i < parts2.length - 1 ; i++)

										{

											text.push(parts2[i]); 

										}

										

										text = text.join('.');

										if (text.length == 0)

										{

											return ' debe haber texto antes del .';

										}

									}

								}

							}

						}

						else if (field.params.validar == 'decimal')

						{

							var numVal = parseFloat(value);

							

							if (numVal != value)

							{

								return ' debe tener un número';

							}

						}

						else if (field.params.validar == 'numero')

						{

							var numVal = parseInt(value);

							

							if (numVal != value)

							{

								return ' debe tener un número';

							}

						}

					}

				}

				

				return false;

			},

			submit: function (idForm, origen)

			{

				var form = $('#' + idForm);

				

				var fields = form.children();

				var fieldWrong = null;

				var placeholder = '';

				var par = 

				{

					origen: origen

				};

				for (var i = 0 ; i < fields.length ; i++)

				{

					var jField = $(fields[i]);

					

					var value = jField.val();

					if (typeof(value) === 'undefined')

					{

						value = jField.html();

					}



					var required = jField.attr('required');

					

					if (required)

					{

						placeholder = jField.attr('placeholder');

						if (value == '' || value == placeholder)

						{

							fieldWrong = jField;

							break;

						}

					}

					

					var field = this.fields[i];

					if (field)

					{

						field.value = value;

						par[field.params.field] = value;

						var validar = this.validar(field);

						if (validar)

						{

							alert(field.params.title + validar);

							return;

						}

					}

				}

				

				if (fieldWrong != null)

				{

					alert('Es necesario rellenar ' + placeholder);

					return;

				}

				

				$.post("php/contacto.php", par, function (response)

				{

					var res = eval('(' + response + ')');

					

					if (res.mailAvala)

					{

						alert ("Ha habido problemas para enviar el formulario.");

					}

					else

					{

						alert("Petición enviada correctamente,\nrecibirá un email y un sms confirmándolo.");

					}

				});

			}

		}

	},

	movil:

	{

		logo: 'logo.png',

		logosTfno: ['icono_whatsapp_movil.png', 'icono_line_movil.png', 'icono_telblanco_movil.png'],

		imagenC2C: 'clicktocall-webmovil.png',

		menu:

		{

			titulo: 'MENU',

			items: [

			{

				id: 'llamamos',

				text: 'TE LLAMAMOS',

				funcion: 'mostrarLlamamosMovil'

			},

			{

				id: 'contacto',

				text: 'CONTACTO',

				funcion: 'mostrarContactoMovil'

			}]

		},

		contacto:

		{

			cartel: 'La 1º empresa de españa que se empeña por ti.',

			iconoMapa: 'googlemaps.png',

			texto: [

			{

				text: 'contacte con nosotros en los siguientes teléfonos:',

				'class': 'contacto-texto1-movil'

			},

			{

				text:	'<a href="tel: ' + raw.numFijo + '"><img src="./images/icono_telrojo_movil.png"/></a>' + raw.tfnoFijo + '&nbsp;' + 

						'<a href="tel: ' + raw.numMovil + '"><img src="./images/icono_telrojo_movil.png"/></a>' + raw.tfnoMovil,

				'class': 'contacto-texto2-movil'

			},

			{

				text: 'o por correo electrónico:',

				'class': 'contacto-texto1-movil'

			},

			{

				text: '<a href="mailto:' + raw.email + '">' + raw.email + '</a>',

				'class': 'contacto-texto2-movil'

			}]

		},

		lista: [

		{

			title: 'EMPEÑO 100% SEGURO',

			src: 'icono_seguro_movil.png',

			text: [	'EL PRIMER Y ÚNICO MODELO DE EMPEÑO EN EL QUE EL CLIENTE SIEMPRE GANA',

					'SOMOS LA PRIMERA EMPRESA DE ESPAÑA QUE APLICA LA "DACIÓN EN PAGO" AL EMPEÑO DE COCHES',

					'¡SE ACABÓ EL PERDER EL DINERO Y EL COCHE!']

		},

		{

			title: 'EMPEÑAR MI COCHE',

			src: 'icono_empenar_movil.png',

			text: [	'LA FORMA MÁS RÁPIDA DE CONSEGUIR DINERO POR TU COCHE',

					'TE DAMOS HASTA EL 85% DEL VALOR DEL COCHE CON LA MÁXIMA TASACIÓN',

					'DINERO URGENTE POR TU COCHE  MIENTRAS LO SIGUES CONDUCIENDO']

		},

		{

			title: 'GESTIÓN DE VENTA',

			src: 'icono_gestion_movil.png',

			text: [	'EL PRECIO LO PONES TÚ',

					'TE ADELANTAMOS HASTA EL 65% DEL VALOR DE TU COCHE EN EL ACTO',

					'ARREGLAMOS TU COCHE Y FINANCIAMOS LA REPARACIÓN',

					'ACEPTAMOS COCHES COMO FORMA DE PAGO']

		},

		{

			title: 'VENDER MI COCHE',

			src: 'icono_vender_movil.png',

			text: [	'COMPRAMOS TU COCHE POR LA MÁXIMA TASACIÓN POSIBLE',

					'TE PAGAMOS EN 15 MINUTOS',

					'SEA CUAL SEA LA MARCA Y EL MODELO TE DAMOS EL MEJOR PRECIO POR TU COCHE']

		}]

	}

};