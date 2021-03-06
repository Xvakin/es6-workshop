var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    serve = require('browser-sync'),
    sync = require('run-sequence');

var path = {
    app: ['client/app/**/*.js']
};

gulp.task('build', function () {
    return gulp.src('client/app/app.js')
        .pipe(webpack(require('webpack.config')))
        .pipe(gulp.dest('client'));
});

gulp.task('serve', function () {
    serve({
        port: 4500,
        open: false,
        server: {
            baseDir: 'client'
        }
    })
});

gulp.task('watch', function () {
    gulp.watch(path.app, ['build', serve.reload]);
});

gulp.task('dev', function () {
    sync('build', 'watch', done);
});