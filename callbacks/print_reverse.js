var getHTML = require('./https-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  htmlReversed = html.split("").reverse().join("")
  console.log(htmlReversed);
  console.log('Response stream printed in reverse.')

}

getHTML(requestOptions, printReverse);