<?php
session_start();

$servicio = $_POST['servicio'];
if (!$servicio) {
	$servicio = $_GET['servicio'];
}

$table = "tasador_des";
if ($_SERVER['HTTP_HOST'] == 'grupoavala.com' ||
	$_SERVER['HTTP_HOST'] == 'www.grupoavala.com') {
	$table = "tasador";
}

function isLog() {
	if (isset($_SESSION['isLog'])) {
		//echo $_SESSION['isLog'];
	}
	return (isset($_SESSION['isLog']) && $_SESSION['isLog']);
}

if ($servicio == "login") {
	$login = $_POST['login'];
	$password = $_POST['password'];

	$isLogin = "error";
	if (($login == "grupoavala" && $password == "avala900")) {
		$isLogin = "success";
		$_SESSION['isLog'] = true;
	}

	echo $isLogin;
} else if ($servicio == "isLog") {
	echo isLog() ? "success" : "error";
} else if ($servicio == "salir") {
	unset($_SESSION['isLog']);
} else if ($servicio == "cargar") {
	try {
		if (isLog()) {
			require "../php/config.php";
			$connect = mysql_connect($config_host, $config_username, $config_password);
			mysql_select_db($config_database, $connect);

			$filters = $_POST['filters'];
			$where = "";
			if (is_array($filters)) {
				$filtersSql = [];
				foreach ($filters as $clave => $valor) {
					if ($valor) {
						array_push ($filtersSql, "UPPER($clave) like concat('%', UPPER('$valor'), '%') ");
					}
				}
				if (count($filtersSql) > 0) {
					$where = " where ".implode(" and ", $filtersSql);
				}
			}

			$numPage = $_POST['numPage'];
			$minPage = $_POST['minPage'];
			$orden = $_POST['orden'];
			$ordenDesc = $_POST['ordenDesc'];
			$order = "";
			if ($orden) {
				$order = "order by $orden $ordenDesc";
			}
			
			$sqlOri = "select * from $table $where $order";
			$resultBD = mysql_query($sqlOri, $connect);
			$numRows = mysql_num_rows($resultBD);
			$totalPage = intval($numRows / $numPage);
			if ($numRows % $numPage == 0) {
				$totalPage--;
			}
			
			$minPage = (($minPage-1) * $numPage) + 1;
			$sql = "$sqlOri limit $minPage, $numPage";
			$resultBD = mysql_query($sql, $connect);
			$numCols = mysql_num_fields($resultBD);
			$ret = [];
			while ($fila = mysql_fetch_object($resultBD)) {
				$retFila = [];
				for ($i = 0 ; $i < $numCols ; $i++) {
					$col = mysql_field_name ($resultBD, $i);
					$val = $fila->$col;
					
					//$retFila[$col] = $val;
					array_push ($retFila, "\"$col\":\"$val\"");
				}
				array_push ($ret, "{".implode(",", $retFila)."}");
			}
			mysql_free_result($resultBD);

			echo "{\"sql\": \"$sql\", \"totalPage\": $totalPage, \"datos\": [".implode(",", $ret)."]}";

		} else {
			echo "No está logado.";
		}
	} catch (Exception $e) {
		echo "{success: '$e'}";
	}
} else if ($servicio == "exportar") {
	try {
		if (isLog()) {
			require "../php/config.php";
			$connect = mysql_connect($config_host, $config_username, $config_password);
			mysql_select_db($config_database, $connect);

			$filters = $_GET['filters'];
			$where = "";
			if (is_array($filters)) {
				$filtersSql = [];
				foreach ($filters as $clave => $valor) {
					if ($valor) {
						array_push ($filtersSql, "UPPER($clave) like concat('%', UPPER('$valor'), '%') ");
					}
				}
				if (count($filtersSql) > 0) {
					$where = " where ".implode(" and ", $filtersSql);
				}
			}

			$orden = $_GET['orden'];
			$ordenDesc = $_GET['ordenDesc'];
			$order = "";
			if ($orden) {
				$order = "order by $orden $ordenDesc";
			}
			
			$sql = "select * from $table $where $order";
			$resultBD = mysql_query($sql, $connect);
			$numCols = mysql_num_fields($resultBD);
			$ret = [];
			$retFila = [];
			for ($i = 0 ; $i < $numCols ; $i++) {
				$col = mysql_field_name ($resultBD, $i);
				
				array_push ($retFila, strtoupper($col));
			}
			array_push ($ret, $retFila);
			while ($fila = mysql_fetch_object($resultBD)) {
				$retFila = [];
				for ($i = 0 ; $i < $numCols ; $i++) {
					$col = mysql_field_name ($resultBD, $i);
					$val = $fila->$col;
					
					array_push ($retFila, $val);
				}
				array_push ($ret, $retFila);
			}
			mysql_free_result($resultBD);

			$now = gmdate("D, d M Y H:i:s");
			header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
			header("Cache-Control: max-age=0, no-cache, must-revalidate, proxy-revalidate");
			header("Last-Modified: {$now} GMT");

			// force download  
			header("Content-Type: application/force-download");
			header("Content-Type: application/octet-stream");
			header("Content-Type: application/download");

			// disposition / encoding on response body
			header("Content-Disposition: attachment;filename=data_export_".date("Y-m-d").".csv");
			header("Content-Transfer-Encoding: binary");

			if (count($ret) > 0) {
				ob_start();
				$df = fopen("php://output", 'w');
				//fputcsv($df, array_keys(reset($ret)));
				foreach ($ret as $row) {
					fputcsv($df, $row);
				}
				fclose($df);
				echo ob_get_clean();
			}
			die();
		} else {
			echo "No está logado.";
		}
	} catch (Exception $e) {
		echo "{success: '$e'}";
	}
} else if ($servicio == "guardar") {
	if (isLog()) {
		require "../php/config.php";

		$resultBD = false;

		try {
			$connect = mysql_connect($config_host, $config_username, $config_password);
			mysql_select_db($config_database, $connect);

			$campo = $_POST["campo"];
			$valor = $_POST["valor"];
			$id = $_POST["id"];

			$sql = "update $table set $campo='$valor' where id=$id;";
			mysql_query($sql, $connect);

			echo "success";

		} catch (Exception $e) {
			echo $e;
		}
	} else {
		echo "No está logado.";
	}
} else if ($servicio == "borrar") {
	if (isLog()) {
		require "../php/config.php";

		$resultBD = false;

		try {
			$connect = mysql_connect($config_host, $config_username, $config_password);
			mysql_select_db($config_database, $connect);

			$id = $_POST["id"];

			$sql = "delete from $table where id=$id;";
			//echo $sql;
			mysql_query($sql, $connect);

			echo "success";

		} catch (Exception $e) {
			echo $e;
		}
	} else {
		echo "No está logado.";
	}
} else {
	echo "No hay servicio asignado.";
}
?>