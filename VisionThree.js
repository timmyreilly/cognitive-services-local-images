https = require('https');
require("dotenv").config();
var fs = require('fs')

console.log('***************************** Start Run ****************************')

// https://southcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en
var options = {
    hostname: 'southcentralus.api.cognitive.microsoft.com',
    port: 443,
    path: '/vision/v1.0/describe',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': process.env.VISION_KEY
    }
};

var req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
        var result = JSON.parse(chunk).description.captions[0].text;
        console.log(result);
        console.log = {
            body: result
        };
    });

});

data = fs.readFileSync('./ballmer.jpg');
console.log(data);

// write data to request body
req.write(data);
req.end();
