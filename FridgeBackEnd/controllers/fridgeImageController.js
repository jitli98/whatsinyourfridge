const googleVision = require('./../googlevision');
const fs = require('fs');
const util = require('util');
// Obtains stored image from 'uploads' and utilize google vision api to
// compute labels which are then filtered then store in database as ingredients
const readFile = util.promisify(fs.readFile);

function getFile() {
    return readFile('controllers/filter.json')
}

filterFunc = async (data, labels) => {
    filtered_labels = [];
    data = await JSON.parse(data)[0];
    for (const label of labels) {
        if (data.includes(label.toLowerCase())) {
            filtered_labels.push(label);
        }
    }
    
    console.log(filtered_labels);
}


exports.postImage = async (req, res) => {
    try {
        const labels = await googleVision.obtainLabels();
        console.log(labels);
        // filter labels and store everything else in database
        getFile().then(data => {
            filterFunc(data, labels);
        });
        res.status(200).json({
            status: 'success'
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}