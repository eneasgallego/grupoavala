<form id="tasador-<?php echo $menu_current; ?>-tasador" action="php/tasador.php" class="tasador2" method="POST" >
	<div class="form_title">
		Tasador On-Line:
	</div>
	<ul>
		<li>
			<input type="text" id="nombre" name="nombre" placeholder="Nombre:"/>
		</li>
		<li>
			<input type="tel" id="telefono" name="telefono" placeholder="Teléfono:*" maxlength="12" required/>
		</li>
		<li>
			<input type="email" id="correo" name="correo" placeholder="eMail:"/>
		</li>
		<li>
			<select name="provincia" id="comunidad" required>
				<option>Comunidad:*</option>
				<option value="Andalucía">Andalucía</option>
				<option value="Aragón">Aragón</option>
				<option value="Principado de Asturias">Principado de Asturias</option>
				<option value="País Vasco">País Vasco</option>
				<option value="Cantabria">Cantabria</option>
				<option value="Castilla-La Mancha">Castilla-La Mancha</option>
				<option value="Castilla y León">Castilla y León</option>
				<option value="Cataluña">Cataluña</option>
				<option value="Extremadura">Extremadura</option>
				<option value="Galicia">Galicia</option>
				<option value="Comunidad de Madrid">Comunidad de Madrid</option>
				<option value="Región de Murcia">Región de Murcia</option>
				<option value="Comunidad Foral de Navarra">Comunidad Foral de Navarra</option>
				<option value="La Rioja">La Rioja</option>
				<option value="Comunidad Valenciana">Comunidad Valenciana</option>
			</select>
		</li>
		<li>
			<span id="obligatorios">Los campos marcados con * son obligatorios.</span>
		</li>
	</ul>

	<ul>
		<li>
			<select id="marca" name="marca">
				<option>Marca:</option>
				<option value="ABARTH">ABARTH</option>
				<option value="ALFA ROMEO">ALFA ROMEO</option>
				<option value="ASIA">ASIA</option>
				<option value="ASTON MARTIN">ASTON MARTIN</option>
				<option value="AUDI">AUDI</option>
				<option value="BENTLEY">BENTLEY</option>
				<option value="BERTONE">BERTONE</option>
				<option value="BMW">BMW</option>
				<option value="CADILLAC">CADILLAC</option>
				<option value="CHEVROLET">CHEVROLET</option>
				<option value="CHRYSLER">CHRYSLER</option>
				<option value="CITROEN">CITROEN</option>
				<option value="CORVETTE">CORVETTE</option>
				<option value="DACIA">DACIA</option>
				<option value="DAEWOO">DAEWOO</option>
				<option value="DAIHATSU">DAIHATSU</option>
				<option value="DAIMLER">DAIMLER</option>
				<option value="DFSK">DFSK</option>
				<option value="DODGE">DODGE</option>
				<option value="FERRARI">FERRARI</option>
				<option value="FIAT">FIAT</option>
				<option value="FORD">FORD</option>
				<option value="GALLOPER">GALLOPER</option>
				<option value="HONDA">HONDA</option>
				<option value="HUMMER">HUMMER</option>
				<option value="HYUNDAI">HYUNDAI</option>
				<option value="INFINITI">INFINITI</option>
				<option value="INNOCENTI">INNOCENTI</option>
				<option value="ISUZU">ISUZU</option>
				<option value="IVECO">IVECO</option>
				<option value="JAGUAR">JAGUAR</option>
				<option value="JEEP">JEEP</option>
				<option value="KIA">KIA</option>
				<option value="LADA">LADA</option>
				<option value="LAMBORGHINI">LAMBORGHINI</option>
				<option value="LANCIA">LANCIA</option>
				<option value="LAND-ROVER">LAND-ROVER</option>
				<option value="LDV">LDV</option>
				<option value="LEXUS">LEXUS</option>
				<option value="LOTUS">LOTUS</option>
				<option value="MAHINDRA">MAHINDRA</option>
				<option value="MASERATI">MASERATI</option>
				<option value="MAYBACH">MAYBACH</option>
				<option value="MAZDA">MAZDA</option>
				<option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
				<option value="MG">MG</option>
				<option value="MINI">MINI</option>
				<option value="MITSUBISHI">MITSUBISHI</option>
				<option value="MORGAN">MORGAN</option>
				<option value="NISSAN">NISSAN</option>
				<option value="OPEL">OPEL</option>
				<option value="PEUGEOT">PEUGEOT</option>
				<option value="PIAGGIO">PIAGGIO</option>
				<option value="PONTIAC">PONTIAC</option>
				<option value="PORSCHE">PORSCHE</option>
				<option value="RENAULT">RENAULT</option>
				<option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
				<option value="ROVER">ROVER</option>
				<option value="SAAB">SAAB</option>
				<option value="SANTANA">SANTANA</option>
				<option value="SEAT">SEAT</option>
				<option value="SKODA">SKODA</option>
				<option value="SMART">SMART</option>
				<option value="SSANGYONG">SSANGYONG</option>
				<option value="SUBARU">SUBARU</option>
				<option value="SUZUKI">SUZUKI</option>
				<option value="TALBOT">TALBOT</option>
				<option value="TATA">TATA</option>
				<option value="TOYOTA">TOYOTA</option>
				<option value="VAZ">VAZ</option>
				<option value="VOLKSWAGEN">VOLKSWAGEN</option>
				<option value="VOLVO">VOLVO</option>
			</select>
		</li>
		<li>
			<input type="text" id="modelo" name="modelo" placeholder="Modelo:"/>
		</li>
		<li>
			<select id="ano" name="ano">
				<option>Año:</option>
				<option value="2015">2015</option>
				<option value="2014">2014</option>
				<option value="2013">2013</option>
				<option value="2012">2012</option>
				<option value="2011">2011</option>
				<option value="2010">2010</option>
				<option value="2009">2009</option>
				<option value="2008">2008</option>
				<option value="2007">2007</option>
				<option value="2006">2006</option>
				<option value="2005">2005</option>
			</select>
		</li>
		<li>
			<select id="importe" name="importe">
				<option>Importe:</option>
				<option>500€ - 1.000€</option>
				<option>1.000€ - 2.000€</option>
				<option>2.000€ - 3.000€</option>
				<option>3.000€ - 4.000€</option>
				<option>4.000€ - 5.000€</option>
				<option>5.000€ - 6.000€</option>
				<option>6.000€ - 7.000€</option>
				<option>7.000€ - 8.000€</option>
				<option>8.000€ - 9.000€</option>
				<option>9.000€ - 10.000€</option>
				<option>10.000€ - 11.000€</option>
				<option>11.000€ - 12.000€</option>
				<option>12.000€ - 13.000€</option>
				<option>13.000€ - 14.000€</option>
				<option>14.000€ - 15.000€</option>
				<option>15.000€ - 16.000€</option>
				<option>16.000€ - 17.000€</option>
				<option>17.000€ - 18.000€</option>
				<option>18.000€ - 19.000€</option>
				<option>19.000€ - 20.000€</option>
				<option>20.000€ - 25.000€</option>
				<option>25.000€ - 30.000€</option>
				<option>30.000€ - 35.000€</option>
				<option>35.000€ - 40.000€</option>
				<option>40.000€ - 45.000€</option>
				<option>45.000€ - 50.000€</option>
				<option>+ 50.000€</option>
			</select>
		</li>
		<li>
			<input type="checkbox" id="privacidad" name="privacidad"/><span id="privacidad">Acepto la <a id="link_privacidad" href="#">política de privacidad</a>.</span>
		</li>
	</ul>
	<input type="hidden" name="origen" value="web-<?php echo $menu_current; ?>"/>
	<input type="submit" id="enviar" class="red_title" value="ENVIAR"/>

</form>
