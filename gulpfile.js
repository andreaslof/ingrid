var gulp  = require('gulp')
  , $     = require('gulp-load-plugins')({camelize: true});

var paths = {
  'scss': 'scss/**/*.scss'
};

gulp.task('clean', function () {
  return gulp.src('css', {read: false})
              .pipe($.rimraf());
});

gulp.task('grid', ['clean'], function () {
  return gulp.src(paths.scss)
              .pipe($.rubySass({
                "compass": true,
                "style": "compressed"
              }).on('error', function (msg) { console.log(msg); }))
              .pipe($.autoprefixer('last 3 version', 'ie 9'))
              .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['grid'])
      .on('change', function (evt) {
        console.log('[watcher] File '+evt.path.replace(/.*(?=sass)/,'')+' was '+evt.type+', compiling...');
      });
});

gulp.task('ci', ['grid']);
gulp.task('default', ['grid']);

