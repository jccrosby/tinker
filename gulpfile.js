var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');
var mocha = require('gulp-mocha');
var webpackConfig = require('./webpack.config');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');


var babelConfig = {
    "presets": ["react", "es2015"]
};

var base = {
    clientSrc: './src/client/**/*.jsx',
    buildDest: './public/scripts'
}

gulp.task('babel', () => {
    gulp.src(base.clientSrc)
        .pipe(babel(babelConfig));
});

gulp.task('webpack', () => {
    gulp.src(base.clientSrc)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(base.buildDest));
});

gulp.task('watch', () => {
    gulp.src(base.clientSrc)
        .pipe(watch(base.clientSrc))
        .pipe(plumber())
        .pipe(babel(babelConfig))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(base.buildDest));
});
