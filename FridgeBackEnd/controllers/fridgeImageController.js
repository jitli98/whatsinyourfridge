const googleVision = require('./../googlevision');
const fs = require('fs');
const util = require('util');
const Ingredient = require('./../models/ingredientModel');

const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

// filterFunc = async (data, labels) => {
//     try {
//         console.log('h1');
//         const file = readFile('./../filter.json');
//         console.log(file);
//         filtered_labels = [];
//         const data = await JSON.parse(file)[0];
//         for (const label of labels) {
//             if (data.includes(label.toLowerCase())) {
//                 filtered_labels.push(label);
//             }   
//         }
//         console.log(filtered_labels);
//         return filtered_labels;
//     } catch (error) {
//         console.error(error);
//     }
// }

// Obtains stored image from 'uploads' and utilize google vision api to
// compute labels which are then filtered then store in database as ingredients
exports.postImage = async (req, res) => {
    try {
        const labels = await googleVision.obtainLabels();
        // filter labels and store everything else in database
        file = await readFile(`${__dirname}/../filter.json`);
        filtered_labels = [];
        const data = await JSON.parse(file)[0];
        for (const label of labels) {
            if (data.includes(label.toLowerCase())) {
                filtered_labels.push(label.toLowerCase());
            }   
        }
        const result = []
        filtered_labels.forEach(label => result.push({"name" : label}));
        await Ingredient.create(result);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}