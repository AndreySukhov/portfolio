'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    //var locals = $.gulp.src()


    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({
          locals: JSON.parse($.fs.readFileSync('./source/data/data.json', 'utf8')),
          pretty: true
      }))
        .pipe($.gulp.dest('dist'))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
