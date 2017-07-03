var getHTML = require('./https-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */

  console.log(html.toLowerCase());
  console.log('Response stream printed in lowercase.')

}

getHTML(requestOptions, printLowerCase);