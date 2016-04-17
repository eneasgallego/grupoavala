var ReactField = React.createClass({displayName: 'ReactField',
	getDefaultProps: function () {
		return {
			className: '',
			texto: '',
			nombre: '',
			type: 'text',
			valor: ''
		};
	},
	render: function () {
		return (
			React.DOM.ul( {className:this.props.className}, 
				React.DOM.li(null, React.DOM.label( {for:this.props.id}, this.props.texto)),
				React.DOM.li(null, this.renderInput())
			)
		);
	},
	renderInput: function () {
		if (this.props.valor) {
			return (
				React.DOM.input( {id:this.props.id, name:this.props.nombre, type:this.props.type, value:this.props.valor})
			);
		} else {
			return (
				React.DOM.input( {id:this.props.id, name:this.props.nombre, type:this.props.type})
			);
		}
		return '';
	}
});
var ReactButton = React.createClass({displayName: 'ReactButton',
	getDefaultProps: function () {
		return {
			className: '',
			type: 'button',
			handler: function (e) {},
			texto: ''
		};
	},
	render: function () {
		return (
			React.DOM.button( {className:this.props.className,
					type:this.props.type, 
					onClick:this.props.handler} , 
				this.props.texto
			)
		);
	}
});
var ReactForm = React.createClass({displayName: 'ReactForm',
	getDefaultProps: function () {
		return {
			className: '',
			method: '',
			action: '',
			handler: function (e) {},
			titulo: '',
			campos: [],
			botones: []
		};
	},
	render: function () {
		return (
			React.DOM.form( 	{className:this.props.className, 
					method:this.props.method, 
					action:this.props.action,  
					onSubmit:this.handler} , 
				React.DOM.h1(null, this.props.titulo),
				React.DOM.ul(null, this.renderFields()),
				React.DOM.ul(null, this.renderButtons())
			)
		);
	},
	renderFields: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.campos.length ; i++) {
			var campo = this.props.campos[i];
		    ret.push(React.DOM.li(null, 
					ReactField( {texto:campo.texto,
								nombre:campo.nombre,
								type:campo.type,
								valor:campo.valor} )
				));
		}
		return ret;
	},
	renderButtons: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.botones.length ; i++) {
			var boton = this.props.botones[i];
		    ret.push(React.DOM.li(null, 
					ReactButton( {type:boton.type,
								 texto:boton.texto,
								 handler:boton.handler} )
				));
		}
		return ret;
	},
	handler: function (e) {
		this.props.handler(e, this);
	}
});
var ReactLogin = React.createClass({displayName: 'ReactLogin',
	getInitialState: function () {
		return {
			error: ''
		};
	},
	render: function () {
		return (
			React.DOM.div( {className:"formLogin"}, 
				ReactForm(	{method:"post",
							action:this.props.url,
							handler:this.login,
							titulo:"Login",
							campos:this.campos,
							botones:this.botones}),
				React.DOM.div( {className:"error"}, this.state.error)
			)
		);
	},
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
	login: function(e, reactLogin) {
		e.preventDefault();
		var form = $(e.currentTarget);
		var self = this;

		$.ajax({
			type: 'post',
			url: form.attr('action'),
			data: form.serialize(),
			success: function (res) {
				if (res == 'success') {
					app.makeGrid();
				} else {
					self.setState({
						error: 'Login o Password incorrectos.'
					});
				}
			},
			error:  function (res) {
				self.setState({
					error: 'No se ha podido comunicar con el servidor.'
				});
			}
		});
	}
});

var ReactToolbar = React.createClass({displayName: 'ReactToolbar',
	getDefaultProps: function () {
		return {
			error: '',
			exportar: function (e) {}
		};
	},
	render: function () {
		return (
			React.DOM.div( {className:"toolbar"}, 
				ReactButton( {texto:"Exportar",
							 handler:this.props.exportar} ),
				React.DOM.div( {className:"error"}, this.props.error),
				ReactButton( {texto:"Salir",
							 handler:this.props.salir} )
			)
		);
	}
});

