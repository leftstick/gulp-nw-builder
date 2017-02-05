const NwBuilder = require('nw-builder');
const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-nw-builder';


const gulpNodeWebkitBuilder = function(opts = {}) {

    const options = opts;

    const files = [];

    const stream = through.obj(function(file, encoding, next) {

        files.push(file.path);

        next();

    }, function(cb) {

        options.files = files;

        const nw = new NwBuilder(options);

        if (!options.quiet) {
            nw.on('log', gutil.log);
        }

        nw.build()
            .then(() => {
                if (!options.quiet) {
                    gutil.log('all done!');
                }
                cb();
            })
            .catch(err => {
                this.emit('error', new PluginError(PLUGIN_NAME, 'Error occurred while building app: ' + err));
                return cb();
            });

    });

    // returning the file stream
    stream.resume();
    return stream;
};

module.exports = gulpNodeWebkitBuilder;
