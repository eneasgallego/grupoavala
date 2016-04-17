$(document).ready(function () {
	$('#llamamos').on('click', function () {
		$('#clicktocall').slideToggle(500);
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
	
	var texto_privacidad = $('#texto_privacidad');
	texto_privacidad.on('click', function () {
		texto_privacidad.hide();
	});
	$('#link_privacidad').on('click', function () {
		var totalHeight = $('body').outerHeight();
		var height = texto_privacidad.outerHeight();
		if (height < totalHeight) {
			texto_privacidad.height(totalHeight);
		}
		texto_privacidad.show();
	});
});
