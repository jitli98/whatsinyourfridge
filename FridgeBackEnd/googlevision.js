const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

exports.obtainLabels = async() => {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./uploads/pic.png');
    const labels = result.labelAnnotations;
    const result_label = [];
    labels.forEach(label => result_label.push(label.description));
    return result_label;
}

// const lemmatizer = require('lemmatizer');
// console.log(lemmatizer.lemmatizer('chicken'));