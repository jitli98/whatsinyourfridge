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

exports.postIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {ingredients: ingredients}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}