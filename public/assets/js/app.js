var url =  "http://localhost:3000/api/registerNumber";
var $phone = $("#phone");
var $check = $("#check");
var $boton = $("#registrar")

var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $check.click(validarDatos);
    $phone.change(validarDatos);

};
var validarDatos = function(e){
 e.preventDefault();
 if($check.is(":checked") && $phone.val().length === 10  ){
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
  }).catch(function(error){
    console.log(error)
  });
}
//validacion de formulario

$(document).ready(cargarPagina);
