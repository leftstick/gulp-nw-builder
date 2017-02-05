gulp-nw-builder
========================

[![NPM version][npm-image]][npm-url]
![][david-url]
![][travis-url]

Help developers build their own `nw.js` apps for different platforms such as win, mac and linux with gulp.
## Information

<table>
<tr>
<td>Package</td><td>gulp-nw-builder</td>
</tr>
<tr>
<td>Description</td>
<td>A simple wrapper for `nw-builder`</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 7.0</td>
</tr>
</table>

## Usage

```javascript
var builder = require('gulp-nw-builder');

gulp.task('scripts', function() {
  return gulp.src(['./resources/**/*'])
    .pipe(builder({
        version: '0.20.1',
        platforms: ['osx64']
     }));
});

```

This will pass all the files into `nw-builder`, and generate the `nw.js` app.

It's better you use [nw-builder](https://github.com/nwjs/nw-builder) directly, since nothing special here but a simple wrapper.

## Options

All the options will be passed into `nw-builder` directly except `files`.

For detail description, see: [Options](https://github.com/nwjs/nw-builder/blob/master/README.md)

Additionally, `quiet: true` will disable all logging to gulp.

## LICENSE

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-nw-builder
[npm-image]: https://badge.fury.io/js/gulp-nw-builder.png
[travis-url]:https://api.travis-ci.org/leftstick/gulp-nw-builder.svg?branch=master
[david-url]:https://david-dm.org/leftstick/gulp-nw-builder.png
