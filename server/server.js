require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routes
app.use(require('./routes/usuario'));


//mongodb+srv://root:<password>@cluster0-no1g9.mongodb.net/test?retryWrites=true&w=majority
//mongoose.connect('mongodb://localhost/my_database', {
mongoose.connect('mongodb+srv://root:root@cluster0-no1g9.mongodb.net/cafe?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;

    console.log("Base de datos Online!");
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});