var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */

  var fullData = ""

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      fullData += data.toString()
    })

    response.on('end', function() {
      console.log('Response stream complete.')
      callback(fullData)
    })
  })

}

function printHTML (html) {
  console.log(html);
  console.log('Response stream printed.')
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)