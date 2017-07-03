var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */

  var fullData = ""

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      fullData += data.toString()
    })

    response.on('end', function() {
      console.log('Response stream complete.')
      console.log(fullData)
      console.log('Response stream printed.')
    })
  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)

