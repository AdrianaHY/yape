//función para el contador
var inicio = 21;
var $contenedorTelefono = $("#phoneNumber");
var codigoUsuario = $("#codigoUsuario");
var contar;

var cargarPagina = function(){
	retroceder();
	codigoUsuario.keyup(datos);
};

var datos = function(){
	var numeroTelefono = localStorage.getItem("phoneNumber");
	var codigo = localStorage.getItem("code");
	$contenedorTelefono.html = numeroTelefono;
	if(codigoUsuario.val() === codigo){
		window.location.href = "cuarta.html"
	}
}

function retroceder(){

	$("#contador").html("Reintentar en"+'<img src="/static/assets/img/icons/clock.png" alt="clock"/>'  + inicio);
	inicio --;
		if(inicio == 0){
		detenerContador(contar);
		location.href = "tercera.html"
	}
	contar = setTimeout(retroceder,1000);
}

function detenerContador(contar){
	clearTimeout(contar)
}
$(document).ready(cargarPagina);
