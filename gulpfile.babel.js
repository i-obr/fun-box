import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import style from './gulp/tasks/style';
import html from './gulp/tasks/html';
import fonts from './gulp/tasks/fonts';
import images from './gulp/tasks/images';
import symbols from './gulp/tasks/symbols';
import watch from './gulp/tasks/watch';
import server from './gulp/tasks/server';
import scripts from './gulp/tasks/scripts';
import ghPages from './gulp/tasks/deploy';
import zip from './gulp/tasks/zipArchive';

const build = gulp.series(clean, gulp.parallel(style, html, scripts, fonts), images, symbols);

const deploy = gulp.series(build, ghPages, zip);

const dev = gulp.series(build, gulp.parallel(watch, server));

export { build, dev, deploy };
