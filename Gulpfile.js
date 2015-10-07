var gulp = require("gulp");
var sass = require("gulp-sass");
var webpack = require('webpack-stream');

gulp.task("sass", function() {
  gulp.src("./public/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("webpack", function(callback) {
  return gulp.src("./public/js/index.js")
  .pipe(webpack({
    output: {
      filename: "packed.js"
    }
  }))
  .pipe(gulp.dest('public/js/'));
});

gulp.task("default", ["webpack", "sass"], function() {
  gulp.watch("/public/sass/**/*.scss", ["sass"]);
  gulp.watch(["public/js/**/*.js"], ["webpack"]);
});
