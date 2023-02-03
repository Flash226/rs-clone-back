const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const routesAuth = require('./routes/routesAuth')
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());

app.use('/auth', routesAuth);

app.use(express.static(__dirname + '/public'));


routes(app);

const start = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb+srv://Flash226:Ysl8PIle1SMoQopn@cluster0.y34raqh.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }
};

start();
