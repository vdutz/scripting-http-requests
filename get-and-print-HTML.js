var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  var fullData = ""

  https.get(requestOptions, function(response) {

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

getAndPrintHTML()