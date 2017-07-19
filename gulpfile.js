var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('express');
var bodyParser = require('body-parser');
var level = require('level');
var levelDown = require('leveldown');
var levelUp = require('levelup');
var morgan = require('morgan');
var morganJson = require('morgan-json');
var randomNumber = require('random-number');
// var browserSync = require('browser-sync').create();
var rutasPublic = {
  public: 'public',
  css : 'public/assets/css',
  jsPublic :'public/assets/js',
  htmlPublic:'public/views'
}
var rutas = {
  html: 'src/views/*.html',
  scss: 'src/assets/scss/style.scss',
  js: 'src/assets/js/app.js',
}


gulp.task('prepararHTML', function(){
  gulp.src(rutas.html)
  .pipe(gulp.dest(rutasPublic.htmlPublic))
});

gulp.task('prepararCSS', function(){
  gulp.src(rutas.scss)
  .pipe(sass({
    outputStyle:"compressed"
  }))
  .on('error', sass.logError)
  .pipe(gulp.dest(rutasPublic.css))
});

gulp.task('prepararJS', function(){
  gulp.src(rutas.js)

  .pipe(gulp.dest(rutasPublic.jsPublic))
});

//terminadas las tareas, se hacen las tareas de watch
//tienen tres parámetros
//para ello hay que installar browserSync

// gulp.task('html-watch', ['prepararHTML'], function(done){
//   browserSync.reload();
//   done();
// });
//
// gulp.task('scss-watch', ['prepararCSS'], function(done){
//   browserSync.reload();
//   done();
// });
//
// gulp.task('js-watch', ['prepararJS'], function(done){
//   browserSync.reload();
//   done();
// });
//
// //para levantar el servidor o la que estará observando los cambios
//
// gulp.task('serve', function(){
//   browserSync.init({
//     server:{
//       baseDir: './public/views'
//     }
//   });
  gulp.watch(rutas.html);
  gulp.watch(rutas.scss);
  gulp.watch(rutas.js);
// })
