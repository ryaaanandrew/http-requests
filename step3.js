var https = require('https');

function getAndPrintHTMLChunks (host, path) {
  var requestOptions = {
    host: host,
    path: path,
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

getAndPrintHTMLChunks('sytantris.github.io', '/http-examples/step3.html')