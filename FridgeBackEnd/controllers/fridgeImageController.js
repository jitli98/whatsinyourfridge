const googleVision = require('./../googlevision');

// Obtains stored image from 'uploads' and utilize google vision api to
// compute labels which are then filtered then store in database as ingredients
exports.postImage = async (req, res) => {
    try {
        const labels = await googleVision.obtainLabels();
        console.log(labels);
        // filter labels and store everything else in database
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