var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('reload', function() {
    livereload.reload("./html5.html");
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./html5.html', ['reload']);
});