// Require packages and set the port 
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
  }
  
  app.use(cors(corsOptions));


routes(app);


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});