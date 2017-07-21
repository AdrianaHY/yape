var url =  "http://localhost:3000/api/registerNumber";
var $phone = $("#phone");
var $check = $("#check");
var $boton = $("#registrar")

var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $check.click(validarDatos);
    $phone.change(validarDatos);

};
//para validar el tel+efono
var validarDatos = function(){
 // e.preventDefault();
 if($check.is(":checked") && $phone.val().length === 10){
		disabled();
    datosApi();
	}else {
			$boton.attr("disabled", true);
 };
}
var disabled = function(){
  $boton.removeAttr("disabled");
}


var datosApi = function(){
  $.post( url, {
    "phone":$phone.val(),
    "terms":true
  }).then(function(response){
    console.log(response)
    codigo(response);
  }).catch(function(error){
    console.log(error)
  });
}

var codigo = function(response){
  console.log(response);
  var success = response.success;
  var datos = response.data;
  var code = datos.code;
  localStorage.setItem("phoneNumber", datos.phone);
  localStorage.setItem("code", datos.code);
  if(success == true){
    alert("Tu código es: " + code);
    window.location.href ="tercera.html";
  }else{
    alert("El número ingresado no es válido")
  }
}


$(document).ready(cargarPagina);
