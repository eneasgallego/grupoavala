$(document).ready(function () {
	$('.pop-up a').on('click', function (e) {
		e.preventDefault();
		$('.pop-up iframe').slideToggle(500);
	});
	
	$('form').on('submit', function () {
		
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
});
