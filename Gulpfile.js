var gulp = require("gulp");
var server = require("gulp-express");
var sass = require("gulp-sass");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");

gulp.task("build:css", function () {
  return gulp.src("src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public/styles"))
});

gulp.task("jshint", function () {
  return gulp.src("src/app/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("uglify", function () {
  return gulp.src("src/app/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/js/app"))
});

gulp.task("build:js", ["jshint", "uglify"]);

// gulp.task("serve", ["build:css", "build:js"], function () {
//   // Start the server at the beginning of the task
//   server.run(["server.js"]);

//   // Update files when they change
//   gulp.watch(["src/styles/**/*.scss"], ["build:css"]);
//   gulp.watch(["src/app/**/*.js"], ["build:js"]);

//   gulp.watch(["server.js"], [server.run]);
// });

gulp.task("default", ["build:css", "build:js"], function() {
  // Update files when they change
  gulp.watch(["src/styles/**/*.scss"], ["build:css"]);
  gulp.watch(["src/app/**/*.js"], ["build:js"]);
});
