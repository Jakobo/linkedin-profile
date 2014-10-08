var exec = require('child_process').exec;
var pictureTube = require('picture-tube');
var dims = process.stdout.getWindowSize();
var which = require('npm-which');
var path = require('path');

// locate the correct phantom and img script
var phantom = which.sync('phantomjs', {cwd: __dirname});
var imgScript = path.join(__dirname, 'img.js');

console.log('Source @ https://github.com/Jakobo/linkedin-profile');

exec(phantom + ' ' + imgScript, function(err, stdout, stderr) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  var tube = pictureTube({
    cols: dims[0] - 1 // no wrapping now...
  });
  tube.pipe(process.stdout);

  var fs = require('fs');
  fs.createReadStream('./tmp/linkedin.png').pipe(tube);
});
