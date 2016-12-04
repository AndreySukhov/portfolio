
'use strict';

module.exports = function() {
    $.gulp.task('copy:fontawesome', function() {
        return $.gulp.src('./source/font-awesome/**/*.*', { since: $.gulp.lastRun('copy:fontawesome') })
            .pipe($.gulp.dest($.config.root + '/assets/font-awesome'));
    });
};