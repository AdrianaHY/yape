var url =  "http://localhost:3000/api/registerNumber";
var $phone = $("#phone");
var $check = $("#check");

var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // $("#form").submit(obtenerDatos)
};

var validarDatos = function(){
 e.preventDefault();
 if($check.val() == "true"){
   check= true
 }else{
   check = false
 }

 datosApi();
}


var datosApi = function(){
  $.post( url, {
    "phone":phone.val(),
    "terms":check.val()
  }).then(function(response){
    console.log(response)
  }).catch(function(error){
    console.log(error)
  });
}


$(document).ready(cargarPagina);
// npm install-- para instalar todas las dependencias sin necesidad de instalar una por una
// el primer archivo que debo mirar es el serve js
// node server.js para levantar el servidor
// Agregar rutas con express para agregar las carpetas por medio de public y tener algo en el html con:
// app.get/ruta principal funcion -- y la crpeta origen
// si queremos utuilizar browsersync para no recargar debemos levantarlo en otro puerto, porque por default se abre en el 3000
// con port sepuede cmabiar el puerto.
// Si queremos levantar dos puertos diferentes debemos hacerlo en dos consolas
//
// COMO FUNCIONA EL api
// Para cualquier peticion asincronoa son tres cosas principales: la url (el endpoint):
// http://localhost:3000/api/registerNumber --> ek puerto depende de si levantamos dos o no
// lo segundo es saber qué metodo utiliza la url: get, post delete.
// Post: siginifica que le metodo http es post, depende lo que diga el api.
// Lo tercero es que DATA se necesita, que información se necesita enviar en cada request.
// el req.body tiene toda la data que necesitamos, toda la data que se nvia se envia a traves de un json, es decir, a través de un objetos
// {"phone":"...","terms":"..."}los valores son los input en el phone y el check en termino y condiciones
// form-urlencoded.
//
// POSTMAN
// El servidor debe estar corriendo
// Esocger el metodourl
// en el body enviar los parametros
// seleccionar el sgundo parametrosponer las key y los valores que necesitamos enviar
//
// Como pasar a un codigo de ajax
// --podemos instalar jquery
// path tiene le metodo join que se encargade concatenar dos ruta,s em este caso el dirname y node modules, para poder darle
// el nombre de static o un app.use static para poder darle ese nombre a la carpeta de donde podemos tomar
// jquery, materialize o lo que se que esté fuera de public.
//
// $.post(url, data(siempre es un objeto) y callbacks)
// Deferred object son las promesas de jquery
//
// $.post( url, {
//   "phone":"455354",
//   "terms":true
// }).then(function(response){
//   console.log(response)
// }).catch(function(error){
//   console.log(error)
// });
