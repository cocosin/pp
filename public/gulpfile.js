/**
 * Created by Constantine on 18.10.2015.
 */
"use strict";
let gulp = require('gulp'),
    concat = require('gulp-concat'),
    gulp_react = require('gulp-react'),
    gulp_babel = require('gulp-babel'),
    gulp_change = require('gulp-change');

let toJsModule = (content) => {
    return '(() => {\n' + content + '\n})();\n';
};

gulp.task('default', () => {
    gulp.src([
            './js/modules/**/*.js'
        ])
        .pipe(gulp_change(toJsModule))
        .pipe(concat('app.js'))
        .pipe(gulp_react())
        .pipe(gulp_babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./js/'));
});