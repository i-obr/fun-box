import gulp from 'gulp';
import zip from 'gulp-zip';

function zipArchive() {
  return gulp
    .src(['build/**/*', '!build/*.zip'])
    .pipe(zip('build.zip'))
    .pipe(gulp.dest('build'));
}

export default zipArchive;
