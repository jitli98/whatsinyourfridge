const express = require('express');
const ingredientController = require('./controllers/ingredientController');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'});
const app = express();

// #2 Middleware stuff
app.use(express.json());

// #3 Routing stuff
app.get('/ingredient', ingredientController.getIngredients);
app.post('/ingredient', ingredientController.postIngredients);

/// #4 Connecting to database
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection is successful!');
})

//// #5 Start server
const port = 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}......`);
})