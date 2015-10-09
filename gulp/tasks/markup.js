var gulp = require('gulp');
var config = require('../config');


gulp.task('markup', function() {
  return gulp.src(config.src + "/app/**/*.html")
  .pipe(gulp.dest(config.dest + "/views/"))
})
