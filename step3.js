var https = require('https');

function getAndPrintHTMLChunks (options) {

  var bufferData = '';

  https.get(options, function (response){
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTMLChunks(requestOptions)