var ReactHead = React.createClass({displayName: 'ReactHead',
	getDefaultProps: function () {
		return {
			columns: []
		};
	},
	render: function () {
		return (
			ReactTable( {className:"head", 
						header:true,
						columns:this.props.columns,
						datos:this.getDatos()})
		);
	},
	getDatos: function () {
		var ret = {};

		for (var i = 0 ; i < this.props.columns.length ; i++) {
			var column = this.props.columns[i];

			ret[column.nombre] = column.texto;
		}

		ret = [ret];

		return ret;
	}
});
var ReactTable = React.createClass({displayName: 'ReactTable',
	getInitialState: function () {
		return {
			datos: this.props.datos
		};
	},
	getDefaultProps: function () {
		return {
			className: 'table',
			datos: [],
			columns: [],
			onCellClick: function(e){}
		};
	},
	render: function () {
		return (
			React.DOM.table( {className:this.props.className}, 
				this.renderRows()
			)
		);
	},
	renderRows: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.datos.length ; i++) {
			var fila = this.props.datos[i];
		    ret.push(
		    		ReactRow( 	{datos:fila,
								columns:this.props.columns, 
								header:this.props.header,
								onCellClick:this.props.onCellClick})
				);
		}
		return ret;
	}
});
var ReactRow = React.createClass({displayName: 'ReactRow',
	getInitialState: function () {
		return {
			datos: this.props.datos
		};
	},
	getDefaultProps: function () {
		return {
			datos: [],
			columns: [],
			header: false,
			onCellClick: function (e){}
		};
	},
	render: function () {
		return (
			React.DOM.tr( {className:"row", 'data-id':this.props.datos.id}, 
				this.renderCols()
			)
		);
	},
	renderCols: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.columns.length ; i++) {
			var column = this.props.columns[i];
			if (!column.hidden) {
			    var val = this.props.datos[column.nombre];

			    ret.push(
			    		ReactCell( 	{valor:val, 
			    					header:this.props.header,
			    					onCellClick:this.props.onCellClick})
					);
			}
		}
		return ret;
	}
});
var ReactCell = React.createClass({displayName: 'ReactCell',
	getInitialState: function () {
		return {
			valor: ''
		};
	},
	getDefaultProps: function () {
		return {
			valor: '',
			header: false,
			onCellClick: function (e){}
		};
	},
	render: function () {
		if (this.props.header) {
			return (
				React.DOM.th( {className:"cell", 'data-col':"0"}, 
					this.props.valor
				)
			);
		} else {
			return (
				React.DOM.td( {className:"cell", 'data-col':"0",
					onClick:this.props.onCellClick}, 
					this.props.valor
				)
			);
		}
	}
});
var ReactGrid = React.createClass({displayName: 'ReactGrid',
	getInitialState: function () {
		return {
			datos: this.props.datos
		};
	},
	getDefaultProps: function () {
		return {
			datos: [],
			columns: [],
			onCellClick: function(e){}
		};
	},
	componentDidMount: function() {
		this.props.resize();
    	var el = $(this.getDOMNode());
    	var head = el.find('.head');
    	var divTable = el.find('.divTable');

    	var parentHeight = el.outerHeight();
    	var headHeight = head.outerHeight();
    	var divTableHeight = parentHeight - headHeight;
    	divTable.outerHeight(divTableHeight);
  	},
	componentDidUpdate: function() {
    	var el = $(this.getDOMNode());
    	var head = el.find('.head');
    	var divTable = el.find('.divTable');

    	var headCells = head.find('th');
    	var tableCells = divTable.find('tr').first().find('td');
    	headCells.each(function (k, v) {
    		var headCell = $(v);
    		var tableCell = $(tableCells[k]);

    		var widthHead = headCell.width();
    		var widthTable = tableCell.width();

    		if (widthHead > widthTable) {
    			tableCell.width(widthHead);
    		} else if (widthHead < widthTable) {
    			headCell.width(widthTable);
    		}
    	});
  	},
  	render: function () {
		return (
			React.DOM.div( {className:"grid"}, 
				React.DOM.div( {className:"divHead"}, 
					ReactHead( 	{columns:this.props.columns})
				),
				React.DOM.div( {className:"divTable"}, 
					ReactTable( {datos:this.props.datos, 
								columns:this.props.columns,
								onCellClick:this.props.onCellClick})
				)
			)
		);
	}
});

