$(document).ready(function() {

	prepararMenu();

	prepararSecciones();

});

function prepararMenu() {
	$('.menu-item-movil').on('click', function() {
		$('.lista-text-movil').slideUp(500, function() {
			$(this).remove();
		});
		$(this).next().slideToggle();
	});
}

function prepararSecciones() {
	$('.lista-item-movil').on('click', function(e) {

		var lastItem = $('.lista-text-movil');
		var lastId = lastItem.attr('id');
		var item = $(this);
		var id = item.attr('id');
		var index = id.split('-');

		index = index[index.length - 1];
		$('.menu-container-movil').slideUp(500);
		lastItem.slideUp(500, function() {
			$(this).remove()
		});

		if (lastId != id + '-text') {
			var divText = $('<div/>', {
				id : id + '-text',
				'class' : 'lista-text-movil'
			});

			divText.hide();
			item.after(divText);

			var arrText = item.data('text').split('|');
			for (var i = 0; i < arrText.length; i++) {
				var text = '-' + arrText[i] + '<br/><br/>';
				divText.append(text);
			}

			divText.slideToggle(500);
		}
	});
}