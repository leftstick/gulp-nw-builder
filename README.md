gulp-node-webkit-builder
========================

![](http://img.shields.io/badge/npm_module-v1.2.0-green.svg?style=flat)  ![][david-url]
![][travis-url]

Help developers build their own node-webkit apps for different platforms such as win, mac and linux with gulp.
## Information

<table>
<tr> 
<td>Package</td><td>gulp-node-webkit-builder</td>
</tr>
<tr>
<td>Description</td>
<td>A simple wrapper for `node-webkit-builder`</td>
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

This will pass all the files into `node-webkit-builder`, and generate the `node-webkit` app.

It's better you use [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder) directly, since nothing special here but a simple wrapper.

## Options

All the options will be passed into `node-webkit-builder` directly except `files`.

For detail description, see: [Options](https://github.com/mllrsohn/node-webkit-builder/blob/master/README.md)


## LICENSE

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


[travis-url]:https://api.travis-ci.org/leftstick/gulp-node-webkit-builder.svg?branch=master
[david-url]:https://david-dm.org/leftstick/gulp-node-webkit-builder.png