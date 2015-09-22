var NwBuilder = require('nw-builder');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-nw-builder';


var gulpNodeWebkitBuilder = function(opts) {

    var options = opts || {};

    var files = [];

    var stream = through.obj(function(file, encoding, next) {

        files.push(file.path);

        next();

    }, function(cb) {

        var _this = this;

        options.files = files;

        var nw = new NwBuilder(options);

        if(!options.quiet) {
            nw.on('log', gutil.log);
        }

        nw.build().then(function() {
            if(!options.quiet) {
                gutil.log('all done!');
            }
            cb();
        }).catch(function(err) {
            _this.emit('error', new PluginError(PLUGIN_NAME, 'Error occured while building app!'));
            return cb();
        });

    });

    // returning the file stream
    stream.resume();
    return stream;
};

module.exports = gulpNodeWebkitBuilder;
