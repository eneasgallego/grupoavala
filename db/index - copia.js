/*** @jsx React.DOM */

var ReactField = React.createClass({
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
			<ul className={this.props.className}>
				<li><label for={this.props.id}>{this.props.texto}</label></li>
				<li>{this.renderInput()}</li>
			</ul>
		);
	},
	renderInput: function () {
		if (this.props.valor) {
			return (
				<input id={this.props.id} name={this.props.nombre} type={this.props.type} value={this.props.valor}/>
			);
		} else {
			return (
				<input id={this.props.id} name={this.props.nombre} type={this.props.type}/>
			);
		}
		return '';
	}
});
var ReactButton = React.createClass({
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
			<button className={this.props.className} type={this.props.type} onClick={this.props.handler}>
				{this.props.texto}
			</button>
		);
	}
});
var ReactForm = React.createClass({
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
			<form className={this.props.className} method={this.props.method} action={this.props.action} onSubmit={this.handler}>
				<h1>{this.props.titulo}</h1>
				<ul>{this.renderFields()}</ul>
				<ul>{this.renderButtons()}</ul>
			</form>
		);
	},
	renderFields: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.campos.length ; i++) {
			var campo = this.props.campos[i];
		    ret.push(
		    	<li>
					<ReactField texto={campo.texto} nombre={campo.nombre} type={campo.type} valor={campo.valor} />
				</li>
			);
		}
		return ret;
	},
	renderButtons: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.botones.length ; i++) {
			var boton = this.props.botones[i];
		    ret.push(
		    	<li>
					<ReactButton type={boton.type} texto={boton.texto} handler={boton.handler} />
				</li>
			);
		}
		return ret;
	},
	handler: function (e) {
		this.props.handler(e, this);
	}
});
var ReactLogin = React.createClass({
	getInitialState: function () {
		return {
			error: ''
		};
	},
	render: function () {
		return (
			<div className="formLogin">
				<ReactForm method="post" action={this.props.url} handler={this.login} titulo="Login" campos={this.campos} botones={this.botones}/>
				<div className="error">{this.state.error}</div>
			</div>
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

var ReactToolbar = React.createClass({
	getDefaultProps: function () {
		return {
			error: '',
			exportar: function (e) {}
		};
	},
	render: function () {
		return (
			<div className="toolbar">
				<span className="paginator">
					<ReactButton texto="<<" handler={this.props.exportar} />
					<ReactButton texto="<" handler={this.props.exportar} />
					<ReactButton texto=">" handler={this.props.exportar} />
				</span>
				<ReactButton texto="Exportar" handler={this.props.exportar} />
				<ReactButton texto="Salir" handler={this.props.salir} />
				<div className="error">{this.props.error}</div>
			</div>
		);
	}
});

var ReactHead = React.createClass({
	getDefaultProps: function () {
		return {
			columns: []
		};
	},
	render: function () {
		return (
			<ReactTable className="head" columns={this.props.columns} datos={this.getDatos()} onCellClick={this.props.onCellClick}/>
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
var ReactTable = React.createClass({
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
			<table className={this.props.className}>
				{this.renderRows()}
			</table>
		);
	},
	renderRows: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.datos.length ; i++) {
			var fila = this.props.datos[i];
		    ret.push(
		    	<ReactRow datos={fila} columns={this.props.columns} onCellClick={this.props.onCellClick}/>
			);
		}
		return ret;
	}
});
var ReactRow = React.createClass({
	getInitialState: function () {
		return {
			datos: this.props.datos
		};
	},
	getDefaultProps: function () {
		return {
			datos: [],
			columns: [],
			onCellClick: function (e){}
		};
	},
	render: function () {
		return (
			<tr className="row" data-id={this.props.datos.id}>
				{this.renderCols()}
			</tr>
		);
	},
	renderCols: function () {
		var ret = [];

		for (var i = 0 ; i < this.props.columns.length ; i++) {
			var column = this.props.columns[i];
			if (!column.hidden) {
			    var val = this.props.datos[column.nombre];

			    ret.push(
		    		<ReactCell valor={val} onCellClick={this.props.onCellClick}/>
				);
			}
		}
		return ret;
	}
});
var ReactCell = React.createClass({
	getInitialState: function () {
		return {
			valor: ''
		};
	},
	getDefaultProps: function () {
		return {
			valor: '',
			onCellClick: function (e){}
		};
	},
	render: function () {
		return (
			<td className="cell" data-col='0'
				onClick={this.props.onCellClick}>
				{this.props.valor}
			</td>
		);
	}
});
var ReactGrid = React.createClass({
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
		this.resize();
  	},
  	resize: function () {
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
    	var table = el.find('.table');

    	var headCells = head.find('td');
    	var tableCells = table.find('tr').first().find('td');
    	headCells.each(function (k, v) {
    		var headCell = $(v);
    		var tableCell = $(tableCells[k]);

    		var widthHead = headCell.outerWidth();
    		var widthTable = tableCell.outerWidth();

    		if (widthHead > widthTable) {
    			tableCell.outerWidth(widthHead);
    		} else if (widthHead < widthTable) {
    			headCell.outerWidth(widthTable);
    		}
    	});
		
		var widthHead = head.outerWidth();
		var widthTable = table.outerWidth();
		if (widthHead > widthTable) {
			table.outerWidth(widthHead);
		} else if (widthHead < widthTable) {
			head.outerWidth(widthTable);
		}
		
		var divHead = head.parent();
		var divTable = table.parent();
		var widthDivHead = divHead.outerWidth();
		var widthDivTable = divTable.outerWidth();
		if (widthDivHead > widthDivTable) {
			divTable.outerWidth(widthDivHead);
		} else if (widthDivHead < widthDivTable) {
			divHead.outerWidth(widthDivTable);
		}
  	},
  	render: function () {
		return (
			<div className="grid">
				<div className="divHead">
					<ReactHead columns={this.props.columns} onCellClick={this.props.onHeadClick}/>
				</div>
				<div className="divTable" onScroll={this.props.onScroll}>
					<ReactTable datos={this.props.datos} columns={this.props.columns} onCellClick={this.props.onCellClick}/>
				</div>
			</div>
		);
	}
});

var ReactPanel = React.createClass({
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
		var self = this;
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
    	var self = this;
    	var el = $(this.getDOMNode());
    	var $error = el.find('.error');
    	if ($error.html()) {
    		setTimeout(function () {
    			$error.animate({
    				opacity: 0
    			}, 500, 'linear', function () {
    				self.setState({
    					error: ''
    				});
    				$error.css('opacity', 1);
    			});
    		}, 3000);
    	}
    },
	render: function () {
		return (
			<div className="panel">
				<ReactToolbar exportar={this.exportar} salir={this.salir} error={this.state.error}/>
				<ReactGrid 	datos={this.state.datos} columns={this.props.columns} resize={this.resize} onCellClick={this.onCellClick} onHeadClick={this.onHeadClick} onScroll={this.onScroll}/>
				<input className="floatInput" onKeyPress={this.onKeyPress} onBlur={this.onBlur}/>
			</div>
		);
	},
	getParametros: function () {
		return {
			servicio: 'cargar',
			orden: this.state.orden,
			ordenDesc: this.state.ordenDesc
		};
	},
	onScroll: function (e) {
		this.cancelarInput($('.floatInput'));
		var $el = $(this.getDOMNode());
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
	onHeadClick: function (e) {
		e.preventDefault();
		var el = $(e.currentTarget);
		
		function setClass(clase) {
			var parent = el.parents('.head').first();
			parent.find('.asc').removeClass('asc');
			parent.find('.desc').removeClass('desc');

			el.addClass(clase);
		}

		if (el.hasClass('asc')) {
			setClass('desc');
		} else {
			setClass('asc');
		}
	},
  	onKeyPress: function (e) {
  		if (e.keyCode == 13) {
  			this.guardar($(e.currentTarget));
  		} else if (e.keyCode == 27) {
  			this.cancelarInput($(e.currentTarget));
  		}
  	},
	onBlur: function (e) {
		this.guardar($(e.currentTarget));
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
	cancelarInput: function ($el) {
		$el.hide();
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
		React.renderComponent(<ReactLogin url={app.url}/>, document.body);
	},
	makeGrid: function () {
		var reactPanel = React.renderComponent(<ReactPanel url={app.url}/>, document.body);
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



















