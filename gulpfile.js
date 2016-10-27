var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer =  require('vinyl-buffer');
var b      = require('browserify');
var hbsfy  = require('hbsfy');
var sassify = require('sassify');
var babelify = require('babelify');

gulp.task('template', function() {
    var bundler = b('./', {
        debug: true
    })
    .transform(hbsfy)
    .transform(sassify, {
        'auto-inject': true,
        base64Encode: true,
        sourceMap: false
    })
    .transform(babelify);

    bundler
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./'));
});