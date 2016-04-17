
$(document).ready(function () {
	var app = new App({
		url: 'api.php',
		columns: [{
			nombre: 'nombre',
			texto: 'NOMBRE'
		},{
			nombre: 'provincia',
			texto: 'PROVINCIA'
		},{
			nombre: 'telefono',
			texto: 'TELÉFONO'
		},{
			nombre: 'marca',
			texto: 'MARCA'
		},{
			nombre: 'modelo',
			texto: 'MODELO'
		},{
			nombre: 'km',
			texto: 'KM'
		},{
			nombre: 'cv',
			texto: 'CV'
		},{
			nombre: 'ano',
			texto: 'AÑO'
		},{
			nombre: 'combustible',
			texto: 'COMBUSTIBLE'
		},{
			nombre: 'cilindrada',
			texto: 'CILINDRADA'
		},{
			nombre: 'importe',
			texto: 'IMPORTE'
		},{
			nombre: 'correo',
			texto: 'CORREO'
		},{
			nombre: 'origen',
			texto: 'ORIGEN'
		}]
	});
});

var Field = function (par) {

	var create = function () {
		var el = $('<ul>');
		this.className && el.addClass(this.className);

		this.texto && $('<li><label>' + this.texto + ': </label></li>').appendTo(el);
		
		var input = $('<input type="' + this.type + '" />').appendTo(el).on('change', function (e) {
			this.setValor(this.el.find('input').val());
		}.bind(this));
		this.nombre && input.attr('name', this.nombre);
		this.valor && input.attr('value', this.valor);
	
		this.el = el;
	}.bind(this);

	var getValor = function () {
		return this.valor;
	}.bind(this);
	var setValor = function (valor) {
		this.valor = valor;
		this.el.find('input').val(valor);
		this.onChange(this, valor);
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		type: 'text',
		texto: '',
		nombre: '',
		valor: '',
		getValor: getValor,
		setValor: setValor,
		onChange: function(){},
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var Button = function (par) {

	var create = function () {
		var el = $('<button type="' + this.type + '">');
		this.className && el.addClass(this.className);

		this.texto && el.append(this.texto);

		this.handler && el.click(this.handler);
		
		this.el = el;
	}.bind(this);

	var self = $.extend(this, {
		type: 'button',
		className: '',
		texto: '',
		handler: function (){},
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var Form = function (par) {

	var create = function () {
		var el = $('<form>');
		this.className && el.addClass(this.className);

		this.method && el.attr('method', this.method);
		this.action && el.attr('action', this.action);

		this.handler && el.submit(this.handler);

		this.titulo && $('<h1>' + this.titulo + '</h1>').appendTo(el);
		this.campos.length && createFields(el);
		this.botones.length && createButtons(el);
		
		this.el = el;
	}.bind(this);
	var createFields = function (el) {
		var ul = $('<ul>').appendTo(el);
		for (var i = 0 ; i < this.campos.length ; i++) {
			var campo = this.campos[i];

			this.camposEl.push(new Field($.extend(campo, {
				parent: this,
				renderTo: $('<li>').appendTo(ul)
			})));
		}
	}.bind(this);
	var createButtons = function (el) {
		var ul = $('<ul>').appendTo(el);
		for (var i = 0 ; i < this.botones.length ; i++) {
			var boton = this.botones[i];

			this.botonesEl.push(new Button($.extend(boton, {
				parent: this,
				renderTo: $('<li>').appendTo(ul)
			})));
		}
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		method: '',
		action: '',
		titulo: '',
		campos: [],
		botones: [],
		camposEl: [],
		botonesEl: [],
		handler: function (){},
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var Login = function (par) {

	var create = function () {
		var el = $('<div class="formLogin">');
		this.className && el.addClass(this.className);

		this.formEl = new Form({
			parent: this,
			method: 'post',
			action: this.url,
			handler: this.login,
			titulo: 'Login',
			campos: this.campos,
			botones: this.botones,
			renderTo: el
		});
		
		$('<div class="error"></div>').appendTo(el);
		
		this.el = el;
	}.bind(this);

	var setError = function (texto) {
		var error = this.el.find('.error');
		if (texto) {
			error.html(texto);
		} else {
			error.html('');
		}
	}.bind(this);

	var login = function(e) {
		e.preventDefault();
		var form = $(e.currentTarget);

		$.ajax({
			type: 'post',
			url: form.attr('action'),
			data: form.serialize(),
			success: function (res) {
				if (res == 'success') {
					this.parent.makeGrid();
				} else {
					setError('Login o Password incorrectos.');
				}
			}.bind(this),
			error:  function (res) {
				setError('No se ha podido comunicar con el servidor.');
			}.bind(this)
		});
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		url: '',
		campos: [{
			texto: 'Login',
			nombre: 'login'
		},{
			texto: 'Password',
			nombre: 'password',
			type: 'password'
		},{
			nombre: 'servicio',
			type: 'hidden',
			valor: 'login'
		}],
		botones: [{
			type: 'submit',
			texto: 'Login'
		}],
		login: login,
		formEl: null,
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};


var Velo = function (par) {

	var create = function () {
		var el = $('<div class="velo">');
		this.className && el.addClass(this.className);

		this.html && el.html(this.html);

		this.closable && this.parent && el.click(function (e) {
			this.parent.close && this.parent.close();
		}.bind(this));

		this.el = el;
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		closable: true,
		html: '',
		parent: null,
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var ConfirmBox = function (par) {

	var create = function () {
		this.veloEl = new Velo({
			parent: this,
			renderTo: $('body')
		});
		var el = $('<div class="confirmBox">').appendTo($('body'));
		this.className && el.addClass(this.className);

		this.html && el.html(this.html);

		if (typeof(this.okHandler) === 'function') {
			this.toolbarItems.push({
				xtype: 'Button',
				texto: 'Aceptar', 
				handler: function (e) {
					this.okHandler(e, this);
				}.bind(this)
			});
		}
		if (typeof(this.cancelHandler) === 'function') {
			this.toolbarItems.push({
				xtype: 'Button',
				texto: 'Cancelar', 
				handler: function (e) {
					this.cancelHandler(e, this);
				}.bind(this)
			});
		}

		this.toolbarEl = new Toolbar({
			parent: this,
			className: 'confirm-toolbar',
			items: this.toolbarItems,
			renderTo: el
		});

		var $window = $(window);

		var windowWidth = $window.innerWidth();
		var windowHeight = $window.innerHeight();
		var elWidth = el.outerWidth();
		var elHeight = el.outerHeight();
		var left = (windowWidth - elWidth) / 2;
		var top = (windowHeight - elHeight) / 2;
		el.offset({
			top: top,
			left: left
		});

		this.el = el;
	}.bind(this);
	var close = function () {
		this.el.remove();
		this.veloEl.el.remove();
		delete this;
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		html: '',
		toolbarItems: [],
		datos: {},
		close: close,
		toolbarEl: null
	});

	self = $.extend(self, par);

	create();
};
var Timer = function (par) {
	var on = function () {
		this.el.show();
	}.bind(this);
	var off = function () {
		this.el.hide();
	}.bind(this);

 	this.onChangePage = function(){};

	$.extend(this, new Velo($.extend(par, {
 		className: (par.className ? par.className : '') + ' timer',
 		on: on,
 		off: off,
 		html: par.html ? par.html : 'CARGANDO',
 		closable: false,
 		renderTo: par.renderTo ? par.renderTo : $('body')
	})));
};

var Toolbar = function (par) {

	var create = function () {
		var el = $('<ul class="toolbar">');
		this.className && el.addClass(this.className);

		this.items.length && createItems(el);

		this.el = el;
	}.bind(this);
	var createItems = function (el) {
		for (var i = 0 ; i < this.items.length ; i++) {
			var item = this.items[i];

			if (typeof(item) === 'string') {
				this.itemsEl.push($(item).appendTo($('<li>').appendTo(el)));
			} else if (typeof(item) === 'object') {
				if (typeof(window[item.xtype]) === 'function') {
					this.itemsEl.push(new window[item.xtype]($.extend(item, {
						parent: this,
						renderTo: $('<li>').appendTo(el)
					})));
				} else {
					this.itemsEl.push(item);
				}
			}
		}
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		items: [],
		itemsEl: [],
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var Paginator = function (par) {
	var getNumPage = function () {
		return this.itemsEl[0].getValor();
	}.bind(this);
	var setMinPage = function (valor) {
		if (valor < 1) {
			valor = 1;
		}
		if (valor > this.getTotalPage()) {
			valor = this.getTotalPage();
		}
		this.itemsEl[4].setValor(valor);
	}.bind(this);
	var getMinPage = function () {
		return this.itemsEl[4].getValor();
	}.bind(this);
	var setTotalPage = function (valor) {
		this.itemsEl[5].find('span').html(valor);
	}.bind(this);
	var getTotalPage = function (valor) {
		return isNaN(this.itemsEl[5].find('span').html()) ? 0 : parseInt(this.itemsEl[5].find('span').html());
	}.bind(this);
	var changePage = function (cambio) {
		var minPage = parseInt(this.getMinPage());
		if (!isNaN(cambio)) {
			minPage += parseInt(cambio);
		}
		this.setMinPage(minPage);

		this.onChangePage(this);
	}.bind(this);
	var goFirst = function () {
		this.setMinPage(1);
		this.changePage();
	}.bind(this);
	var goPrev = function () {
		this.changePage(-1);
	}.bind(this);
	var goNext = function () {
		this.changePage(1);
	}.bind(this);
	var goLast = function () {
		this.setMinPage(this.getTotalPage());
		this.changePage();
	}.bind(this);

 	this.onChangePage = function(){};

	$.extend(this, new Toolbar($.extend(par, {
 		className: (par.className ? par.className : '') + ' paginator',
 		getNumPage: getNumPage,
 		getMinPage: getMinPage,
 		setMinPage: setMinPage,
 		getTotalPage: getTotalPage,
 		setTotalPage: setTotalPage,
 		changePage: changePage,
 		items: [{
 			xtype: 'Field',
 			type: 'number',
 			texto: 'Filas por página',
 			valor: par.rowsPage ? par.rowsPage : 30
 		},{
 			xtype: 'Button',
 			className: 'actualizar',
 			texto: 'Actualizar',
 			handler: changePage
 		},{
 			xtype: 'Button',
 			texto: '<<',
 			handler: goFirst
 		},{
 			xtype: 'Button',
 			texto: '<',
 			handler: goPrev
 		},{
 			xtype: 'Field',
 			type: 'number',
 			valor: 1
 		},'<div class="total-page"> de <span></span></div>',{
 			xtype: 'Button',
 			texto: 'ir',
 			handler: changePage
 		},{
 			xtype: 'Button',
 			texto: '>',
 			handler: goNext
 		},{
 			xtype: 'Button',
 			texto: '>>',
 			handler: goLast
 		}]
	})));
};

var Cell = function (par) {

	var create = function () {
		var el = this.head ? $('<th>') : $('<td>');
		this.className && el.addClass(this.className);

		this.valor && el.append('<span>' + this.valor + '</span>');

		this.onCellClick && el.click(function (e){
			this.onCellClick(e, this);
		}.bind(this));

		this.onCellMouseOver && el.on('mouseover', function (e){
			this.onCellMouseOver(e, this);
		}.bind(this));

		this.el = el;
	}.bind(this);
	var setValor = function (valor) {
		if (this.valor != valor) {
			this.el.html(valor);
			this.valor = valor;
			this.parent.datos[this.column.nombre] = valor;
		}
	}.bind(this);
	var changeOrden = function () {
		
		var orden = this.orden == 'asc';

		$(this.parent.cellsEl).each(function (k, v) {
			v.setOrden();
		});

		this.setOrden(orden ? 'desc' : 'asc');
	}.bind(this);
	var setOrden = function (orden) {
		var panel = this.parent.parent.parent.parent;
		if (this.orden != orden) {
			this.orden = orden;
			if (orden == 'asc') {
				this.el.removeClass('desc').addClass('asc');
			} else if (orden == 'desc') {
				this.el.addClass('desc').removeClass('asc');
			} else {
				this.orden = '';
				this.el.removeClass('desc').removeClass('asc');
			}
			panel.orden = this.column.nombre;
			panel.ordenDesc = this.orden;
		}
	}.bind(this);


	var self = $.extend(this, {
		className: '',
		valor: '',
		orden: '',
		head: false,
		column: {},
		onCellClick: function (){},
		onCellMouseOver: function (){},
		setValor: setValor,
		changeOrden: changeOrden,
		setOrden: setOrden,
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var Row = function (par) {

	var create = function () {
		var el = $('<tr>');
		this.className && el.addClass(this.className);

		this.onRowMouseOver && el.on('mouseover', function (e){
			this.onRowMouseOver(e, this);
		}.bind(this));

		if (this.head) {
			createHeads(el);
		} else {
			createCells(el);
		}

		this.el = el;
	}.bind(this);
	var createHeads = function (el) {
		for (var i = 0 ; i < this.columns.length ; i++) {
			var column = this.columns[i];
			if (!column.hidden) {
				this.cellsEl.push(new Cell({
					parent: this,
					head: true,
					column: column,
					valor: column.texto,
					onCellClick: this.onHeadClick,
					onCellMouseOver: this.onCellMouseOver,
					renderTo: el
				}));
			}
		}
	}.bind(this);
	var createCells = function (el) {
		for (var i = 0 ; i < this.columns.length ; i++) {
			var column = this.columns[i];
			if (!column.hidden) {
			    var val = this.datos[column.nombre];

				this.cellsEl.push(new Cell({
					parent: this,
					column: column,
					valor: val,
					onCellClick: this.onCellClick,
					onCellMouseOver: this.onCellMouseOver,
					renderTo: el
				}));
			}
		}
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		head: false,
		datos: {},
		columns: [],
		cellsEl: [],
		onCellClick: function (){},
		onHeadClick: function (){},
		onRowMouseOver: function (){},
		onCellMouseOver: function (){},
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var Table = function (par) {

	var create = function () {
		var el = $('<table>');
		this.className && el.addClass(this.className);
		
		createRows(el);

		this.el = el;
	}.bind(this);
	var createHead = function (el) {
		this.headRow = new Row({
			parent: this,
			columns: this.columns,
			head: true,
			onCellMouseOver: this.onCellHeadMouseOver,
			onHeadClick: this.onHeadClick,
			renderTo: el
		});
	}.bind(this);
	var createRows = function (el) {
		createHead(el);
		for (var i = 0 ; i < this.datos.length ; i++) {
			var val = this.datos[i];

			this.rowsEl.push(new Row({
				parent: this,
				columns: this.columns,
				datos: val,
				onCellClick: this.onCellClick,
				onRowMouseOver: this.onRowMouseOver,
				renderTo: el
			}));
		}
	}.bind(this);
	var setDatos = function (datos) {
		this.datos = datos;
		this.rowsEl = [];
		this.el.find('tr').remove();
		createRows(this.el);
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		datos: [],
		columns: [],
		rowsEl: [],
		onCellClick: function (){},
		onHeadClick: function (){},
		onRowMouseOver: function (){},
		onCellHeadMouseOver: function (){},
		setDatos: setDatos,
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};
var TableHead = function (par) {
	return new Table($.extend(par, {
 		className: (par.className ? par.className : '') + ' head'
	}));
};
var Grid = function (par) {

	var create = function () {
		var el = $('<div class="grid">');
		this.className && el.addClass(this.className);

		this.headEl = new TableHead({
			parent: this,
			columns: this.columns,
			onHeadClick: this.onHeadClick,
			onCellHeadMouseOver: this.onCellHeadMouseOver,
			renderTo: $('<div class="divHead">').appendTo(el)
		});

		this.tableEl = new Table({
			parent: this,
			className: 'table',
			datos: this.datos,
			columns: this.columns,
			onCellClick: this.onCellClick,
			onRowMouseOver: this.onRowMouseOver,
			renderTo: $('<div class="divTable">').appendTo(el)
		});

		if (this.rowItems.length) {
			this.toolbarEl = new Toolbar({
				parent: this,
				className: 'row-toolbar',
				items: this.rowItems,
				renderTo: el
			});
		}
		this.onScroll && this.tableEl.el.parent().on('scroll', this.onScroll);
		this.timerEl = new Timer({
			parent: this,
			renderTo: el
		});

		this.el = el;
	}.bind(this);
	var setDatos = function (datos, doResize) {
		this.datos = datos;
		this.tableEl.setDatos(datos);
		doResize && this.resize();
	}.bind(this);
	var resize = function() {
    	var headCells = this.headEl.el.find('th').css('width', 'auto');
    	var tableCells = this.tableEl.el.find('th').css('width', 'auto');
    	headCells.each(function (k, v) {
    		var headCell = $(v);
    		var tableCell = $(tableCells[k]);

    		var widthHead = headCell.outerWidth();
    		var widthTable = tableCell.outerWidth();

    		var width = widthHead > widthTable ? widthHead : widthTable;
			tableCell.outerWidth(width);
			headCell.outerWidth(width);
    	});

		var widthHead = this.headEl.el.parent().outerWidth();
		var widthTable = this.tableEl.el.parent().outerWidth();
		var width = widthHead > widthTable ? widthHead : widthTable;
		if (widthHead < widthTable) {
			this.headEl.el.parent().outerWidth(widthTable);
			resize();
		}
  	}.bind(this);

	var self = $.extend(this, {
		className: '',
		rowItems: [],
		datos: [],
		columns: [],
		headEl: {},
		tableEl: {},
		onHeadClick: function (){},
		onCellClick: function (){},
		onScroll: function (){},
		onRowMouseOver: function (){},
		setDatos: setDatos,
		resize: resize,
		renderTo: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};

var Panel = function (par) {

	var create = function () {
		var el = $('<div class="panel">');
		this.className && el.addClass(this.className);

		this.toolbarEl = new Toolbar({
			parent: this,
			items: [{
				xtype: 'Paginator',
				onChangePage: this.onChangePage
			},{
				xtype: 'Button',
				texto: 'Exportar', 
				handler: function () {
					this.exportar();
				}.bind(this)
			},{
				xtype: 'Button',
				texto: 'Filtrar', 
				handler: function (e) {
					$(e.currentTarget).toggleClass('pushed');
					this.cancelarFilter();
				}.bind(this)
			},{
				xtype: 'Button',
				texto: 'Salir', 
				handler: function () {
					$.ajax({
						type: 'post',
						url: this.url,
						data: {servicio: 'salir'},
						complete: function () {
							this.parent.makeLogin();
						}.bind(this)
					});
				}.bind(this)
			},'<div class="error"></div>]'],
			renderTo: el
		});
		this.paginatorEl = this.toolbarEl.itemsEl[0];

		this.gridEl = new Grid({
			parent: this,
			rowItems: this.rowItems,
			datos: this.datos,
			columns: this.columns,
			onHeadClick: this.onHeadClick,
			onCellClick: this.onCellClick,
			onScroll: this.onScroll,
			onRowMouseOver: this.onRowMouseOver,
			onCellHeadMouseOver: this.onCellHeadMouseOver,
			renderTo: el
		});

		this.inputEl = $('<input class="floatInput"/>')
			.on('keypress', this.onKeyPress)
			.on('blur', this.onBlur).appendTo(el);

		this.filterEl = $('<input class="floatFilter"/>')
			.on('keypress', this.onKeyPressFilter)
			.on('blur', this.onBlurFilter).appendTo(el);

		this.el = el;
	}.bind(this);
	var cargar = function (callback) {
		var self = this;

		this.gridEl.timerEl.on();

		$.ajax({
			type: 'post',
			url: this.url,
			data: this.getParametros(),
			success: function (res) {
				this.setDatos($.parseJSON(res));
				this.gridEl.timerEl.off();
				typeof(callback) === 'function' && callback();
			}.bind(this),
			error:  function (res) {
				setError('No se ha podido comunicar con el servidor.');
			}.bind(this)
		});
	}.bind(this);
	var exportar = function (callback) {
		var self = this;

		var form = $('<form action="' + this.url + '" target="_blank">');
		var parametros = this.getParametros('exportar');
		for (var key in parametros) {
			var val = parametros[key];
			
			if (typeof(val) === 'object') {
				for (var key2 in val) {
					crearCampo(key + '[' + key2 + ']', val[key2]);
				}
			} else {
				crearCampo(key, val);
			}
		}

		function crearCampo(key, val) {
			$('<input type="hidden" name="' + key + '" value="' + val + '">').appendTo(form);
		}

		form.appendTo('body')
			.submit()
			.remove();

	}.bind(this);
	var getNumPage = function () {
		return this.paginatorEl.getNumPage();
	}.bind(this);
	var getMinPage = function () {
		return this.paginatorEl.getMinPage();
	}.bind(this);
	var getParametros = function (exportar) {
		var ret = {
			servicio: exportar ? 'exportar' : 'cargar',
			orden: this.orden,
			ordenDesc: this.ordenDesc,
			filters: this.filters
		};
		if (!exportar) {
			ret['numPage'] = this.getNumPage();
			ret['minPage'] = this.getMinPage();
		}

		return ret;
	}.bind(this);
	var setDatos = function (datos) {
		this.datos = datos.datos;
		this.gridEl.setDatos(this.datos);
		this.paginatorEl.setTotalPage(datos.totalPage);
		resize();
	}.bind(this);
	var resize = function () {
		this.gridEl.resize();

    	var parentHeight = this.el.parent().outerHeight();
    	var toolbarHeight = this.toolbarEl.el.outerHeight();
    	var gridHeight = parentHeight - toolbarHeight;
    	this.gridEl.el.outerHeight(gridHeight);

    	var headHeight = this.gridEl.headEl.el.outerHeight();
    	var tableHeight = gridHeight - headHeight;
    	this.gridEl.tableEl.el.parent().outerHeight(tableHeight);
    	if (this.gridEl.tableEl.el.outerHeight() > tableHeight) {
    		this.gridEl.tableEl.el.css('margin-right', '16px');
    		this.gridEl.headEl.el.parent().css('padding-right', '16px');
    	}
	}.bind(this);
	var onScroll = function (e) {
		this.cancelarInput();
	}.bind(this);
	var cancelarInput = function () {
		this.inputEl.hide();
		this.inputElCell = null;
	}.bind(this);
	var setInput = function (cell) {
		this.inputEl.show();
		this.inputEl.val(cell.valor);
		this.inputEl.offset(cell.el.offset());
		this.inputEl.outerWidth(cell.el.outerWidth());
		this.inputEl.outerHeight(cell.el.outerHeight());
		this.inputEl.select();
		this.inputElCell = cell;
	}.bind(this);
	var onCellClick = function (e, cell) { 
		e.preventDefault();

		if (this.inputEl.is(":visible")) {
			guardar(function () {
				setInput(cell)
			});
		} else {
			setInput(cell);
		}
	}.bind(this);
	var guardar = function (callback) {
		var doCallback = function () {
			if (typeof(callback) == 'function') {
				callback();
			}
		}.bind(this);
		var inputElCell = this.inputElCell;
		var valorNuevo = this.inputEl.val();
		var valorViejo = this.inputElCell.parent.datos[inputElCell.column.nombre];
		this.cancelarInput();
		if (valorNuevo != valorViejo) {
			$.ajax({
				type: 'post',
				url: this.url,
				data: {
					servicio: 'guardar',
					id: inputElCell.parent.datos.id,
					campo: inputElCell.column.nombre,
					valor: valorNuevo
				},
				success: function (res) {
					
					if (res == 'success') {
						inputElCell.setValor(valorNuevo);
						doCallback();
					} else {
						setError(res);
						doCallback();
					}
				},
				error:  function (res) {
					setError('No se ha podido comunicar con el servidor.');
					doCallback();
				}
			});
		} else {
			doCallback();
		}
	}.bind(this);
  	var onKeyPress = function (e) {
  		if (e.keyCode == 13) {
  			guardar();
  		} else if (e.keyCode == 27) {
  			this.cancelarInput();
  		}
  	}.bind(this);
	var onBlur = function (e) {
		this.inputElCell && guardar();
	}.bind(this);
  	var onKeyPressFilter = function (e) {
  		if (e.keyCode == 13) {
  			filtrar();
  		} else if (e.keyCode == 27) {
  			this.cancelarInput();
  		}
  	}.bind(this);
	var onBlurFilter = function (e) {
		this.inputElCell && filtrar();
	}.bind(this);
	var onHeadClick = function (e, cell) {
		e.preventDefault();
		
		if (this.toolbarEl.itemsEl[2].el.hasClass('pushed')) {
			if (this.filterEl.is(":visible")) {
				filtrar(function () {
					setInputFilter(cell)
				});
			} else {
				setInputFilter(cell);
			}
		} else {
			cell.changeOrden();
			this.cargar();
		}
	}.bind(this);

	var cancelarFilter = function () {
		this.filterEl.hide();
		this.filterElCell = null;
	}.bind(this);
	var filtrar = function (callback) {
		var doCallback = function () {
			if (typeof(callback) == 'function') {
				callback();
			}
		}.bind(this);
		var filterElCell = this.filterElCell;
		var valorNuevo = this.filterEl.val();
		var valorViejo = this.filters[filterElCell.column.nombre];
		this.cancelarFilter();
		if (valorNuevo != valorViejo) {
			this.setFilter(filterElCell.column.nombre, valorNuevo, doCallback);
		} else {
			doCallback();
		}
		filterElCell.el[(this.filters[filterElCell.column.nombre] ? 'add' : 'remove') + 'Class']('filter');
		filterElCell.el.attr('title', valorNuevo ? valorNuevo : '');
	}.bind(this);
	var setFilter = function (campo, valor, callback) {
		this.filters[campo] = valor;
		this.cargar(callback);
	}.bind(this);
	var setInputFilter = function (cell) {
		this.filterEl.show();
		this.filters[cell.column.nombre] && this.filterEl.val(this.filters[cell.column.nombre]);
		this.filterEl.offset({
			top: cell.el.offset().top + cell.el.outerHeight(),
			left: cell.el.offset().left
		});
		this.filterEl.outerWidth(cell.el.outerWidth());
		this.filterEl.select();
		this.filterElCell = cell;
	}.bind(this);
	var onRowMouseOver = function (e, row) {
		e.preventDefault();

		this.gridEl.toolbarEl.el.data('id', row.datos.id);
		this.gridEl.toolbarEl.el.show();
		this.gridEl.toolbarEl.el.offset({
			top: row.el.offset().top,
			left: 0
		});
		this.gridEl.toolbarEl.row = row;
	}.bind(this);
	var onChangePage = function (paginator) {
		this.cargar();
	}.bind(this);
	var borrar = function () {
		var id = this.gridEl.toolbarEl.el.data('id');
		var row = this.gridEl.toolbarEl.row;

		var confirmBox = new ConfirmBox({
			html: '¿Seguro que quieres borrar?',
			okHandler: function (e, cb) {
				$.ajax({
					type: 'post',
					url: this.url,
					data: {
						servicio: 'borrar',
						id: id
					},
					success: function (res) {
						
						if (res == 'success') {
							row.el.remove();
							var index = this.datos.indexOf(row.datos);
							this.datos.splice(index, 1);

							index = this.gridEl.tableEl.rowsEl.indexOf(row);
							this.gridEl.tableEl.rowsEl.splice(index, 1);

						} else {
							setError(res);
						}
					}.bind(this),
					error:  function (res) {
						setError('No se ha podido comunicar con el servidor.');
					}.bind(this),
					complete: function (res) {
						cb.close();
					}.bind(this)
				});
			}.bind(this),
			cancelHandler: function (e, cb) {
				cb.close();
			}.bind(this)
		});
	}.bind(this);
	var setError = function (texto) {
		var error = this.toolbarEl.itemsEl[3];
		if (texto) {
			error.html(texto);
    		setTimeout(function () {
    			error.animate({
    				opacity: 0
    			}, 500, 'linear', function () {
    				setError('');
    				error.css('opacity', 1);
    			}.bind(this));
    		}.bind(this), 3000);
		} else {
			error.html('');
		}
	}.bind(this);

	var self = $.extend(this, {
		className: '',
		orden: '',
		ordenDesc: '',
		rowItems: [{
			xtype: 'Button',
			texto: 'Borrar', 
			handler: borrar
		}],
		datos: [],
		columns: [],
		filters: {},
		toolbarEl: {},
		paginatorEl: {},
		gridEl: {},
		inputEl: {},
		onHeadClick: onHeadClick,
		onCellClick: onCellClick,
		onScroll: onScroll,
		onKeyPress: onKeyPress,
		onBlur: onBlur,
		onKeyPressFilter: onKeyPressFilter,
		onBlurFilter: onBlurFilter,
		onRowMouseOver: onRowMouseOver,
		onChangePage: onChangePage,
		cargar: cargar,
		exportar: exportar,
		getNumPage: getNumPage,
		getMinPage: getMinPage,
		getParametros: getParametros,
		setDatos: setDatos,
		cancelarInput: cancelarInput,
		cancelarFilter: cancelarFilter,
		setFilter: setFilter,
		renderTo: null,
		inputElCell: null
	});

	self = $.extend(self, par);

	create();

	self.renderTo && self.el.appendTo(self.renderTo);
};

var App = function (par) {

	var makeLogin = function () {
		if (this.panel) {
			this.panel.el.remove();
		}
		this.login = new Login({
			parent: this,
			url: this.url,
			renderTo: $('body')
		});
	}.bind(this);
	var makeGrid = function () {
		if (this.login) {
			this.login.el.remove();
		}
		this.panel = new Panel({
			parent: this,
			url: this.url,
			columns: this.columns,
			renderTo: $('body')
		});
		this.panel.cargar();
	}.bind(this);
	var init = function () {
		$.ajax({
			type: 'post',
			url: this.url,
			data: {servicio: 'isLog'},
			success: function (res) {
				if (res == 'success') {
					this.makeGrid();
				} else {
					this.makeLogin();
				}
			}.bind(this),
			error: this.makeLogin
		});
	}.bind(this);

	var self = $.extend(this, {
		url: '',
		columns: [],
		makeLogin: makeLogin,
		makeGrid: makeGrid
	});

	self = $.extend(self, par);

	init();
};
