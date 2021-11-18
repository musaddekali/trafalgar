const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const path = {
    scss: './assets/scss/**/*.scss',
}

/// Scss to css task
function buildStyle() {
    return src(path.scss, { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer('last 2 versions'), cssnano()]))
        .pipe(dest('./assets/css', { sourcemaps: '.' }));
}

/// Watch task
function watchFiles() {
    return watch(
        [path.scss],
        //  delay for run watch
        // { interval: 1000, usePolling: true },
        series(parallel(buildStyle))
    );
}

exports.default = series(parallel(buildStyle), watchFiles);

