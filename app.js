const express = require('express');
const PORT = process.env.PORT || 3002;
const connectToDatabase = require('./database');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const routesAuth = require('./routes/routesAuth');
const routesProfile = require('./routes/routesProfile');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
})
  
const upload = multer({ storage: storage });

app.post('/uploadfile', upload.single('image'), function (req, res, next) {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(file);
  })

app.use('/auth', routesAuth);

app.use('/auth', routesProfile);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

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
