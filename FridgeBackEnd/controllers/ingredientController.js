const Ingredient = require('./../models/ingredientModel');

exports.getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).json({
            status: 'success',
            data: {ingredients}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}