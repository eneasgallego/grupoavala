var esMovil = function() {
	var dispositivo = navigator.userAgent.toLowerCase();
	return (dispositivo.search(/iphone|ipod|ipad|android/) > -1);
};

var play = function () {
		$(document).ready(function() {

			cargarScripts();

			colocarPopUp();

			animarCarteles();
			
			cargarGif();

			prepararTasador();
		});
};

play();

function cargarScripts(scripts) {

	if (!scripts) {
		scripts = [];
		$('script[data-src]').each(function(k, v) {
			scripts.push($(v).data('src'));
		});
	}

	setTimeout(function () {
		console.log(scripts.length);
		if (scripts.length) {
			var url = scripts[0];
			console.log(url);
			var script = $('script[data-src="' + url + '"]');

			script.on('load', function (e) {
				scripts.splice(0, 1);
				cargarScripts(scripts);
			});
			script.attr('src', url);
		}
	}, 1);
}

function colocarPopUp() {
	$('.pop-up, .new-pop-up').each(function (k, v) {
		var popUp = $(v);

		popUp.hasClass('pop-up') && popUp.css('top', '17px').css('left', $($('#cabecera-movil').children()[0]).position().left - popUp.width() + 'px');
		popUp.find('a').on('click', function(e) {
			e.preventDefault();
			popUp.find('iframe').slideToggle(500);
		});
	});
}

function cargarGif() {
	$('#inicio-visor-visor-first').attr('src', 'images/inicio.gif');
}

function animarCarteles() {
	var carteles = $('.cartel');
	for (var i = 0 ; i < carteles.length ; i++) {
		var cartel = $(carteles[i]);
		
		animarCartel(cartel);
	}
}
function animarCartel(cartel) {
	var textos = cartel.children('.cartel-text');
	if (textos.length > 1) {
		var texto = cartel.children('.cartel-text:visible');
		
		cambiarTextoCartel(texto)
	}
}
function cambiarTextoCartel(texto) {
	texto.fadeOut(1000, function () {
		
		var next = texto.next('.cartel-text');
		if (next.length == 0) {
			next = $(texto.parent().children('.cartel-text')[0]);
		}
		next.fadeIn(1000, function () {
			setTimeout(function () {
				cambiarTextoCartel(next);
			}, 1000);
		});
	});
}
function prepararTasador() {
	var form = $('.tasador2');

	form.on('submit', function () {
		var comunidad = $('#comunidad').val();
		if (comunidad == 'Comunidad:*') {
			alert('Debe seleccionar una comunidad.');
		} else if ($('#privacidad').is(":checked")) {
			var form = $('form');
			$.post(form.attr('action'), form.serialize() , function (response) {
				var res = eval('(' + response + ')');

				if (res.mailAvala) {
					alert ("Ha habido problemas para enviar el formulario.");
				} else {
					alert("Petición enviada correctamente,\nrecibirá un email confirmándolo.");
				}
			});
		} else {
			alert('Debe aceptar nuestra política de privacidad.');
		}
		
		return false;
	});

	var texto_privacidad = $('#texto_privacidad, #fondo_texto_privacidad');
	texto_privacidad.on('click', function () {
		texto_privacidad.hide();
	});
	$('#link_privacidad, .privacidad').on('click', function () {
		$('#fondo_texto_privacidad').css('height', $('body').height());
		texto_privacidad.show();
	});
}
