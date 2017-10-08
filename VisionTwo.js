require("dotenv").config();

var fetch = require('node-fetch')
var fs = require('fs')

x = fs.readFileSync('./ballmer.jpg');
console.log(x);
data = x; 

// Make call for visualFeatures = Faces
fetch('https://southcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': process.env.VISION_KEY
    },
    body: data
}).then(response => {
    return response.json()
}).then(json => {
    console.log('******************************')
    console.log('*** Computer Vision: Faces ***')
    console.log('******************************')
    console.log(json)
    console.log()
}).catch(err => { console.log(err) })

// Make call for visualFeatures = Categories
fetch('https://southcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': process.env.VISION_KEY
    },
    body: data
}).then(response => {
    return response.json()
}).then(json => {
    console.log('***********************************')
    console.log('*** Computer Vision: Categories ***')
    console.log('***********************************')
    console.log(json)
    console.log()
}).catch(err => { console.log(err) })

