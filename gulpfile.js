const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const preproc = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');






gulp.task('build', function(){
	gulp.src('./precss/*.less')
		.pipe(preproc())
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS())
		.pipe(gulp.dest('./css'));

        gulp.src('./css/')
        .pipe(gcmq())
        .pipe(gulp.dest('dest'));
});

gulp.task('watch', ['browsersync'],  function(){
	gulp.watch('./precss/*.less', ['build']);
    gulp.watch("*.html").on('change', browserSync.reload);
	

});

gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});

