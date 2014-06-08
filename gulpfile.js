var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var coffee = require('gulp-coffee');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var concat = require('gulp-concat');
var declare = require('gulp-declare');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./build/'))
});

gulp.task('templates', function(){
  gulp.src(['templates/*.hbs'])
    .pipe(handlebars())
    .pipe(defineModule('plain'))
    .pipe(declare({
      namespace: 'app.templates'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task("build", ["coffee", "templates"]);

gulp.task('test', ["build"], function () {
  return gulp
  .src('test/runner.html')
  .pipe(mochaPhantomJS());
});

gulp.task('default', ['test']);
