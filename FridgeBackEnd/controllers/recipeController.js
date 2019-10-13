const fetch = require('node-fetch');
const Ingredient = require('./../models/ingredientModel');

// Retrieve list of ingredients from database and call a get request
// to the Spoonacular Recipe API(with ingredients as paramters) and send
// the json file of recipes to the client
exports.getRecipes = async (req, res) => {
    try {
        // const ingredients = await Ingredient.find();
        const ingredients = ['sugar', 'apples', 'flour'];
        let url = 'https://api.spoonacular.com/recipes/findByIngredients?'
        url += 'apiKey=5b11632d08f14c3ca1620bc70757f427';
        if (ingredients.length != 0) {
            url += '&ingredients='
            if (ingredients.length >= 1) {
                url += ingredients[0];
            }
            ingredients.slice(1).forEach(ig => url += `,+${ig}`);
        } 
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        res.status(200).json({
            status: 'success',
            data: json
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}