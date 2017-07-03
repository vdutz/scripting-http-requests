module.exports = function getHTML (options, callback) {
    /* Your code here */

  var https = require('https');

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
};