import browserSync from 'browser-sync';

const bs = browserSync.create();

function server() {
  bs.init({
    server: 'build',
    tunnel: true,
    open: false,
  });
  bs.watch('build/**/*.*').on('change', bs.reload);
}

export default server;
