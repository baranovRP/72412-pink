"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var webserver = require("gulp-webserver");

gulp.task("style", function() {
  return gulp.src("sass/style.{sass,scss}")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("css"));
});

gulp.task("webserver", function() {
  gulp.src("./")
    .pipe(webserver({
      fallback: "index.html",
      livereload: true,
      open: true,
      directoryListing: {
        enable: true,
        path: "public"
      }
    }));
});

gulp.task("start", ["style", "webserver"], function() {
  gulp.watch("sass/**/*.{sass,scss}", ["style"], ["webserver"]);
});



// Оставьте эту строку в самом конце файла
require("./.gosha");
