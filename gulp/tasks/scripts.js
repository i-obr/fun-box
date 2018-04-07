import gulp from 'gulp';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import gulpIf from 'gulp-if';
import buffer from 'vinyl-buffer';
import babel from 'babelify';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

function scripts() {
  const bundler = browserify('src/js/index.js', { debug: true }).transform(babel);
  return bundler
    .bundle()
    .on('error', (err) => {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulpIf(!isDev, uglify()))
    .pipe(gulp.dest('build/js'));
}

export default scripts;
