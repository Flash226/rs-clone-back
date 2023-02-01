const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use(express.static(__dirname + '/public'));

app.use(cors());

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});