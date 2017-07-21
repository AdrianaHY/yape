
//funcion para validación básica de formulario
var validarFormulario = function(){
  var botonForm = $("#botonForm");
  var nombre =  $("#nombre");
  var correo =  $("#correo");
  var clave =  $("#clave");

  if (nombre.val() != "" && correo.val() != "" && clave.val() != ""){
    botonForm.removeAttr("disabled");
    botonForm.click(function(){
      window.location.href = "quinta.html"
    })
  }else{
    botonForm.attr("disabled", true)
  }
}
$(document).ready(validarFormulario);
