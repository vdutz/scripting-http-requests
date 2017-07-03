var getHTML = require('./https-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */

  console.log(html.toUpperCase());
  console.log('Response stream printed in uppercase.')

}

getHTML(requestOptions, printUpperCase);