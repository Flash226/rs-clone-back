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
const crypto = require('crypto');
const fs = require('fs');
let lastChange = new Date;

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
  fs.readFile(req.file.path, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      const hash = crypto.createHash('md5');
      hash.update(data);
      const fileHash = hash.digest('hex');
      const extension = req.file.originalname.split('.').pop();
      const oldPath = req.file.path;
      const newPath = `uploads/${fileHash}.${extension}`;
      fs.rename(oldPath, newPath, err => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.json({ filename: `${fileHash}.${extension}` });
        }
      });
    }
  });
})

app.post('*', function(req, res, next) {
  lastChange = new Date();
  next();
});

app.get('/change-time', function(req, res, next) {
  res.send({message: lastChange});
});

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
