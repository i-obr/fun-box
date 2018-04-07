import gulp from 'gulp';
import style from './style';
import html from './html';
import images from './images';
import symbols from './symbols';
import scripts from './scripts';

function watch() {
  gulp.watch('src/html/**/*.html', gulp.series(html, symbols));
  gulp.watch('src/css/**/*.css', style);
  gulp.watch('src/img/*.{png,jpg,gif,svg}', images);
  gulp.watch('src/img/icons/*.svg', symbols);
  gulp.watch('src/js/**/*.js', scripts);
}

export default watch;
