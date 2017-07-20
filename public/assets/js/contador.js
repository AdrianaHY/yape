//función para el contador
var inicio = 21;
var contar;

function retroceder(){
	$("#contador").html("Reintentar en"+'<img src="/static/assets/img/icons/clock.png" alt="clock"/>'  + inicio);
	inicio --;
		if(inicio == 0){
		detenerContador(contar);
		location.href = "tercerca.html"
	}
	contar = setTimeout(retroceder,1000);
}

function detenerContador(contar){
	clearTimeout(contar)
}
$(document).ready(retroceder);
