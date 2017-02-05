const builder = require('../');
const gulp = require('gulp');

describe('gulp-nw-builder', () => {

    it('default test', done => {

        gulp.src(['test/resources/*.*'])
            .pipe(builder({
                version: '0.20.1',
                platforms: [
                    'osx64'
                ]
            }))
            .on('end', () => {
                done();
            })
            .on('error', err => {
                done(err);
            });
    });

});
