var exec = require('child_process').exec;
var pictureTube = require('picture-tube');
var dims = process.stdout.getWindowSize();

exec('./node_modules/.bin/phantomjs ./img.js', function(err, stdout, stderr) {
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
