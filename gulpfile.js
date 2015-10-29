var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
  return gulp.src('./src/desktop.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['less'], function() {
    gulp.watch('src/**/*.less', ['less']);
});
