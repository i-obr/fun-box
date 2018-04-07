import gulp from 'gulp';

function fonts() {
  return gulp.src('src/fonts/**.*', { since: gulp.lastRun(fonts) }).pipe(gulp.dest('build/fonts'));
}

export default fonts;
