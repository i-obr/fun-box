import gulp from 'gulp';
import njkRender from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';
import prettify from 'gulp-prettify';
import frontMatter from 'gulp-front-matter';
import errorHandler from '../utils/errorHandler';

function templates() {
  return gulp
    .src('src/html/**/[^_]*.html')
    .pipe(
      plumber({
        errorHandler,
      }),
    )
    .pipe(frontMatter({ property: 'data' }))
    .pipe(
      njkRender({
        path: ['src/html/'],
      }),
    )
    .pipe(
      prettify({
        indent_size: 2,
        wrap_attributes: 'auto',
        preserve_newlines: false,
        end_with_newline: true,
      }),
    )
    .pipe(gulp.dest('build/'));
}

export default templates;
