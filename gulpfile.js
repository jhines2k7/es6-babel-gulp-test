var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('es6To5', function(){
    return gulp.src('js/src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['es6To5']);   