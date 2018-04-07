import gulp from 'gulp';
import precss from 'precss';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import flexbugs from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import { obj as combine } from 'stream-combiner2';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import errorHandler from '../utils/errorHandler';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

function style() {
  return gulp
    .src('src/css/style.css')
    .pipe(plumber({ errorHandler }))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(
      postcss([
        precss,
        flexbugs,
        autoprefixer,
        mqpacker({
          sort: true,
        }),
      ]),
    )
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulp.dest('build/css'))
    .pipe(gulpIf(!isDev, combine(csso({ restructure: false }), rename('style.min.css'))))
    .pipe(gulp.dest('build/css'));
}

export default style;
