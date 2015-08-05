gulp-node-webkit-builder
========================

![](http://img.shields.io/badge/npm_module-v1.2.1-green.svg?style=flat)  ![][david-url]
![][travis-url]

Help developers build their own `nw.js` apps for different platforms such as win, mac and linux with gulp.
## Information

<table>
<tr>
<td>Package</td><td>gulp-node-webkit-builder</td>
</tr>
<tr>
<td>Description</td>
<td>A simple wrapper for `nw-builder`</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.12</td>
</tr>
</table>

## Usage

```javascript
var builder = require('gulp-node-webkit-builder');

gulp.task('scripts', function() {
  return gulp.src(['./resources/**/*'])
    .pipe(builder({
        version: 'v0.12.2',
        platforms: ['win64']
     }));
});

```

This will pass all the files into `nw-builder`, and generate the `nw.js` app.

It's better you use [nw-builder](https://github.com/nwjs/nw-builder) directly, since nothing special here but a simple wrapper.

## Options

All the options will be passed into `nw-builder` directly except `files`.

For detail description, see: [Options](https://github.com/nwjs/nw-builder/blob/master/README.md)


## LICENSE

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


[travis-url]:https://api.travis-ci.org/leftstick/gulp-node-webkit-builder.svg?branch=master
[david-url]:https://david-dm.org/leftstick/gulp-node-webkit-builder.png
