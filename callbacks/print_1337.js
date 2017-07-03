var getHTML = require('./https-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  /* Write your code here! */
  var inLetters = ["a", "e", "o", "l", "s", "t"]
  var outLetters = ["4", "3", "0", "1", "5", "7"]
  // Note: did not include the following: 'ck' : 'x', 'er' : '0r', 'you' : 'j00'

  var modifiedHTML = ""
  for (var i = 0; i <   html.length; i++) {
    var change = false
    for (var j = 0; j < inLetters.length; j++) {
      if (html[i] === inLetters[j]) {
        modifiedHTML += outLetters[j]
        change = true
      }
    }
    if (change == false) {
      modifiedHTML += html[i]
    }
  }
  //return modifiedHTML

  console.log(modifiedHTML);
  console.log('Response stream printed in 1337-speak.')

}

getHTML(requestOptions, print1337);