var getHTML = require('./https-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
  console.log('Response stream printed.')
}

getHTML(requestOptions, printHTML)