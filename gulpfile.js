var gulp = require('gulp');
  helpers = require('./gulp/helpers'),
  path = require('path');

process.env.NODE_PATH = path.resolve('./');
process.argv.push("--colors");

gulp.task('test', helpers.getTask({taskName: '/test/test'}));
gulp.task('test-watch', helpers.getTask({taskName: '/test/tdd'}));
gulp.task('tdd', gulp.series('test', 'test-watch'));


gulp.task('copy-mocks', helpers.getTask({taskName: '/mocks/copy-mocks'}));
gulp.task('mock-server', helpers.getTask({taskName: '/mocks/mock-server'}));
gulp.task('start-mock-server', gulp.series('copy-mocks', 'mock-server'));

gulp.task('default', function() {
    // default task
});
