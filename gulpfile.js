var gulp = require('gulp')
  , compass = require('gulp-compass');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
      .pipe(compass({
        style: 'compressed',
        css: 'css',
        sass: 'sass'
      }))
      .on('success', function (msg) {
        console.log('Compiled '+msg);
      })
      .on('error', function (err) {
        console.log('Carp! An error occured: '+err);
      });
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass'])
      .on('change', function (evt) {
        console.log('[watcher] File '+evt.path.replace(/.*(?=sass)/,'')+' was '+evt.type+', compiling...');
      });
});

gulp.task('ci', ['sass']);
gulp.task('default', ['sass']);