var ReactPanel = React.createClass({displayName: 'ReactPanel',
	getInitialState: function () {
		return {
			datos: this.props.datos
		};
	},
	getDefaultProps: function () {
		return {
			datos: [],
			columns: [{
				nombre: 'nombre',
				texto: 'NOMBRE'
			},{
				nombre: 'provincia',
				texto: 'PROVINCIA'
			},{
				nombre: 'telefono',
				texto: 'TELÉFONO'
			}]
		};
	},
	resize: function() {
    	var el = $(this.getDOMNode());
    	
    	var parent = el.parent();
    	var toolbar = el.find('.toolbar');
    	var grid = el.find('.grid');

    	var parentHeight = parent.outerHeight();
    	var toolbarHeight = toolbar.outerHeight();
    	var gridHeight = parentHeight - toolbarHeight;
    	grid.outerHeight(gridHeight);
  	},
	componentDidUpdate: function() {
    	var el = $(this.getDOMNode());
    	var $error = el.find('.error');
    	if ($error.html()) {
    		setTimeout(1000, function () {
    			$error.fadeOut(500, function () {
    				$error.html('');
    				$error.show();
    			});
    		});
    	}
    },
	render: function () {
		return (
			React.DOM.div( {className:"panel"}, 
				ReactToolbar( 	{exportar:this.exportar,
								salir:this.salir,
								error:this.state.error}),
				ReactGrid( 	{datos:this.state.datos, 
							columns:this.props.columns,
							resize:this.resize,
							onCellClick:this.onCellClick}),
				React.DOM.input( {className:"floatInput", onKeyPress:this.onKeyPress})
			)
		);
	},
	getParametros: function () {
		return {
			servicio: 'cargar'
		};
	},
	onCellClick: function (e) {
		e.preventDefault();
		var el = $(e.currentTarget);
		var floatInput = $('.floatInput');

		if (floatInput.is(":visible")) {
			this.guardar(floatInput, setInput);
		} else {
			setInput();
		}
		function setInput() {
			floatInput.show();
			floatInput.val(el.html());
			floatInput.offset(el.offset());
			floatInput.outerWidth(el.outerWidth());
			floatInput.outerHeight(el.outerHeight());
			floatInput.select();
			floatInput.data('cell', el.data('reactid'));
		}
	},
  	onKeyPress: function (e) {
  		if (e.keyCode == 13) {
  			this.guardar($(e.currentTarget));
  		}
  	},
	cargar: function () {
		var self = this;

		$.ajax({
			type: 'post',
			url: this.props.url,
			data: this.getParametros(),
			success: function (res) {
				var datos = $.parseJSON(res);
				$(self.getDOMNode()).data('datos', datos);
				self.setState({
					datos: datos
				});
			},
			error:  function (res) {
				self.setState({
					error: 'No se ha podido comunicar con el servidor.'
				});
			}
		});
		$(self.getDOMNode()).data('columns', this.props.columns);
	},
	guardar: function ($el, callback) {
		var self = this;
		var idCell = $el.data('cell');
		var cell = $('[data-reactid="' + idCell + '"]');
		var row = cell.parents('tr').first();
		var id = row.data('id');
		var cols = row.find('td');
		var numCol;
		cols.each(function (k, v) {
			if ($(v).data('reactid') == idCell) {
				numCol = k;
				return true;
			}
		});
		var col = this.props.columns[numCol];
		var numRow;
		var datos = this.state.datos;
		$(datos).each(function (k, v) {
			if (v.id == id) {
				numRow = k;
				return true;
			}
		});
		var dataRow = datos[numRow];
		var valorNuevo = $el.val();
		$el.hide();
		var valorViejo = dataRow[col.nombre];
		if (valorNuevo != valorViejo) {
			$.ajax({
				type: 'post',
				url: this.props.url,
				data: {
					servicio: 'guardar',
					id: id,
					campo: col.nombre,
					valor: valorNuevo
				},
				success: function (res) {
					
					if (res == 'success') {
						
						dataRow[col.nombre] = valorNuevo;
						datos[numRow] = dataRow;

						$(self.getDOMNode()).data('datos', datos);
						self.setState({
							datos: datos,
							error: ''
						});
						doCallback();
					} else {
						self.setState({
							error: res
						});
						doCallback();
					}
				},
				error:  function (res) {
					self.setState({
						error: 'No se ha podido comunicar con el servidor.'
					});
					doCallback();
				}
			});
		} else {
			doCallback();
		}

		function doCallback () {
			if (typeof(callback) == 'function') {
				callback();
			}
		}
	},
	exportar: function (e) {},
	salir: function (e) {
		$.ajax({
			type: 'post',
			url: this.props.url,
			data: {servicio: 'salir'},
			done: app.makeLogin()
		});
	}
});

var app = {
	url: 'api.php',
	makeLogin: function () {
		React.renderComponent(ReactLogin( {url:app.url}), document.body);
	},
	makeGrid: function () {
		var reactPanel = React.renderComponent(ReactPanel( {url:app.url}), document.body);
		reactPanel.cargar();
	},
	init: function () {

		$.ajax({
			type: 'post',
			url: app.url,
			data: {servicio: 'isLog'},
			success: function (res) {
				if (res == 'success') {
					app.makeGrid();
				} else {
					app.makeLogin();
				}
			},
			error: app.makeLogin
		});
	}
};

setTimeout(app.init, 50);
