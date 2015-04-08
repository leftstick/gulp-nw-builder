/* jshint node: true */
/* global describe, it */

'use strict';

var builder = require('../');
var gulp = require('gulp');

require('mocha');

describe('gulp-node-webkit-builder', function() {

    it('default test', function(done) {

        gulp.src(['test/resources/*.*'])
            .pipe(builder({
                version: 'v0.12.0',
                platforms: ['osx64']
            }))
            .on('end', function() {
                done();
            })
            .on('error', function(err) {
                done(err);
            });
    });

});
