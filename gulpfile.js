"use strict";

var gulp = require("gulp");
var webserver = require("gulp-webserver");

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

// Оставьте эту строку в самом конце файла
require("./.gosha");
