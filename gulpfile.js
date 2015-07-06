var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('es6To5', function(){
    return gulp.src('js/src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    return gulp.src('js/lib/**/*')
        .pipe(gulp.dest('dist/lib'))
})

gulp.task('default', ['copy', 'es6To5']);   