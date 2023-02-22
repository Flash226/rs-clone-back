const express = require('express');
const PORT = process.env.PORT || 3002;
const connectToDatabase = require('./database');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const routesAuth = require('./routes/routesAuth');
const routesProfile = require('./routes/routesProfile');
const handleFileUpload = require('./routes/upload');
const cors = require('cors');
const path = require('path');
let lastChange = new Date;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());

app.post('/uploadfile', handleFileUpload);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

app.post('*', function(req, res, next) {
  lastChange = new Date();
  next();
});

app.get('/change-time', function(req, res, next) {
  res.send({message: lastChange});
});

app.use('/auth', routesAuth);

app.use('/auth', routesProfile);

routes(app);

const start = async () => {
    try {
      await connectToDatabase();
      app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }
};

start();
