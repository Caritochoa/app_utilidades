	var nombre;
	var password;
	var cargo;
	nombre=prompt('ingrese nombre');
	if (nombre == 'diego'){
		
		password=prompt('ingrese password')
		if (password == 1234){
			alert("password correcto")
			document.write('estas logueado');
		}
		else{
			alert("password incorrecto")
			document.write('password incorrecto');
		}
	}
	else {
		document.write('nombre incorrecto');
	}
	
	cargo=prompt('ingrese su cargo')
	switch (cargo){
		case "vendedor" : alert("Es "+ cargo);
		break;
		case "asesor" : alert("Es "+ cargo);
		break;
		case "ingeniero" : alert("Es " + cargo);
		break;
		case "gerente" : alert("Es " + cargo);
		break;
		default: alert("No pertenece a la compañia");
		break;
	}