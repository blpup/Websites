var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');
var type = require('gulp-typescript');
var mainBowerFiles = require('main-bower-files');
gulp.task('bower',function(){
  return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
  .pipe(gulp.dest('../dist/js/'));
})
gulp.task('sass',function(){
  return gulp.src('./sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('../dist/css'))
})
gulp.task('typescript',function(){
  return gulp.src('./typescript/*.ts')
  .pipe(type())
  .pipe(gulp.dest('../dist/js'))
})
gulp.task('watch',function(){
  gulp.watch('./sass/*.scss',['sass'])
  gulp.watch('./typescript/*.ts',['typescript'])
})
gulp.task('default',['bower','sass','typescript','watch']);
