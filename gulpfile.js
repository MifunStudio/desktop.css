var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var studioPath = '../MifunStudio/css/desktop';

gulp.task('copy', function() {
    return gulp.src('./src/fonts/**.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('less', function() {
  return gulp.src('./src/desktop.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['copy', 'less'], function() {
    gulp.watch('src/**/*.less', ['copy', 'less']);
});

gulp.task('copy2studio', ['copy', 'less'], function() {
    return gulp.src('./dist/**.*')
        .pipe(gulp.dest(studioPath));
});

gulp.task('watch4studio', ['copy', 'less', 'copy2studio'], function() {
    gulp.watch('src/**/*.less', ['copy', 'less', 'copy2studio']);
});
