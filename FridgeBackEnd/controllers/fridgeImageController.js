
exports.postImage = async (req, res) => {
    try {
        console.log(req.file);
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