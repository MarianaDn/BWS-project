'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//style paths
const sassFiles = 'template_4/scss/**/*.scss';
const cssDest = 'template_4/css/';

function buildStyles() {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
}

exports.buildStyles = buildStyles;