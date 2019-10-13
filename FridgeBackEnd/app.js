const express = require('express');
const ingredientController = require('./controllers/ingredientController');
const fridgeImageController = require('./controllers/fridgeImageController');
const recipeController = require('./controllers/recipeController');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');


////////// #1 Setup stuff ////////////////////
dotenv.config({path: './config.env'});
const app = express();
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, 'pic.png');
    }
});
const upload = multer({storage: storage});
///////////////////////////////////////////////


//////// #2 Middleware stuff //////////////////
app.use(express.json());
app.use(express.static('./uploads/'));
///////////////////////////////////////////////


/////////// #3 Routing stuff //////////////////
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
// To handle uploads of images
app.post('/fridge-image', upload.single('fridgeImage'), fridgeImageController.postImage);
// To retrieve a list of ingredients from database
app.get('/ingredient', ingredientController.getIngredients);
// To process and retrieve a list of recipes from the Recipe API.
app.get('/recipe', recipeController.getRecipes);
//////////////////////////////////////////////


/////////// #4 Connecting to database ///////
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection is successful!');
})
/////////////////////////////////////////////


//////////// #5 Start server ////////////////
const port = 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}......`);
})
/////////////////////////////////////////////