var page = require('webpage').create();
page.viewPortSize = {
  width: 970
};
page.open('https://www.linkedin.com/in/jakobheuser', function() {
  page.clipRect = {
    top:    0,
    left:   0,
    width:  970,
    height: 600
  };
  page.render('tmp/linkedin.png');
  phantom.exit();
});
