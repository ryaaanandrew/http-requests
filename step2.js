var https = require('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }
  var bufferData = '';

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferData += data;
      console.log('data: ', bufferData);
    });


    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

};

getAndPrintHTMLChunks()