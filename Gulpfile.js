var gulp = require("gulp");
var sass = require("gulp-sass");
var webpack = require('webpack-stream');

gulp.task("sass", function() {
  gulp.src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("webpack", function(callback) {
  return gulp.src("./src/js/index.js")
  .pipe(webpack({
    output: {
      filename: "packed.js"
    }
  }))
  .pipe(gulp.dest('public/js/'));
});

gulp.task("default", ["webpack", "sass"], function() {
  gulp.watch("./src/sass/**/*.scss", ["sass"]);
  gulp.watch("./src/js/**/*.js", ["webpack"]);
});
